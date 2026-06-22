import { Obrigado } from "../../components/obrigado/Obrigado";

export const metadata = {
    metadataBase: new URL("https://rodrigobruns.com.br"),
    title: "Obrigado pela sua compra | Mentoria Rodrigo Bruns",
    description:
        "Sua vaga na mentoria está garantida. Em breve entraremos em contato com os próximos passos.",
    icons: { icon: "/favico.ico" },
    robots: { index: false, follow: false },
    openGraph: {
        title: "Obrigado pela sua compra | Mentoria Rodrigo Bruns",
        description:
            "Sua vaga na mentoria está garantida. Em breve entraremos em contato com os próximos passos.",
        type: "website",
    },
};

export default function ObrigadoPage() {
    return <Obrigado />;
}
