import { ComunidadePage } from "../../components/comunidade/ComunidadePage";

export const metadata = {
    metadataBase: new URL("https://rodrigobruns.com.br"),
    title: "Comunidade PGAR | Método para preparadores de goleiros",
    description:
        "Comunidade de preparadores de goleiros com Rodrigo Bruns, do Red Bull Bragantino. Método CIMO, encontros ao vivo e WhatsApp direto. Seis meses por R$ 297 à vista ou 6x de R$ 55,18.",
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
