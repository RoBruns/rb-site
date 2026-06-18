# Formulário de candidatura nativo (substituir Tally)

**Data:** 2026-06-18
**Página:** `/mentoria-altorendimento` — seção `#candidatura` (`FinalCTA.jsx`)

## Objetivo

Substituir o iframe embedado do Tally por um formulário multi-step nativo,
seguindo a estética já estabelecida no `PreCadastroForm.jsx` e as "Pages" do
formulário Tally atual (ver fotos do usuário). Sem Meta Pixel nesta etapa
(será adicionado depois).

## Decisões

- **Formato:** multi-step com transições animadas + barra de progresso (igual ao PreCadastroForm).
- **Local:** dentro da seção `#candidatura` no `FinalCTA.jsx`, no lugar do `<iframe>`. Texto "As vagas são limitadas." é mantido.
- **Primitivos visuais:** extraídos para `src/components/form/` e compartilhados entre `PreCadastroForm` e `CandidaturaForm` (sem duplicação).
- **Tracking:** nenhum Pixel agora. Apenas POST para webhook.
- **n8n:** o nó "Tally Trigger" do workflow `Automação mentoria -> whatsapp` (id `qTL3Q13Rg9UOtnoN`) será trocado por um nó Webhook via MCP, mantendo o resto do fluxo (Google Sheets → Switch → WhatsApp) intacto.

## Arquitetura

### Extração de primitivos compartilhados → `src/components/form/`

Mover de `PreCadastroForm.jsx` para módulos reutilizáveis:

- `src/components/form/motion.js` — `EASE`, `stepVariants`, `container`, `item`.
- `src/components/form/Field.jsx` — `Field`, `inputBase` (export).
- `src/components/form/PhoneInput.jsx` — `COUNTRIES`, `onlyDigits`, `formatPhone`, `PhoneInput`.
- `src/components/form/Buttons.jsx` — `PrimaryButton`, `BackLink`.
- `src/components/form/ProgressBar.jsx` — `ProgressBar`.
- `src/components/form/SuccessScreen.jsx` — `SuccessScreen` parametrizado por props (título, parágrafos, label) para servir aos dois fluxos.
- `src/components/form/AmbientBackground.jsx` — o fundo com glows + grid (opcional; usado quando full-screen). No `FinalCTA` o fundo já existe na seção, então o form **não** renderiza `AmbientBackground` lá.

`PreCadastroForm.jsx` passa a importar esses módulos (apenas troca de imports; comportamento inalterado).

### Novo componente `src/components/mentoria/CandidaturaForm.jsx`

`"use client"`. Estado: `[step, dir]`, `data` (todos os campos abaixo), `country` + `phoneDigits`, `submitting`, `submitError`.

`TOTAL_STEPS = 7` (índices 0–6); a barra de progresso conta os passos preenchíveis (1–5) como no PreCadastro.

#### Passos

| # | Conteúdo | Campo / chave de estado | Validação p/ avançar |
|---|----------|--------------------------|----------------------|
| 0 | Boas-vindas: "Seja bem vindo Treinador de Goleiros de Alto Rendimento" + parágrafo + botão "Começar" | — | botão |
| 1 | "Informações Pessoais": Nome completo, WhatsApp (PhoneInput), E-mail | `nome`, `phoneDigits`+`country`, `email` | nome não-vazio, telefone ≥ 8 dígitos, email válido |
| 2 | "Por que você acredita que participar deste programa é a oportunidade ideal para você e para o sua carreira?" (textarea) | `oportunidade` | textarea não-vazio |
| 3 | "Entre todas as pessoas interessadas, por que eu deveria aceitar você?" (textarea) | `porqueVoce` | textarea não-vazio |
| 4 | Pergunta do investimento (R$5.000 / 12x R$416,67) com **2 botões de escolha** | `investimento` | uma opção selecionada → avança ao clicar |
| 5 | "O que precisa acontecer com você ao final do programa para que tenha valido a pena trabalhar comigo nesse programa?" (textarea) → **Submit** | `validacao` | textarea não-vazio |
| 6 | Tela de sucesso (SuccessScreen) | — | — |

**Step 4 — investimento.** Dois botões estilo "pill" (cartões selecionáveis na estética do site). Os textos das opções DEVEM ser exatamente:
- `"Sim, faz sentido pra mim"`
- `"Não faz sentido pra mim"`

Esses strings são consumidos pelo nó Switch do n8n (compara com `"Não faz sentido pra mim"` para decidir se envia a mensagem de WhatsApp). Qualquer divergência quebra o roteamento.

### Envio (webhook)

POST `JSON` para `process.env.NEXT_PUBLIC_CANDIDATURA_WEBHOOK` (com fallback para a URL de produção do webhook node, definida após criação no n8n).

**Payload** — chaves exatas que o workflow já mapeia no Google Sheets, cada uma como objeto `{ value }` (formato que o Tally entregava):

```json
{
  "question_1EaMR1": { "value": "<nome completo>" },
  "question_M5xLVk": { "value": "<whatsapp E.164, ex +5511942861882>" },
  "question_J04LBK": { "value": "<email>" },
  "question_g4oLOD": { "value": "<oportunidade>" },
  "question_yDax7X": { "value": "<porque voce>" },
  "question_XqbENL": { "value": "<Sim, faz sentido pra mim | Não faz sentido pra mim>" },
  "question_8elGEz": { "value": "<validacao>" },
  "origem": "candidatura-mentoria",
  "enviado_em": "<ISO 8601>"
}
```

WhatsApp enviado em E.164 (`+${dial}${digits}`), como no PreCadastroForm. (O nó de WhatsApp do Evolution usa esse valor como `remoteJid`; mantém o comportamento do Tally, que enviava o número formatado.)

Em caso de `!res.ok` ou exceção: `setSubmitError(true)`, permanece no passo. Em sucesso: `go(6)`.

### FinalCTA.jsx

- Remover `useEffect` + injeção do script Tally + constante `TALLY_SRC` + `<iframe>`.
- Remover `import { useEffect }` se não usado mais.
- Renderizar `<CandidaturaForm />` no bloco onde estava o iframe (mantendo o wrapper `motion.div` de entrada e o texto/título da seção).

## Alterações no n8n (via MCP)

Workflow `Automação mentoria -> whatsapp` (`qTL3Q13Rg9UOtnoN`):

1. Remover nó "Tally Trigger".
2. Adicionar nó **Webhook** (POST, path dedicado, responde 200). Conectar `Webhook → Append row in sheet`.
3. Ajustar o mapeamento do Google Sheets: as expressões hoje leem `$json.question_X.value`. Como o payload mantém o mesmo formato `{ value }`, o mapeamento deve continuar válido — verificar e ajustar caso o Webhook aninhe o body sob `$json.body`.
4. Pegar a Production URL do Webhook e fornecer ao usuário para `NEXT_PUBLIC_CANDIDATURA_WEBHOOK`.

## Fora de escopo

- Meta Pixel / CAPI nesta página (etapa futura).
- Alterar a lógica do Switch ou a mensagem de WhatsApp.
- Página dedicada `/candidatura` (fica embedado na seção).

## Critérios de sucesso

- Seção `#candidatura` renderiza o form nativo, sem nenhuma referência ao Tally.
- Submissão de teste cria uma linha no Google Sheet com todas as 7 colunas preenchidas e dispara o WhatsApp quando a resposta de investimento ≠ "Não faz sentido pra mim".
- `PreCadastroForm` continua visual e funcionalmente idêntico após a extração dos primitivos.
- Build do Next passa sem erros.
