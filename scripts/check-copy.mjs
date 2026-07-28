/* Copy-lint: garante que nenhum travessão entre na copy do site. */

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOTS = ["src/components/comunidade", "src/app/comunidade"];
const FORBIDDEN = [
    { char: "—", name: "travessao (em dash)" },
    { char: "–", name: "meia-risca (en dash)" },
];

function walk(dir) {
    let files = [];
    for (const entry of readdirSync(dir)) {
        const full = join(dir, entry);
        if (statSync(full).isDirectory()) files = files.concat(walk(full));
        else if (/\.(jsx?|mjs)$/.test(entry)) files.push(full);
    }
    return files;
}

let failures = 0;

for (const root of ROOTS) {
    if (!existsSync(root)) continue;
    for (const file of walk(root)) {
        const lines = readFileSync(file, "utf8").split("\n");
        lines.forEach((line, i) => {
            for (const { char, name } of FORBIDDEN) {
                if (line.includes(char)) {
                    console.error(`${file}:${i + 1}  contem ${name}`);
                    failures++;
                }
            }
        });
    }
}

if (failures > 0) {
    console.error(
        `\n${failures} ocorrencia(s). Use virgula, ponto ou parenteses.`
    );
    process.exit(1);
}

console.log("Copy-lint OK: nenhum travessao encontrado.");
