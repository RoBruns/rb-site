"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const perguntas = [
    {
        q: "Sou iniciante. Vou conseguir acompanhar?",
        a: "Sim. A Comunidade foi feita para quem está começando ou está no meio do caminho. O curso parte da estrutura do treino, não de conceito avançado, e no grupo não existe pergunta boba. A maior parte das dúvidas que aparecem lá são de quem está no seu momento.",
    },
    {
        q: "Não trabalho em clube, treino goleiro em escolinha. Serve?",
        a: "Serve. O que muda de um contexto para o outro é o recurso disponível, não o princípio do treino. No encontro mensal aparece caso de escolinha, de base e de profissional, e boa parte da conversa é justamente sobre adaptar o método ao que você tem em mãos.",
    },
    {
        q: "Quando começa?",
        a: "Quando você comprar. Não existe turma nem data de início: o acesso ao grupo e aos cursos é liberado logo após o pagamento, e você participa do próximo encontro mensal que acontecer.",
    },
    {
        q: "Se eu não puder assistir ao encontro ao vivo?",
        a: "Os encontros ficam gravados e disponíveis para você assistir depois. E se a sua dúvida era o motivo de participar, pode mandar no grupo antes que ela entra na pauta.",
    },
    {
        q: "O que acontece depois dos 6 meses?",
        a: "A assinatura renova automaticamente pelo mesmo valor e você continua com tudo. Se não quiser continuar, cancela pela Hubla e não é cobrado de novo.",
    },
    {
        q: "Isso me dá acesso à mentoria?",
        a: "Não. A Comunidade e as mentorias são produtos diferentes. Quem entra na mentoria ganha um ano de Comunidade junto, mas o contrário não vale. Se depois de entrar você quiser um acompanhamento mais próximo, é só falar com a gente lá dentro.",
    },
];

export function FAQ() {
    return (
        <section className="relative w-full py-24 md:py-36">
            <div className="relative z-10 mx-auto max-w-3xl px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight text-ice md:text-5xl"
                >
                    Antes que você{" "}
                    <span className="text-electric-blue">pergunte.</span>
                </motion.h2>

                <div className="mt-12 space-y-3">
                    {perguntas.map((item, i) => (
                        <motion.details
                            key={item.q}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                            className="cmn-glass group px-6 py-5 md:px-7"
                        >
                            <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-5">
                                <span className="font-display text-base font-bold uppercase leading-tight tracking-tight text-ice md:text-lg">
                                    {item.q}
                                </span>
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors duration-300 group-open:border-electric-blue/40 group-open:bg-electric-blue/15">
                                    <Plus
                                        className="h-4 w-4 text-electric-blue transition-transform duration-300 group-open:rotate-45"
                                        strokeWidth={2.5}
                                    />
                                </span>
                            </summary>
                            <p className="mt-4 pr-10 text-[15px] leading-relaxed text-ice/60">
                                {item.a}
                            </p>
                        </motion.details>
                    ))}
                </div>
            </div>
        </section>
    );
}
