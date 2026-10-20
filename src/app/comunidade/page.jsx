import { ComunidadePage } from "../../components/comunidade/ComunidadePage";
import { perguntas } from "../../components/comunidade/faq-data";
import { PRICE_CASH } from "../../components/comunidade/constants";

const SITE = "https://rodrigobruns.com.br";
const URL_PAGINA = SITE + "/comunidade";

/*  Sem "mentoria" no título: na escada de produtos, mentoria é o nível 2.
    Sem preço na description: preço muda, e o snippet fica desatualizado. */
export const metadata = {
    metadataBase: new URL(SITE),
    title: "Ecossistema PGAR para Preparadores de Goleiros | Rodrigo Bruns",
    description:
        "Ecossistema para preparadores de goleiros com Rodrigo Bruns, do Red Bull Bragantino. Encontro individual, rede de preparadores e plano de carreira.",
    alternates: {
        canonical: URL_PAGINA,
    },
    icons: { icon: "/favico.ico" },
    openGraph: {
        title: "Pare de construir sua carreira de preparador sozinho",
        description:
            "Seis meses perto de Rodrigo Bruns e de uma rede de preparadores de goleiros do profissional, da base, do feminino e do exterior.",
        images: ["/comunidade-banner.png"],
        type: "website",
        url: URL_PAGINA,
        locale: "pt_BR",
    },
};

/*  Dados estruturados: sinal semântico para buscadores e IAs. O rich
    result de FAQ não aparece mais no Google, mas a marcação não atrapalha
    e ajuda a página a ser citada em respostas de IA.                    */
const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": SITE + "/#rodrigo",
            name: "Rodrigo Bruns",
            jobTitle: "Preparador de goleiros",
            url: SITE,
            sameAs: ["https://www.instagram.com/rodrigo.bruns/"],
        },
        {
            "@type": "Product",
            name: "Ecossistema PGAR",
            description:
                "Assinatura de seis meses para preparadores de goleiros: encontro individual com Rodrigo Bruns, encontros mensais ao vivo, grupo de preparadores, Diagnóstico Profissional e metodologia CIMO.",
            brand: { "@type": "Brand", name: "PGAR" },
            url: URL_PAGINA,
            offers: {
                "@type": "Offer",
                price: PRICE_CASH.replace(/\D/g, ""),
                priceCurrency: "BRL",
                availability: "https://schema.org/InStock",
                url: URL_PAGINA,
            },
        },
        {
            "@type": "FAQPage",
            mainEntity: perguntas.map((p) => ({
                "@type": "Question",
                name: p.q,
                acceptedAnswer: { "@type": "Answer", text: p.a },
            })),
        },
    ],
};

export default function Comunidade() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ComunidadePage />
        </>
    );
}
