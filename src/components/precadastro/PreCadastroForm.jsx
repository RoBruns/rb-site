"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { cn } from "../../utils/cn";
import {
    getFbCookies,
    getFbcFromUrl,
    getUrlParams,
    newEventId,
    trackLead,
} from "../../utils/tracking";
import { EASE, container, item, stepVariants } from "../form/motion";
import { Field, inputBase } from "../form/Field";
import { COUNTRIES, PhoneInput } from "../form/PhoneInput";
import { BackLink, PrimaryButton } from "../form/Buttons";
import { ProgressBar } from "../form/ProgressBar";
import { SuccessScreen } from "../form/SuccessScreen";

// n8n webhook — override in production via NEXT_PUBLIC_PRECADASTRO_WEBHOOK
const WEBHOOK_URL =
    process.env.NEXT_PUBLIC_PRECADASTRO_WEBHOOK ||
    "https://primary-production-5215.up.railway.app/webhook/pre-cadastro";

/* ------------------------------------------------------------------ */
/*  Main                                                                */
/* ------------------------------------------------------------------ */

const TOTAL_STEPS = 4; // welcome, dados, objetivo, sucesso

export function PreCadastroForm() {
    const [[step, dir], setStep] = useState([0, 0]);
    const [data, setData] = useState({
        nome: "",
        email: "",
        objetivo: "",
    });
    const [country, setCountry] = useState(COUNTRIES[0]); // Brasil default
    const [phoneDigits, setPhoneDigits] = useState("");

    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const go = (next) => setStep([next, next > step ? 1 : -1]);

    const set = (key) => (e) =>
        setData((d) => ({ ...d, [key]: e.target.value }));

    // E.164: +<dial><digits>, e.g. +5511942861882
    const whatsappE164 = `+${country.dial}${phoneDigits}`;

    // Dados de contato compartilhados pelos dois disparos (etapa 1 e final),
    // pra que o n8n case o mesmo lead no CRM nas duas pontas.
    const contato = () => ({
        nome: data.nome.trim(),
        whatsapp: whatsappE164,
        email: data.email.trim(),
        origem: "pre-cadastro",
    });

    // Etapa 1 — assim que o lead preenche os dados pessoais, já registramos
    // no CRM (status "dados_pessoais"). Fire-and-forget: não bloqueia a UX
    // nem mostra erro; se falhar, o disparo final ainda cria/atualiza o lead.
    const registrarDadosPessoais = () => {
        try {
            fetch(WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                keepalive: true,
                body: JSON.stringify({
                    ...contato(),
                    etapa: "dados_pessoais",
                    enviado_em: new Date().toISOString(),
                }),
            }).catch(() => {});
        } catch {
            /* silencioso por design */
        }
    };

    const submit = async () => {
        if (submitting) return;
        setSubmitting(true);
        setSubmitError(false);

        // Identidade única do evento, compartilhada entre Pixel e CAPI
        // para que a Meta deduplique os dois disparos do "Lead".
        const eventId = newEventId();
        const { fbp, fbc } = getFbCookies();
        const fbcResolved = fbc || getFbcFromUrl();
        const urlParams = getUrlParams();

        try {
            const res = await fetch(WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...contato(),
                    etapa: "completo",
                    objetivo: data.objetivo.trim(),
                    enviado_em: new Date().toISOString(),
                    // --- Dados de tracking p/ o CAPI (server-side no n8n) ---
                    event_name: "Lead",
                    event_id: eventId,
                    event_source_url:
                        typeof window !== "undefined" ? window.location.href : "",
                    fbp,
                    fbc: fbcResolved,
                    ...urlParams,
                }),
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);

            // Pixel client-side com o MESMO event_id (dedup com o CAPI).
            trackLead({ eventId });

            go(3);
        } catch (err) {
            console.error("Falha ao enviar pré-cadastro:", err);
            setSubmitError(true);
        } finally {
            setSubmitting(false);
        }
    };

    const dadosValid = useMemo(
        () =>
            data.nome.trim() &&
            phoneDigits.length >= 8 &&
            /\S+@\S+\.\S+/.test(data.email),
        [data, phoneDigits]
    );

    return (
        <main className="relative min-h-[100svh] w-full overflow-hidden bg-obsidian text-ice">
            {/* Ambient background — soft drifting blue glows */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    aria-hidden
                    className="absolute -top-[20%] left-1/2 h-[60vw] w-[60vw] max-w-[800px] -translate-x-1/2 rounded-full bg-electric-blue/10 blur-[160px]"
                    animate={{ y: [0, 30, 0], opacity: [0.6, 0.85, 0.6] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    aria-hidden
                    className="absolute bottom-[-15%] right-[-10%] h-[45vw] w-[45vw] max-w-[600px] rounded-full bg-electric-blue/[0.06] blur-[150px]"
                    animate={{ y: [0, -24, 0], opacity: [0.4, 0.65, 0.4] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                {/* Subtle grid for texture */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
            </div>

            <ProgressBar step={step} total={TOTAL_STEPS - 1} />

            <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-2xl flex-col justify-center px-6 py-24 sm:px-10">
                <AnimatePresence mode="wait" custom={dir}>
                    {/* ----------------------------- STEP 0 — WELCOME */}
                    {step === 0 && (
                        <motion.div
                            key="welcome"
                            custom={dir}
                            variants={stepVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                        >
                            <motion.div variants={container} animate="center">
                                <motion.p
                                    variants={item}
                                    className="mb-6 text-[11px] font-semibold uppercase tracking-[0.35em] text-electric-blue"
                                >
                                    Pré-cadastro · Mentoria
                                </motion.p>
                                <motion.h1
                                    variants={item}
                                    className="font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight text-ice sm:text-5xl"
                                >
                                    Seja bem vindo{" "}
                                    <span className="text-electric-blue">
                                        Preparador de Goleiros
                                    </span>{" "}
                                    de Alto Rendimento
                                </motion.h1>

                                <div className="mt-8 space-y-5 text-base leading-relaxed text-ice/70 sm:text-lg">
                                    <motion.p variants={item}>
                                        Você, preparador de goleiros, pode estar se sentindo
                                        perdido. A cada dia surge uma nova metodologia, uma nova
                                        tendência, uma nova forma de treinar. E, no meio de tanta
                                        informação, surgem a insegurança e a dúvida sobre qual
                                        caminho seguir.
                                    </motion.p>
                                    <motion.p variants={item}>
                                        Eu já passei por isso. Ao longo de mais de 20 anos de
                                        carreira, cometi erros, acumulei experiências e aprendi que
                                        os melhores resultados normalmente vêm quando focamos no que
                                        realmente importa.
                                    </motion.p>
                                    <motion.p variants={item}>
                                        Em breve lançarei minha mentoria, onde vou compartilhar esse
                                        caminho com você.
                                    </motion.p>
                                    <motion.p variants={item} className="text-ice/85">
                                        Preencha o formulário e seja o primeiro a saber quando as
                                        vagas forem abertas.
                                    </motion.p>
                                </div>

                                <motion.div variants={item} className="mt-10">
                                    <PrimaryButton onClick={() => go(1)}>Começar</PrimaryButton>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}

                    {/* ----------------------------- STEP 1 — DADOS */}
                    {step === 1 && (
                        <motion.div
                            key="dados"
                            custom={dir}
                            variants={stepVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                        >
                            <BackLink onClick={() => go(0)} />
                            <motion.div variants={container} animate="center">
                                <motion.h2
                                    variants={item}
                                    className="font-display text-3xl font-bold uppercase tracking-tight text-ice sm:text-4xl"
                                >
                                    Faça seu pré-cadastro
                                </motion.h2>

                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        if (dadosValid) {
                                            registrarDadosPessoais();
                                            go(2);
                                        }
                                    }}
                                    className="mt-10 space-y-8"
                                >
                                    <Field label="Nome completo" required>
                                        <input
                                            autoFocus
                                            value={data.nome}
                                            onChange={set("nome")}
                                            placeholder="Seu nome"
                                            className={inputBase}
                                        />
                                    </Field>

                                    <Field label="WhatsApp" required>
                                        <PhoneInput
                                            country={country}
                                            onCountry={setCountry}
                                            digits={phoneDigits}
                                            onDigits={setPhoneDigits}
                                        />
                                    </Field>

                                    <Field label="E-mail" required>
                                        <input
                                            type="email"
                                            inputMode="email"
                                            value={data.email}
                                            onChange={set("email")}
                                            placeholder="voce@email.com"
                                            className={inputBase}
                                        />
                                    </Field>

                                    <motion.div variants={item}>
                                        <PrimaryButton type="submit" disabled={!dadosValid}>
                                            Avançar
                                        </PrimaryButton>
                                    </motion.div>
                                </form>
                            </motion.div>
                        </motion.div>
                    )}

                    {/* ----------------------------- STEP 2 — OBJETIVO */}
                    {step === 2 && (
                        <motion.div
                            key="objetivo"
                            custom={dir}
                            variants={stepVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                        >
                            <BackLink onClick={() => go(1)} />
                            <motion.div variants={container} animate="center">
                                <motion.h2
                                    variants={item}
                                    className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-ice sm:text-3xl"
                                >
                                    Hoje, qual é o objetivo que busca alcançar com a minha mentoria?{" "}
                                    <span className="text-electric-blue">*</span>
                                </motion.h2>

                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        if (data.objetivo.trim()) submit();
                                    }}
                                    className="mt-9 space-y-8"
                                >
                                    <motion.div variants={item}>
                                        <textarea
                                            autoFocus
                                            value={data.objetivo}
                                            onChange={set("objetivo")}
                                            rows={5}
                                            placeholder="Escreva aqui o que você quer conquistar…"
                                            className={cn(inputBase, "resize-none leading-relaxed")}
                                        />
                                    </motion.div>

                                    <motion.div variants={item} className="space-y-4">
                                        <PrimaryButton
                                            type="submit"
                                            disabled={!data.objetivo.trim() || submitting}
                                            loading={submitting}
                                        >
                                            {submitting ? "Enviando" : "Enviar"}
                                        </PrimaryButton>

                                        {submitError && (
                                            <p className="text-sm text-red-400/90">
                                                Não conseguimos enviar agora. Verifique sua conexão
                                                e tente novamente.
                                            </p>
                                        )}
                                    </motion.div>
                                </form>
                            </motion.div>
                        </motion.div>
                    )}

                    {/* ----------------------------- STEP 3 — SUCESSO */}
                    {step === 3 && (
                        <motion.div
                            key="sucesso"
                            custom={dir}
                            variants={stepVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="text-center"
                        >
                            <SuccessScreen
                                nome={data.nome}
                                title="Pré-cadastro"
                                titleAccent="concluído."
                                body="Parabéns! Isso já te coloca à frente da maioria. Assim que as inscrições forem abertas entraremos em contato."
                                closer="Até mais!"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}
