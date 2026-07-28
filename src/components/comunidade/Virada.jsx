"use client";

import { motion } from "framer-motion";
import { Divisor } from "./Divisor";

const paragrafos = [
    <>
        Você já tem acesso a mais informação do que consegue aplicar. O YouTube
        está cheio. O Instagram está cheio. E mesmo assim a dúvida continua,
        porque informação solta não responde a pergunta que importa: isso serve
        pro meu contexto?
    </>,
    <>
        Quem trabalha em clube não evolui lendo mais. Evolui porque tem alguém do
        lado apontando o que está errado antes que vire hábito. Um coordenador, um
        par mais experiente, alguém que já passou por aquilo.
    </>,
    <>
        <span className="text-ice/95 font-semibold">
            É exatamente isso que você não tem.
        </span>{" "}
        E é exatamente isso que a Comunidade PGAR existe pra te dar.
    </>,
];

export function Virada() {
    return (
        <section className="relative w-full bg-surface-dark py-28 md:py-40 px-6 overflow-hidden">
            <Divisor className="absolute top-0 left-0" />

            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70vw] h-[35vw] max-w-[800px] bg-electric-blue/8 blur-[150px] rounded-full pointer-events-none z-0" />

            <div className="relative z-10 max-w-3xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[11px] font-bold uppercase tracking-[0.3em] text-electric-blue"
                >
                    A virada
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-6 font-display font-bold uppercase tracking-tight text-ice text-4xl md:text-6xl leading-[0.98]"
                >
                    O que te falta não é conteúdo.{" "}
                    <span className="text-electric-blue">É um segundo olhar.</span>
                </motion.h2>

                <div className="mt-10 space-y-6 text-base md:text-lg text-ice/70 leading-relaxed">
                    {paragrafos.map((p, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.9, delay: i * 0.1, ease: "easeOut" }}
                        >
                            {p}
                        </motion.p>
                    ))}
                </div>
            </div>
        </section>
    );
}
