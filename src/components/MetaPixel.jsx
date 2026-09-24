"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { PIXEL_ID } from "../utils/tracking";

/**
 * Meta Pixel base. Injeta o fbq e dispara o PageView inicial.
 * O evento de conversão "Lead" é disparado depois, no submit do
 * formulário (ver utils/tracking.js -> trackLead).
 *
 * Não renderiza nada se NEXT_PUBLIC_FB_PIXEL_ID não estiver definido,
 * então é seguro em dev/preview sem o ID configurado.
 */
export function MetaPixel() {
    const pathname = usePathname();

    // O funil da masterclass usa um pixel próprio (ver MasterclassPixel).
    // Não carregamos o pixel global nessas rotas para não misturar tráfego.
    if (
        pathname?.startsWith("/masterclass") ||
        pathname?.startsWith("/obrigado-masterclass")
    ) {
        return null;
    }

    if (!PIXEL_ID) return null;

    return (
        <>
            <Script id="meta-pixel" strategy="afterInteractive">
                {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '${PIXEL_ID}');
                    fbq('track', 'PageView');
                `}
            </Script>
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: "none" }}
                    alt=""
                    src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
                />
            </noscript>
        </>
    );
}
