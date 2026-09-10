/* ------------------------------------------------------------------ */
/*  Fonte única de preço e checkout da Comunidade PGAR.                */
/*  Mudou o valor? Muda aqui, e a página inteira acompanha.            */
/* ------------------------------------------------------------------ */

export const CHECKOUT_URL_BASE = "https://pay.hub.la/SWYwhjMGcTtwMN8YuBu2";

/*  Preço cheio — vale a partir do 11º aluno.                         */
export const PRICE_CASH = "R$ 497";
export const PRICE_INSTALLMENT = "6x de R$ 92,33";
export const PRICE_FULL_LABEL = "R$ 497 à vista ou 6x de R$ 92,33";

/*  Só o número da parcela, para quando a frase já diz "6x de" ou
    "por mês" e repetir o prefixo ficaria redundante.                  */
export const PRICE_INSTALLMENT_VALUE = "R$ 92,33";

/* ------------------------------------------------------------------ */
/*  Lote promocional dos 10 primeiros.                                 */
/*                                                                     */
/*  Como funciona: os 10 primeiros usam o cupom PGAR397 no checkout e  */
/*  pagam R$ 397 na PRIMEIRA compra (os seis meses iniciais). O cupom  */
/*  vale só nessa primeira assinatura — a renovação, ao fim dos seis   */
/*  meses, sai no preço cheio de R$ 497.                               */
/*                                                                     */
/*  Manutenção: baixe VAGAS_RESTANTES a cada venda. Chegou a zero (ou  */
/*  PROMO_ATIVA = false), toda a camada promocional some da página      */
/*  sozinha e fica só o preço cheio de R$ 497.                         */
/* ------------------------------------------------------------------ */

export const PROMO_ATIVA = true;
export const VAGAS_TOTAIS = 10;
export const VAGAS_RESTANTES = 9;

export const PROMO_CUPOM = "PGAR397";
export const PROMO_PRICE_CASH = "R$ 397";
export const PROMO_PRICE_INSTALLMENT = "6x de R$ 73,75";
export const PROMO_PRICE_INSTALLMENT_VALUE = "R$ 73,75";

/*  Um único ponto decide se a camada promocional aparece. Todo
    componente pergunta por aqui, para não haver página mostrando
    R$ 397 enquanto outra já mostra R$ 497.                            */
export const PROMO_VISIVEL = PROMO_ATIVA && VAGAS_RESTANTES > 0;

/*  O que o visitante paga hoje, de fato. Use estes dois em qualquer
    lugar que anuncie "o preço" sem falar de lote.                     */
export const PRECO_VIGENTE_CASH = PROMO_VISIVEL ? PROMO_PRICE_CASH : PRICE_CASH;
export const PRECO_VIGENTE_INSTALLMENT_VALUE = PROMO_VISIVEL
    ? PROMO_PRICE_INSTALLMENT_VALUE
    : PRICE_INSTALLMENT_VALUE;
export const PRECO_VIGENTE_INSTALLMENT = PROMO_VISIVEL
    ? PROMO_PRICE_INSTALLMENT
    : PRICE_INSTALLMENT;

/*  Enquanto houver vaga, o botão leva ao checkout com o cupom já
    aplicado — ninguém perde o desconto por esquecer de digitar.
    O desconto incide só na primeira compra; a renovação volta ao
    preço cheio. Acabou o lote, o link volta ao checkout limpo.
    (buildCheckoutUrl usa URL/searchParams, então os parâmetros de
    atribuição são somados a este ?coupon= sem apagá-lo.)              */
export const CHECKOUT_URL = PROMO_VISIVEL
    ? CHECKOUT_URL_BASE + "?coupon=" + PROMO_CUPOM
    : CHECKOUT_URL_BASE;

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
