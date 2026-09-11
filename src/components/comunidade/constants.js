/* ------------------------------------------------------------------ */
/*  Fonte única de preço e checkout da Comunidade PGAR.                */
/*  Mudou o valor? Muda aqui, e a página inteira acompanha.            */
/* ------------------------------------------------------------------ */

export const CHECKOUT_URL_BASE = "https://pay.hub.la/SWYwhjMGcTtwMN8YuBu2";

/*  O preço, único e fixo. O lote dos 10 primeiros com o cupom PGAR397
    foi encerrado em 2026-09-11: não há mais camada promocional nem
    contagem de vagas, e o checkout vai limpo, sem cupom na URL.       */
export const PRICE_CASH = "R$ 497";
export const PRICE_INSTALLMENT = "6x de R$ 92,33";
export const PRICE_FULL_LABEL = "R$ 497 à vista ou 6x de R$ 92,33";

/*  Só o número da parcela, para quando a frase já diz "6x de" ou
    "por mês" e repetir o prefixo ficaria redundante.                  */
export const PRICE_INSTALLMENT_VALUE = "R$ 92,33";

/*  Selo de lançamento: enquadra os R$ 497 como preço de entrada, e
    não como o preço definitivo. É o que abre margem para subir mais
    adiante sem parecer aumento arbitrário — quem entrar agora terá
    pago o preço de lançamento, e isso fica dito desde já.

    Quando o preço subir: troque PRICE_* acima e apague LANCAMENTO_ATIVO
    (ou ponha false), que o selo some da página inteira sozinho.       */
export const LANCAMENTO_ATIVO = true;
export const LANCAMENTO_SELO = "Preço de lançamento";
export const LANCAMENTO_NOTA =
    "Valor de lançamento da Comunidade. Quem entra agora paga este preço.";

/*  Checkout sem parâmetro de cupom. buildCheckoutUrl usa
    URL/searchParams, então os parâmetros de atribuição entram aqui
    sem conflito.                                                      */
export const CHECKOUT_URL = CHECKOUT_URL_BASE;

/* ------------------------------------------------------------------ */
/*  Pós-compra: para onde o aluno vai depois de pagar.                 */
/*  Usados na página /obrigado-comunidade.                             */
/* ------------------------------------------------------------------ */

/*  Área de membros da Hubla. O acesso é liberado pelo e-mail usado na
    compra — daí o aviso na página, que evita a dúvida mais comum.     */
export const AREA_MEMBROS_URL = "https://app.hub.la/m/bRuz6zk659j0j9AuykEc";

/*  Convite do grupo de WhatsApp da comunidade.                        */
export const GRUPO_WHATSAPP_URL =
    "https://chat.whatsapp.com/CkFtn6boW16AGNGa7lq8qR?s=cl&p=i&mlu=4&ilr=4";

/*  Suporte no WhatsApp, para quem não conseguir abrir um dos acessos.
    SUPORTE_TELEFONE é o número como a pessoa lê; SUPORTE_WHATSAPP_URL
    é o mesmo número no formato do wa.me (55 + DDD + número, só
    dígitos), com uma mensagem pronta para o aluno só apertar enviar.  */
export const SUPORTE_TELEFONE = "(11) 96507-1674";
export const SUPORTE_WHATSAPP_URL =
    "https://wa.me/5511965071674?text=" +
    encodeURIComponent(
        "Olá! Acabei de comprar a Comunidade PGAR e preciso de ajuda com o meu acesso."
    );
