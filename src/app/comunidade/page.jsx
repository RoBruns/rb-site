import { ComunidadePage } from "../../components/comunidade/ComunidadePage";

export const metadata = {
    metadataBase: new URL("https://rodrigobruns.com.br"),
    title: "Comunidade PGAR | Preparação de Goleiros de Alto Rendimento",
    description:
        "Nunca mais treine sozinho. Grupo com o Rodrigo Bruns, encontro ao vivo todo mês e todos os cursos, enquanto você for membro.",
    icons: { icon: "/favico.ico" },
    openGraph: {
        title: "Comunidade PGAR | Nunca mais treine sozinho",
        description:
            "A comunidade do preparador de goleiros que quer ter critério pra defender cada escolha sua, ao lado de quem prepara os goleiros do Red Bull Bragantino.",
        images: ["/comunidade-banner.png"],
        type: "website",
    },
};

export default function Comunidade() {
    return <ComunidadePage />;
}
