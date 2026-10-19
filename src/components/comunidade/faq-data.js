import { PRICE_CASH, PRICE_INSTALLMENT } from "./constants";

/* ------------------------------------------------------------------ */
/*  Perguntas do FAQ. Fica fora do componente (que é "use client")     */
/*  para que a página, no servidor, monte o JSON-LD com o mesmo texto. */
/*                                                                     */
/*  Ordem: primeiro as objeções de quem compra (preparador experiente, */
/*  que já tem método e rotina de clube), depois as gerais.            */
/* ------------------------------------------------------------------ */
export const perguntas = [
    {
        q: "Já tenho minha metodologia. Serve para mim?",
        a: "É para você que mais serve. Ninguém vai apagar o seu jeito de trabalhar. A ideia é colocar o seu método à prova: levar para o encontro individual, comparar com o que se faz no alto rendimento e ajustar o que fizer sentido.",
    },
    {
        q: "Trabalho em clube e a rotina é pesada. Vou dar conta?",
        a: "Vai. Os encontros em grupo ficam gravados, o individual é marcado em um horário combinado com você e o grupo funciona no seu tempo. Você participa ao vivo quando dá e assiste depois quando não dá.",
    },
    {
        q: "Como é o contato com o Rodrigo?",
        a: "De três formas: no encontro individual, com a pauta que você trouxer; nos encontros mensais em grupo, ao vivo; e no WhatsApp, para trocar mensagem durante os seis meses.",
    },
    {
        q: "Estou começando agora. Consigo acompanhar?",
        a: "Consegue. Tem gente começando e gente com mais de 15 anos de profissão, e o ponto de partida é sempre o contexto de cada um. Ninguém precisa chegar sabendo.",
    },
    {
        q: "Trabalho no profissional, no feminino, numa escola de goleiros ou fora do Brasil. Faz sentido?",
        a: "Faz. Hoje tem preparadores de todos esses contextos no grupo, e boa parte da troca é justamente sobre como aplicar a mesma ideia em realidades diferentes.",
    },
    {
        q: "Vocês garantem vaga ou indicação?",
        a: "Não. Ninguém honesto garante isso. O que a Comunidade entrega é acesso, rede e um plano de carreira construído por você no Diagnóstico Profissional.",
    },
    {
        q: "Quando começa? Tem turma?",
        a: "Não tem turma nem data de início. Seus seis meses começam no dia da compra, e você entra direto na plataforma e no grupo.",
    },
    {
        q: "Como funcionam pagamento, garantia e cancelamento?",
        a:
            PRICE_CASH + " à vista ou " + PRICE_INSTALLMENT + " no cartão. Nos primeiros 7 dias da primeira assinatura, você pede o reembolso total sem precisar explicar o motivo. Depois disso não há reembolso proporcional, mas se cancelar você continua com acesso até o fim do período pago. A renovação é automática no cartão; no Pix, chega por e-mail.",
    },
    {
        q: "O que é a metodologia CIMO?",
        a: "Contexto, Intensidade, Mentalidade e Organização. São os quatro módulos do curso e, na prática, a ordem em que o Rodrigo pensa antes de montar um treino, da base ao profissional.",
    },
];
