import { PreCadastroForm } from "../../components/precadastro/PreCadastroForm";

export const metadata = {
    metadataBase: new URL("https://rodrigobruns.com.br"),
    title: "Formulário de Pré-cadastro | Mentoria Rodrigo Bruns",
    description:
        "Faça seu pré-cadastro e seja o primeiro a saber quando as vagas da mentoria de preparação de goleiros de alto rendimento forem abertas.",
    icons: { icon: "/favico.ico" },
    robots: { index: false, follow: false },
    openGraph: {
        title: "Formulário de Pré-cadastro | Mentoria Rodrigo Bruns",
        description:
            "Seja o primeiro a saber quando as vagas da mentoria de goleiros de alto rendimento forem abertas.",
        type: "website",
    },
};

export default function PreCadastroPage() {
    return <PreCadastroForm />;
}
