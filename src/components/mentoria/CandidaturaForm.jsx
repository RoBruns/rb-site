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
    trackSubmitApplication,
} from "../../utils/tracking";
import { container, item, stepVariants } from "../form/motion";
import { Field, inputBase } from "../form/Field";
import { COUNTRIES, PhoneInput } from "../form/PhoneInput";
import { BackLink, PrimaryButton } from "../form/Buttons";
import { ProgressBar } from "../form/ProgressBar";
import { SuccessScreen } from "../form/SuccessScreen";

// n8n webhook — override in production via NEXT_PUBLIC_CANDIDATURA_WEBHOOK
const WEBHOOK_URL =
    process.env.NEXT_PUBLIC_CANDIDATURA_WEBHOOK ||
    "https://primary-production-5215.up.railway.app/webhook/candidatura-mentoria";

// Opções da pergunta de investimento — strings consumidas pelo Switch do n8n.
// NÃO alterar: o nó "Switch" compara com "Não faz sentido pra mim".
const INVESTIMENTO_OPCOES = ["Sim, faz sentido pra mim", "Não faz sentido pra mim"];

const TOTAL_STEPS = 7; // 0 welcome · 1 dados · 2 oportunidade · 3 porqueVoce · 4 investimento · 5 validacao · 6 sucesso

