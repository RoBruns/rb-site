import { ComunidadeFormulario } from "../../components/comunidade/ComunidadeFormulario";

export const metadata = {
    metadataBase: new URL("https://rodrigobruns.com.br"),
    title: "Formulário | Comunidade PGAR",
    description:
        "Compartilhe seus dados para receber mais detalhes sobre o ecossistema da Comunidade PGAR.",
    icons: { icon: "/favico.ico" },
    robots: { index: false, follow: false },
    openGraph: {
        title: "Formulário | Comunidade PGAR",
        description:
            "Compartilhe seus dados para receber mais detalhes sobre o ecossistema da Comunidade PGAR.",
        type: "website",
    },
};

export default function ComunidadeFormularioPage() {
    return <ComunidadeFormulario />;
}
