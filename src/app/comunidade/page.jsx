import { ComunidadePage } from "../../components/comunidade/ComunidadePage";
import {
    PROMO_VISIVEL,
    PROMO_PRICE_CASH,
    PROMO_PRICE_INSTALLMENT,
    PRICE_CASH,
    PRICE_INSTALLMENT,
    VAGAS_TOTAIS,
} from "../../components/comunidade/constants";

/*  A description acompanha o lote: enquanto houver vaga promocional ela
    anuncia o preço com cupom; depois, o preço cheio. Sem isso, o Google
    e o preview do WhatsApp continuariam prometendo um valor que já
    acabou.                                                             */
const descricaoPreco = PROMO_VISIVEL
    ? "As " + VAGAS_TOTAIS + " primeiras vagas saem por " + PROMO_PRICE_CASH +
      " à vista ou " + PROMO_PRICE_INSTALLMENT + " com cupom."
    : PRICE_CASH + " à vista ou " + PRICE_INSTALLMENT + ".";

export const metadata = {
    metadataBase: new URL("https://rodrigobruns.com.br"),
    title: "Comunidade PGAR | Método para preparadores de goleiros",
    description:
        "Comunidade de preparadores de goleiros com Rodrigo Bruns, do Red Bull Bragantino. Método CIMO, encontros ao vivo e um grupo para trocar o dia a dia. " +
        descricaoPreco,
    alternates: {
        canonical: "https://rodrigobruns.com.br/comunidade",
    },
    icons: { icon: "/favico.ico" },
    openGraph: {
        title: "Comunidade PGAR | Treino não é só chute, aprenda com direção",
        description:
            "Mais de 20 anos formando goleiros e preparadores, agora reunidos em dois cursos e num grupo onde você pergunta, discorda e testa.",
        images: ["/comunidade-banner.png"],
        type: "website",
    },
};

export default function Comunidade() {
    return <ComunidadePage />;
}
