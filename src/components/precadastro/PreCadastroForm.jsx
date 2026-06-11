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

/* ------------------------------------------------------------------ */
/*  Animation primitives                                               */
/* ------------------------------------------------------------------ */

const EASE = [0.16, 1, 0.3, 1];

// n8n webhook — override in production via NEXT_PUBLIC_PRECADASTRO_WEBHOOK
const WEBHOOK_URL =
    process.env.NEXT_PUBLIC_PRECADASTRO_WEBHOOK ||
    "https://primary-production-5215.up.railway.app/webhook/pre-cadastro";

/* ------------------------------------------------------------------ */
/*  Phone — country codes + formatting                                 */
/* ------------------------------------------------------------------ */

const COUNTRIES = [
    { code: "BR", dial: "55", flag: "🇧🇷", name: "Brasil", max: 11 },
    { code: "PT", dial: "351", flag: "🇵🇹", name: "Portugal", max: 9 },
    { code: "US", dial: "1", flag: "🇺🇸", name: "Estados Unidos", max: 10 },
    { code: "AR", dial: "54", flag: "🇦🇷", name: "Argentina", max: 10 },
    { code: "ES", dial: "34", flag: "🇪🇸", name: "Espanha", max: 9 },
    { code: "GB", dial: "44", flag: "🇬🇧", name: "Reino Unido", max: 10 },
    { code: "IT", dial: "39", flag: "🇮🇹", name: "Itália", max: 10 },
    { code: "FR", dial: "33", flag: "🇫🇷", name: "França", max: 9 },
    { code: "DE", dial: "49", flag: "🇩🇪", name: "Alemanha", max: 11 },
    { code: "MX", dial: "52", flag: "🇲🇽", name: "México", max: 10 },
];

const onlyDigits = (s) => s.replace(/\D/g, "");

// Format digits for on-screen display, per country.
function formatPhone(digits, country) {
    const d = digits.slice(0, country.max);
    if (country.dial === "55") {
        // (11) 94286-1882  /  (11) 4286-1882
        if (d.length <= 2) return d.length ? `(${d}` : "";
        const ddd = d.slice(0, 2);
        const rest = d.slice(2);
        if (rest.length <= 4) return `(${ddd}) ${rest}`;
        const splitAt = rest.length > 8 ? 5 : 4; // 9-digit vs 8-digit
        return `(${ddd}) ${rest.slice(0, splitAt)}-${rest.slice(splitAt)}`;
    }
    // Generic: group in 3s for readability
    return d.replace(/(\d{3})(?=\d)/g, "$1 ").trim();
}

// Each step slides in from the direction of travel and out the other side.
const stepVariants = {
    enter: (dir) => ({
        opacity: 0,
        x: dir > 0 ? 48 : -48,
        filter: "blur(6px)",
    }),
    center: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: EASE },
    },
    exit: (dir) => ({
        opacity: 0,
        x: dir > 0 ? -48 : 48,
        filter: "blur(6px)",
        transition: { duration: 0.4, ease: EASE },
    }),
};

// Stagger children inside a step for a refined cascade.
const container = {
    center: {
        transition: { staggerChildren: 0.08, delayChildren: 0.12 },
    },
};

const item = {
    enter: { opacity: 0, y: 18 },
    center: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: EASE },
    },
};

/* ------------------------------------------------------------------ */
/*  Sub-components                                                      */
/* ------------------------------------------------------------------ */

function ProgressBar({ step, total }) {
    return (
        <div className="fixed top-0 left-0 z-50 flex w-full gap-2 px-1 pt-1">
            {Array.from({ length: total }).map((_, i) => (
                <div
                    key={i}
                    className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/8"
                >
                    <motion.div
                        className="absolute inset-0 origin-left bg-electric-blue"
                        initial={false}
                        animate={{ scaleX: i < step ? 1 : 0 }}
                        transition={{ duration: 0.6, ease: EASE }}
                    />
                </div>
            ))}
        </div>
    );
}

function Field({ label, required, children }) {
    return (
        <motion.div variants={item} className="space-y-3">
            <label className="flex items-center gap-1.5 text-lg font-bold tracking-tight text-ice">
                {label}
                {required && <span className="text-electric-blue">*</span>}
            </label>
            {children}
        </motion.div>
    );
}

const inputBase =
    "w-full bg-surface-dark/70 border border-white/10 px-5 py-3.5 text-ice placeholder-ice/25 outline-none transition-all duration-300 micro-bevel focus:border-electric-blue/70 focus:bg-surface-light/60 focus:shadow-[0_0_0_3px_rgba(127,179,255,0.12)]";

