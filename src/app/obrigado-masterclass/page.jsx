import { ObrigadoMasterclass } from "../../components/masterclass/ObrigadoMasterclass";

export const metadata = {
    metadataBase: new URL("https://rodrigobruns.com.br"),
    title: "Compra confirmada | Masterclass CIMO — Rodrigo Bruns",
    description:
        "Sua vaga na Masterclass CIMO está garantida. Entre no grupo da masterclass para receber o link da aula e os materiais de apoio.",
    icons: { icon: "/favico.ico" },
    robots: { index: false, follow: false },
    openGraph: {
        title: "Compra confirmada | Masterclass CIMO — Rodrigo Bruns",
        description:
            "Sua vaga está garantida. Entre no grupo da masterclass para receber o link da aula e os materiais.",
        type: "website",
    },
};

export default function ObrigadoMasterclassPage() {
    return <ObrigadoMasterclass />;
}