export function CandidaturaForm() {
    const [[step, dir], setStep] = useState([0, 0]);
    const [data, setData] = useState({
        nome: "",
        email: "",
        oportunidade: "",
        porqueVoce: "",
        investimento: "",
        validacao: "",
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

    // Bloco de tracking p/ o CAPI (server-side no n8n): event_id compartilhado
    // com o Pixel para dedup, cookies _fbp/_fbc e UTMs para enriquecer o match.
    const trackingPayload = (eventName, eventId) => {
        const { fbp, fbc } = getFbCookies();
        return {
            event_name: eventName,
            event_id: eventId,
            event_source_url:
                typeof window !== "undefined" ? window.location.href : "",
            fbp,
            fbc: fbc || getFbcFromUrl(),
            ...getUrlParams(),
        };
    };

    // Etapa 1 — assim que o candidato preenche os dados pessoais, já registramos
    // no CRM (etapa 'interesse' do Funil Mentoria, status "começou e não terminou").
    // Dispara também o "Lead" (Pixel + CAPI via n8n) — esse é o sinal de topo que
    // alimenta o público de abandono (quem tem Lead mas não SubmitApplication).
    // Fire-and-forget: não bloqueia a UX nem mostra erro; se falhar, o envio final
    // ainda cria/atualiza o lead. O n8n roteia por `etapa`.
    const registrarDadosPessoais = () => {
        const eventId = newEventId();
        try {
            fetch(WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                keepalive: true,
                body: JSON.stringify({
                    etapa: "dados_pessoais",
                    nome: data.nome.trim(),
                    whatsapp: whatsappE164,
                    email: data.email.trim(),
                    origem: "candidatura-mentoria",
                    enviado_em: new Date().toISOString(),
                    ...trackingPayload("Lead", eventId),
                }),
            }).catch(() => {});
        } catch {
            /* silencioso por design */
        }
        // Pixel client-side com o MESMO event_id (dedup com o CAPI).
        trackLead({ eventId });
    };

    const dadosValid = useMemo(
        () =>
            data.nome.trim() &&
            phoneDigits.length >= 8 &&
            /\S+@\S+\.\S+/.test(data.email),
        [data, phoneDigits]
    );

    const submit = async () => {
        if (submitting) return;
        setSubmitting(true);
        setSubmitError(false);

        // "faz sentido" (sim) vs "não faz sentido" (nao) — distingue a conversão
        // otimizada (fit=sim) do público de retargeting do curso (fit=nao).
        const fit =
            data.investimento === "Não faz sentido pra mim" ? "nao" : "sim";
        const eventId = newEventId();

        try {
            // Chaves espelham o que o workflow n8n mapeia (formato Tally: { value }).
            const res = await fetch(WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    etapa: "completo",
                    question_1EaMR1: { value: data.nome.trim() },
                    question_M5xLVk: { value: whatsappE164 },
                    question_J04LBK: { value: data.email.trim() },
                    question_g4oLOD: { value: data.oportunidade.trim() },
                    question_yDax7X: { value: data.porqueVoce.trim() },
                    question_XqbENL: { value: data.investimento },
                    question_8elGEz: { value: data.validacao.trim() },
                    origem: "candidatura-mentoria",
                    enviado_em: new Date().toISOString(),
                    fit,
                    ...trackingPayload("SubmitApplication", eventId),
                }),
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);

            // Pixel client-side com o MESMO event_id (dedup com o CAPI).
            trackSubmitApplication({ eventId, fit });

            go(6);
        } catch (err) {
            console.error("Falha ao enviar candidatura:", err);
            setSubmitError(true);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="relative w-full text-left">
            <ProgressBar step={step} total={TOTAL_STEPS - 1} fixed={false} />

            <AnimatePresence mode="wait" custom={dir}>
                {/* ----------------------------- STEP 0 — BOAS-VINDAS */}
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
                                Candidatura · Mentoria
                            </motion.p>
                            <motion.h3
                                variants={item}
                                className="font-display text-3xl font-bold uppercase leading-[0.98] tracking-tight text-ice sm:text-4xl"
                            >
                                Seja bem vindo{" "}
                                <span className="text-electric-blue">
                                    Preparador de Goleiros
                                </span>{" "}
                                de Alto Rendimento
                            </motion.h3>

                            <motion.p
                                variants={item}
                                className="mt-7 max-w-xl text-base leading-relaxed text-ice/70 sm:text-lg"
                            >
                                Este programa vai te ajudar a se diferenciar no mercado através do
                                conhecimento de métodos e estratégias modernas da alta performance no
                                Treinamento de Goleiros.
                            </motion.p>

                            <motion.div variants={item} className="mt-9">
                                <PrimaryButton onClick={() => go(1)}>Começar</PrimaryButton>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}

                {/* ----------------------------- STEP 1 — INFORMAÇÕES PESSOAIS */}
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
                            <motion.h3
                                variants={item}
                                className="font-display text-2xl font-bold uppercase tracking-tight text-ice sm:text-3xl"
                            >
                                Informações Pessoais
                            </motion.h3>

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    if (dadosValid) {
                                        registrarDadosPessoais();
                                        go(2);
                                    }
                                }}
                                className="mt-9 space-y-8"
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

                {/* ----------------------------- STEP 2 — OPORTUNIDADE */}
                {step === 2 && (
                    <motion.div
                        key="oportunidade"
                        custom={dir}
                        variants={stepVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                    >
                        <BackLink onClick={() => go(1)} />
                        <motion.div variants={container} animate="center">
                            <motion.h3
                                variants={item}
                                className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-ice sm:text-2xl"
                            >
                                Por que você acredita que participar deste programa é a oportunidade
                                ideal para você e para o sua carreira?{" "}
                                <span className="text-electric-blue">*</span>
                            </motion.h3>

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    if (data.oportunidade.trim()) go(3);
                                }}
                                className="mt-8 space-y-8"
                            >
                                <motion.div variants={item}>
                                    <textarea
                                        autoFocus
                                        value={data.oportunidade}
                                        onChange={set("oportunidade")}
                                        rows={5}
                                        placeholder="Escreva aqui…"
                                        className={cn(inputBase, "resize-none leading-relaxed")}
                                    />
                                </motion.div>

                                <motion.div variants={item}>
                                    <PrimaryButton
                                        type="submit"
                                        disabled={!data.oportunidade.trim()}
                                    >
                                        Avançar
                                    </PrimaryButton>
                                </motion.div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}

                {/* ----------------------------- STEP 3 — POR QUE VOCÊ */}
                {step === 3 && (
                    <motion.div
                        key="porqueVoce"
                        custom={dir}
                        variants={stepVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                    >
                        <BackLink onClick={() => go(2)} />
                        <motion.div variants={container} animate="center">
                            <motion.h3
                                variants={item}
                                className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-ice sm:text-2xl"
                            >
                                Entre todas as pessoas interessadas, por que eu deveria aceitar
                                você? <span className="text-electric-blue">*</span>
                            </motion.h3>

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    if (data.porqueVoce.trim()) go(4);
                                }}
                                className="mt-8 space-y-8"
                            >
                                <motion.div variants={item}>
                                    <textarea
                                        autoFocus
                                        value={data.porqueVoce}
                                        onChange={set("porqueVoce")}
                                        rows={5}
                                        placeholder="Escreva aqui…"
                                        className={cn(inputBase, "resize-none leading-relaxed")}
                                    />
                                </motion.div>

                                <motion.div variants={item}>
                                    <PrimaryButton
                                        type="submit"
                                        disabled={!data.porqueVoce.trim()}
                                    >
                                        Avançar
                                    </PrimaryButton>
                                </motion.div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}

                {/* ----------------------------- STEP 4 — INVESTIMENTO */}
                {step === 4 && (
                    <motion.div
                        key="investimento"
                        custom={dir}
                        variants={stepVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                    >
                        <BackLink onClick={() => go(3)} />
                        <motion.div variants={container} animate="center">
                            <motion.h3
                                variants={item}
                                className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-ice sm:text-2xl"
                            >
                                O investimento para participação do programa é de 12x de R$507,72 ou R$4.997,00 à vista. 
                                Caso seja selecionado, você tem condições de realizar esse investimento?{" "}
                                <span className="text-electric-blue">*</span>
                            </motion.h3>

                            <motion.div variants={item} className="mt-8 space-y-3">
                                {INVESTIMENTO_OPCOES.map((opcao, i) => {
                                    const selected = data.investimento === opcao;
                                    return (
                                        <button
                                            key={opcao}
                                            type="button"
                                            onClick={() => {
                                                setData((d) => ({ ...d, investimento: opcao }));
                                                go(5);
                                            }}
                                            className={cn(
                                                "group flex w-full items-center gap-4 border px-5 py-4 text-left transition-all duration-300 micro-bevel",
                                                selected
                                                    ? "border-electric-blue/70 bg-electric-blue/10 text-ice"
                                                    : "border-white/10 bg-surface-dark/70 text-ice/80 hover:border-electric-blue/40 hover:bg-surface-light/50"
                                            )}
                                        >
                                            <span
                                                className={cn(
                                                    "flex h-7 w-7 shrink-0 items-center justify-center border text-xs font-bold uppercase transition-colors duration-300",
                                                    selected
                                                        ? "border-electric-blue bg-electric-blue text-obsidian"
                                                        : "border-white/20 text-ice/50 group-hover:border-electric-blue/50"
                                                )}
                                            >
                                                {String.fromCharCode(65 + i)}
                                            </span>
                                            <span className="text-base font-medium">{opcao}</span>
                                        </button>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}

                {/* ----------------------------- STEP 5 — VALIDAÇÃO FINAL */}
                {step === 5 && (
                    <motion.div
                        key="validacao"
                        custom={dir}
                        variants={stepVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                    >
                        <BackLink onClick={() => go(4)} />
                        <motion.div variants={container} animate="center">
                            <motion.h3
                                variants={item}
                                className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-ice sm:text-2xl"
                            >
                                O que precisa acontecer com você ao final do programa para que tenha
                                valido a pena trabalhar comigo nesse programa?{" "}
                                <span className="text-electric-blue">*</span>
                            </motion.h3>

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    if (data.validacao.trim()) submit();
                                }}
                                className="mt-8 space-y-8"
                            >
                                <motion.div variants={item}>
                                    <textarea
                                        autoFocus
                                        value={data.validacao}
                                        onChange={set("validacao")}
                                        rows={5}
                                        placeholder="Escreva aqui…"
                                        className={cn(inputBase, "resize-none leading-relaxed")}
                                    />
                                </motion.div>

                                <motion.div variants={item} className="space-y-4">
                                    <PrimaryButton
                                        type="submit"
                                        disabled={!data.validacao.trim() || submitting}
                                        loading={submitting}
                                    >
                                        {submitting ? "Enviando" : "Enviar candidatura"}
                                    </PrimaryButton>

                                    {submitError && (
                                        <p className="text-sm text-red-400/90">
                                            Não conseguimos enviar agora. Verifique sua conexão e
                                            tente novamente.
                                        </p>
                                    )}
                                </motion.div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}

                {/* ----------------------------- STEP 6 — SUCESSO */}
                {step === 6 && (
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
                            title="Candidatura"
                            titleAccent="enviada."
                            body="Recebi sua candidatura. Vou analisar cada inscrição com atenção e, se a mentoria fizer sentido para o seu momento, entro em contato com os próximos passos pelo WhatsApp."
                            closer="Até breve!"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
