import { ComunidadePage } from "../../components/comunidade/ComunidadePage";

export const metadata = {
    metadataBase: new URL("https://rodrigobruns.com.br"),
    title: "Comunidade PGAR | Preparação de Goleiros de Alto Rendimento",
    description:
        "Todo mês você senta com quem prepara os goleiros do Red Bull Bragantino e descobre se o seu treino está certo. Grupo, encontros ao vivo e todos os cursos.",
    icons: { icon: "/favico.ico" },
    openGraph: {
        title: "Comunidade PGAR | Preparação de Goleiros de Alto Rendimento",
        description:
            "Pare de treinar no escuro. A comunidade do preparador de goleiros que quer saber se está no caminho certo.",
        images: ["/mentoria-hero.jpeg"],
        type: "website",
    },
};

export default function Comunidade() {
    return <ComunidadePage />;
}
