import { MentoriaPage } from "../../components/mentoria/MentoriaPage";

export const metadata = {
    metadataBase: new URL("https://rodrigobruns.com.br"),
    title: "Mentoria de Preparação de Goleiros | Rodrigo Bruns — Red Bull Bragantino",
    description:
        "Aprenda a treinar goleiros de alto rendimento com Rodrigo Bruns, preparador de goleiros do Red Bull Bragantino há mais de 10 anos. 8 encontros online e ao vivo. Vagas limitadas — candidate-se.",
    icons: { icon: "/favico.ico" },
    openGraph: {
        title: "Mentoria de Preparação de Goleiros | Rodrigo Bruns",
        description:
            "A metodologia que prepara goleiros da Série A, aberta para PREPARADORES que miram o alto rendimento. 8 encontros ao vivo com Rodrigo Bruns.",
        images: ["/mentoria-hero.jpeg"],
        type: "website",
    },
};

export default function MentoriaAltoRendimento() {
    return <MentoriaPage />;
}
