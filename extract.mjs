import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3002/comunidade", { waitUntil: "networkidle" });
await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 400) {
        window.scrollTo(0, y); await new Promise(r => setTimeout(r, 90));
    }
    window.scrollTo(0, 0);
});
await page.waitForTimeout(800);

const r = await page.evaluate(() => {
    const out = { secoes: [] };
    document.querySelectorAll("section").forEach((s) => {
        const rect = s.getBoundingClientRect();
        const h2 = s.querySelector("h1,h2");
        out.secoes.push({
            titulo: h2 ? h2.innerText.replace(/\n/g, " | ") : "(sem titulo)",
            alturaPx: Math.round(rect.height),
            id: s.id || null,
        });
    });
    // amostra de tipografia
    const amostra = (sel) => {
        const el = document.querySelector(sel);
        if (!el) return null;
        const c = getComputedStyle(el);
        return { fontSize: c.fontSize, fontWeight: c.fontWeight, lineHeight: c.lineHeight,
                 letterSpacing: c.letterSpacing, color: c.color, fontFamily: c.fontFamily.split(",")[0] };
    };
    out.tipografia = {
        h1: amostra("h1"),
        h2: amostra("h2"),
        corpo: amostra("section p"),
    };
    out.alturaTotal = document.body.scrollHeight;
    return out;
});
console.log(JSON.stringify(r, null, 2));
await browser.close();
