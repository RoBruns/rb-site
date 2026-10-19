"use client";

import { motion } from "framer-motion";

/* As quatro dores que mais aparecem nas respostas dos membros e na call
   de vendas, nas palavras deles. O fechamento reconhece o esforço: quem
   compra estuda há anos, e "te falta método" soava como acusação. */
const dores = [
    "Ninguém te dá retorno sobre o que você faz ou deixa de fazer.",
    "Troca o treinador, troca a diretoria, e você volta à estaca zero.",
    "A vaga boa aparece por indicação, e você não gosta de ligar pedindo emprego.",
    "Seu método está na sua cabeça. Mas como ele se compara ao de quem está no alto rendimento?",
];

export function Virada() {
    return (
        <section className="relative w-full py-12 sm:py-20 md:py-28">

            <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-6">
                <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="cmn-pill inline-block px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-electric-blue sm:px-5 sm:text-[11px] sm:tracking-[0.28em]"
                >
                    A realidade
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-6 font-display text-[clamp(1.95rem,8.6vw,2.75rem)] font-bold uppercase leading-[1] tracking-tight text-ice sm:mt-8 md:text-6xl md:leading-[0.98]"
                >
                    Você decide sozinho.
                    <br />
                    <span className="text-electric-blue">E não sabe se acertou.</span>
                </motion.h2>

                <motion.ul
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto mt-8 grid max-w-3xl gap-3 text-left sm:mt-12 sm:grid-cols-2 sm:gap-4"
                >
                    {dores.map((d) => (
                        <li
                            key={d}
                            className="cmn-glass flex items-start gap-3 px-5 py-4 text-[14px] leading-relaxed text-ice/75 sm:px-6 sm:py-5 sm:text-[15px]"
                            style={{ borderRadius: "var(--cmn-r-md)" }}
                        >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-blue" />
                            {d}
                        </li>
                    ))}
                </motion.ul>

                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="cmn-glass-glow mx-auto mt-8 max-w-2xl px-6 py-7 sm:mt-12 sm:px-8 sm:py-8"
                >
                    <p className="font-display text-lg font-bold uppercase leading-tight tracking-tight text-ice sm:text-xl md:text-2xl">
                        Não te falta estudo. Você já fez curso, licença e leu livro.{" "}
                        <span className="text-electric-blue">
                            Falta com quem conversar e um plano para o próximo passo.
                        </span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
