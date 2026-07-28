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
        <section className="relative w-full bg-surface-dark py-28 md:py-40 px-6">
            <div className="max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display font-bold uppercase tracking-tight text-ice text-4xl md:text-5xl leading-[0.98]"
                >
                    Antes que você{" "}
                    <span className="text-electric-blue">pergunte.</span>
                </motion.h2>

                <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
                    {perguntas.map((item, i) => (
                        <motion.details
                            key={item.q}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.8, delay: i * 0.06, ease: "easeOut" }}
                            className="group py-6"
                        >
                            <summary className="flex items-start justify-between gap-5 cursor-pointer list-none min-h-[44px]">
                                <span className="font-display font-bold uppercase tracking-tight text-ice text-lg md:text-xl leading-tight">
                                    {item.q}
                                </span>
                                <Plus
                                    className="h-5 w-5 shrink-0 text-electric-blue transition-transform duration-300 group-open:rotate-45 mt-0.5"
                                    strokeWidth={2.5}
                                />
                            </summary>
                            <p className="mt-4 text-[15px] md:text-base text-ice/65 leading-relaxed pr-10">
                                {item.a}
                            </p>
                        </motion.details>
                    ))}
                </div>
            </div>
        </section>
    );
}
