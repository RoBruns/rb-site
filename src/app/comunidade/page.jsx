import { ComunidadePage } from "../../components/comunidade/ComunidadePage";

export const metadata = {
    metadataBase: new URL("https://rodrigobruns.com.br"),
    title: "Comunidade PGAR | Método e preparação de goleiros",
    description:
        "Comunidade para preparadores de goleiros desenvolverem método, critério e preparo profissional. Seis meses iniciais: R$ 297 à vista ou 6x de R$ 55,18.",
    alternates: {
        canonical: "https://rodrigobruns.com.br/comunidade",
    },
    icons: { icon: "/favico.ico" },
    openGraph: {
        title: "Comunidade PGAR | Mais critério para o seu trabalho",
        description:
            "Formação, troca e acompanhamento para preparadores de goleiros desenvolverem método e se prepararem para os próximos passos.",
        images: ["/comunidade-banner.png"],
        type: "website",
    },
};

export default function Comunidade() {
    return <ComunidadePage />;
}
