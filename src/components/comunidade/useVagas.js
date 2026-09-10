"use client";

import { useEffect, useState } from "react";
import {
    PROMO_ATIVA,
    VAGAS_TOTAIS,
    VAGAS_RESTANTES as VAGAS_RESTANTES_BUILD,
    CHECKOUT_URL_BASE,
    PROMO_CUPOM,
    PRICE_CASH,
    PRICE_INSTALLMENT,
    PRICE_INSTALLMENT_VALUE,
    PROMO_PRICE_CASH,
    PROMO_PRICE_INSTALLMENT,
    PROMO_PRICE_INSTALLMENT_VALUE,
} from "./constants";

/* ------------------------------------------------------------------ */
/*  Quantas vagas do lote promocional ainda restam, ao vivo.           */
/*                                                                     */
/*  O site é estático (output: 'export'), então o número não pode vir  */
/*  do build — ele vem da rota pública `comunidade-vendas` no          */
/*  Supabase, que devolve { vendas: N }: quantas vendas da Comunidade  */
/*  já foram registradas no CRM.                                       */
/*                                                                     */
/*  Enquanto a resposta não chega (e se ela falhar), vale o valor      */
/*  gravado em constants.js. Assim a página nunca pisca um lote        */
/*  cheio nem some com o desconto por causa de uma rede ruim — o pior  */
/*  caso é mostrar o número do último deploy, como era antes.          */
/* ------------------------------------------------------------------ */

const VENDAS_URL = process.env.NEXT_PUBLIC_COMUNIDADE_VENDAS_URL;

export function useVagas() {
    const [vagasRestantes, setVagasRestantes] = useState(VAGAS_RESTANTES_BUILD);

    useEffect(() => {
        if (!VENDAS_URL) return;

        const controller = new AbortController();

        fetch(VENDAS_URL, { signal: controller.signal })
            .then((r) => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
            .then((dados) => {
                const vendas = dados?.vendas;
                if (typeof vendas !== "number" || !Number.isFinite(vendas)) return;
                // Nunca abaixo de zero: passou das 10, o lote simplesmente acabou.
                setVagasRestantes(Math.max(0, VAGAS_TOTAIS - vendas));
            })
            .catch(() => {
                /* silencioso por design: fica o valor do build */
            });

        return () => controller.abort();
    }, []);

    const promoVisivel = PROMO_ATIVA && vagasRestantes > 0;

    return {
        vagasRestantes,
        vagasTotais: VAGAS_TOTAIS,
        promoVisivel,
        /*  Preço e checkout acompanham o lote pelo mesmo caminho: se a
            décima venda entrar enquanto a página está aberta, o valor
            anunciado e o link param de prometer o cupom no mesmo
            instante — nada de R$ 397 apontando para um cupom que já
            acabou.                                                     */
        precoVigenteCash: promoVisivel ? PROMO_PRICE_CASH : PRICE_CASH,
        precoVigenteInstallment: promoVisivel ? PROMO_PRICE_INSTALLMENT : PRICE_INSTALLMENT,
        precoVigenteInstallmentValue: promoVisivel
            ? PROMO_PRICE_INSTALLMENT_VALUE
            : PRICE_INSTALLMENT_VALUE,
        checkoutUrl: promoVisivel
            ? CHECKOUT_URL_BASE + "?coupon=" + PROMO_CUPOM
            : CHECKOUT_URL_BASE,
    };
}
