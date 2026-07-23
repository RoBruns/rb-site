import { Masterclass } from "../../components/masterclass/Masterclass";

export const metadata = {
    metadataBase: new URL("https://rodrigobruns.com.br"),
    title: "Masterclass CIMO: Preparação de Goleiros de Alto Rendimento | Rodrigo Bruns",
    description:
        "Aula ao vivo com Rodrigo Bruns, preparador de goleiros do Red Bull Bragantino. Aprenda o CIMO — Contexto, Intensidade, Mentalidade e Organização — a metodologia por trás dos goleiros de alto rendimento. 07 de julho, 19h. Com acesso à gravação.",
    icons: { icon: "/favico.ico" },
    openGraph: {
        title: "Masterclass CIMO: a metodologia por trás dos goleiros de alto rendimento",
        description:
            "Aula ao vivo com Rodrigo Bruns (Red Bull Bragantino). Os 4 vetores do alto rendimento: Contexto, Intensidade, Mentalidade e Organização. 07/07, 19h.",
        images: ["/mentoria-hero.jpeg"],
        type: "website",
    },
};

export default function MasterclassPage() {
    return <Masterclass />;
}
