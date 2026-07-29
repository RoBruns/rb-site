/* Gera um PDF da landing page para enviar em aprovação.
 *
 * Uso:
 *   1. npm run dev            (deixa rodando em outro terminal)
 *   2. npm run pdf            (gera comunidade-pgar.pdf)
 *      npm run pdf -- caminho/nome.pdf
 *
 * Requer o Playwright, que NÃO está no package.json:
 *   npm i -D playwright --no-save && npx playwright install chromium
 */

import { chromium } from "playwright";

const URL = "http://localhost:3000/comunidade";
const SAIDA = process.argv[2] || "comunidade-pgar.pdf";

const browser = await chromium.launch();
const page = await browser.newPage({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1,
});

await page.goto(URL, { waitUntil: "networkidle" });

/* As seções aparecem com whileInView do framer-motion. Sem rolar a
   página inteira antes, tudo abaixo da dobra sai invisível no PDF. */
await page.evaluate(async () => {
    const passo = 400;
    for (let y = 0; y < document.body.scrollHeight; y += passo) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 110));
    }
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise((r) => setTimeout(r, 700));
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 500));
});

/* Congela animações e esconde a nav fixa, que senão se repete em
   cima de cada página do PDF. */
await page.addStyleTag({
    content: `
        *, *::before, *::after {
            animation-play-state: paused !important;
            transition: none !important;
        }
        header { display: none !important; }
        section { break-inside: avoid; page-break-inside: avoid; }
        /* O grão é ruído pixel a pixel: impede a compressão do PDF e
           não agrega nada num documento de aprovação. */
        .cmn-grain::after { display: none !important; }
    `,
});

await page.evaluate(() => {
    document.querySelectorAll("*").forEach((el) => {
        const s = getComputedStyle(el);
        if (s.opacity === "0") el.style.setProperty("opacity", "1", "important");
        if (s.transform && s.transform !== "none") {
            el.style.setProperty("transform", "none", "important");
        }
    });
});

await page.waitForTimeout(900);

await page.pdf({
    path: SAIDA,
    width: "1280px",
    height: "1810px", // proporção A4 na largura de 1280px
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
});

console.log(`PDF gerado: ${SAIDA}`);
await browser.close();
