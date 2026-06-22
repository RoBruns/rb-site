import { MentoriaPage } from "../../components/mentoria/MentoriaPage";

export const metadata = {
    metadataBase: new URL("https://rodrigobruns.com.br"),
    title: "Mentoria: Preparação de Goleiros de Alto Rendimento | Rodrigo Bruns",
    description: null,
    icons: { icon: "/favico.ico" },
    openGraph: {
        title: "Mentoria: Preparação de Goleiros de Alto Rendimento | Rodrigo Bruns",
        description: null,
        images: ["/mentoria-hero.jpeg"],
        type: "website",
    },
};

export default function MentoriaAltoRendimento() {
    return <MentoriaPage />;
}
