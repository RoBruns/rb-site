"use client";

import Script from "next/script";
import { MASTERCLASS_PIXEL_ID } from "./pixel";

/**
 * Base do Pixel da Masterclass. Carrega o fbq (se ainda não houver),
 * inicializa o pixel da masterclass e dispara o PageView SÓ nele
 * (trackSingle).
 *
 * Os eventos de conversão (ViewContent, InitiateCheckout, Purchase) são
 * enviados pela própria Hubla (Pixel + CAPI) com este mesmo ID, então
 * não os disparamos aqui para evitar contagem dobrada.
 *
 * Renderizado apenas nas páginas do funil da masterclass. O pixel
 * global da mentoria é desativado nessas rotas (ver MetaPixel.jsx).
 */
export function MasterclassPixel() {
    return (
        <>
            <Script id="masterclass-pixel" strategy="afterInteractive">
                {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '${MASTERCLASS_PIXEL_ID}');
                    fbq('trackSingle', '${MASTERCLASS_PIXEL_ID}', 'PageView');
                `}
            </Script>
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: "none" }}
                    alt=""
                    src={`https://www.facebook.com/tr?id=${MASTERCLASS_PIXEL_ID}&ev=PageView&noscript=1`}
                />
            </noscript>
        </>
    );
}
