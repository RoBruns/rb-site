import { ObrigadoComunidade } from "../../components/comunidade/ObrigadoComunidade";

/*  Página de destino do checkout da Comunidade. Fora do índice do
    Google: é conteúdo de pós-compra, não de captação.                 */
export const metadata = {
    metadataBase: new URL("https://rodrigobruns.com.br"),
    title: "Compra realizada | Comunidade PGAR",
    description:
        "Sua entrada na Comunidade PGAR está confirmada. Acesse a área de membros e entre no grupo de WhatsApp.",
    icons: { icon: "/favico.ico" },
    robots: { index: false, follow: false },
    openGraph: {
        title: "Compra realizada | Comunidade PGAR",
        description:
            "Sua entrada na Comunidade PGAR está confirmada. Acesse a área de membros e entre no grupo de WhatsApp.",
        type: "website",
    },
};

export default function ObrigadoComunidadePage() {
    return <ObrigadoComunidade />;
}
