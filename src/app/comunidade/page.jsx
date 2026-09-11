import { ComunidadePage } from "../../components/comunidade/ComunidadePage";
import {
    PRICE_CASH,
    PRICE_INSTALLMENT,
} from "../../components/comunidade/constants";

/*  O preço entra na description para o Google e o preview do WhatsApp
    não prometerem um valor diferente do que a página mostra.           */
const descricaoPreco =
    "Valor de lançamento: " + PRICE_CASH + " à vista ou " + PRICE_INSTALLMENT + ".";

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