function PhoneInput({ country, onCountry, digits, onDigits }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative flex">
            {/* Country selector */}
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="flex shrink-0 items-center gap-2 border border-r-0 border-white/10 bg-surface-light/60 px-4 text-ice transition-colors duration-300 micro-bevel hover:bg-surface-light"
            >
                <span className="text-lg leading-none">{country.flag}</span>
                <span className="text-sm font-semibold tabular-nums">+{country.dial}</span>
                <span
                    className={cn(
                        "text-[10px] text-ice/50 transition-transform duration-300",
                        open && "rotate-180"
                    )}
                >
                    ▼
                </span>
            </button>

            <input
                type="tel"
                inputMode="tel"
                value={formatPhone(digits, country)}
                onChange={(e) => onDigits(onlyDigits(e.target.value).slice(0, country.max))}
                placeholder={country.dial === "55" ? "(11) 94286-1882" : "Número"}
                className={cn(inputBase, "rounded-l-none")}
            />

            <AnimatePresence>
                {open && (
                    <>
                        {/* click-away */}
                        <div
                            className="fixed inset-0 z-30"
                            onClick={() => setOpen(false)}
                        />
                        <motion.ul
                            initial={{ opacity: 0, y: -8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: EASE }}
                            className="absolute top-full left-0 z-40 mt-2 max-h-64 w-64 overflow-auto border border-white/10 bg-surface-dark/95 py-1 shadow-2xl backdrop-blur-md micro-bevel"
                        >
                            {COUNTRIES.map((c) => (
                                <li key={c.code}>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            onCountry(c);
                                            setOpen(false);
                                        }}
                                        className={cn(
                                            "flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors duration-200 hover:bg-electric-blue/10",
                                            c.code === country.code
                                                ? "text-electric-blue"
                                                : "text-ice/80"
                                        )}
                                    >
                                        <span className="text-lg leading-none">{c.flag}</span>
                                        <span className="flex-1">{c.name}</span>
                                        <span className="tabular-nums text-ice/50">+{c.dial}</span>
                                    </button>
                                </li>
                            ))}
                        </motion.ul>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

function PrimaryButton({ children, onClick, type = "button", disabled, loading }) {
    return (
        <motion.button
            type={type}
            onClick={onClick}
            disabled={disabled}
            whileHover={disabled ? undefined : { scale: 1.015 }}
            whileTap={disabled ? undefined : { scale: 0.985 }}
            className={cn(
                "group relative inline-flex items-center gap-2.5 overflow-hidden bg-electric-blue px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-obsidian transition-colors duration-300 micro-bevel",
                disabled
                    ? "cursor-not-allowed opacity-40"
                    : "hover:bg-electric-blue/90"
            )}
        >
            {/* Sheen sweep on hover */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">{children}</span>
            {loading ? (
                <span className="relative h-4 w-4 animate-spin rounded-full border-2 border-obsidian/30 border-t-obsidian" />
            ) : (
                <span className="relative transition-transform duration-300 group-hover:translate-x-1">
                    →
                </span>
            )}
        </motion.button>
    );
}

function BackLink({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="group mb-9 inline-flex items-center gap-2 text-sm font-medium text-ice/45 transition-colors duration-300 hover:text-ice"
        >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
            </span>
            Voltar
        </button>
    );
}

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
                    nome: data.nome.trim(),
                    whatsapp: whatsappE164,
                    email: data.email.trim(),
                    objetivo: data.objetivo.trim(),
                    origem: "pre-cadastro",
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
                                        if (dadosValid) go(2);
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
                            <SuccessScreen nome={data.nome} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}

/* ------------------------------------------------------------------ */
/*  Success screen — the showpiece                                     */
/* ------------------------------------------------------------------ */

function SuccessScreen({ nome }) {
    const firstName = nome?.trim().split(" ")[0] || "";

    return (
        <div className="relative flex flex-col items-center">
            {/* Radiating rings behind the check */}
            <div className="relative mb-10 flex items-center justify-center">
                {[0, 1, 2].map((i) => (
                    <motion.span
                        key={i}
                        className="absolute rounded-full border border-electric-blue/30"
                        initial={{ width: 80, height: 80, opacity: 0 }}
                        animate={{
                            width: [80, 220],
                            height: [80, 220],
                            opacity: [0.5, 0],
                        }}
                        transition={{
                            duration: 2.6,
                            repeat: Infinity,
                            ease: "easeOut",
                            delay: i * 0.7,
                        }}
                    />
                ))}

                {/* Check badge */}
                <motion.div
                    initial={{ scale: 0, rotate: -25 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.15 }}
                    className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-electric-blue shadow-[0_0_50px_rgba(127,179,255,0.5)]"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-10 w-10 text-obsidian"
                    >
                        <motion.path
                            d="M4 12.5l5 5L20 6.5"
                            stroke="currentColor"
                            strokeWidth={2.6}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.55, ease: "easeOut", delay: 0.45 }}
                        />
                    </svg>
                </motion.div>
            </div>

            <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
                className="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-electric-blue"
            >
                {firstName ? `Tudo certo, ${firstName}` : "Tudo certo"}
            </motion.p>

            <motion.h2
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
                className="font-display text-3xl font-bold uppercase tracking-tight text-ice sm:text-5xl"
            >
                Pré-cadastro <span className="text-electric-blue">concluído.</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.72 }}
                className="mt-7 max-w-md text-base leading-relaxed text-ice/70 sm:text-lg"
            >
                Parabéns! Isso já te coloca à frente da maioria. Assim que as inscrições forem
                abertas entraremos em contato.
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
                className="mt-6 font-display text-xl font-bold uppercase tracking-tight text-ice"
            >
                Até mais!
            </motion.p>

            {/* Thin animated underline accent */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.95 }}
                className="mt-12 h-px w-40 origin-center bg-gradient-to-r from-transparent via-electric-blue/60 to-transparent"
            />
        </div>
    );
}
