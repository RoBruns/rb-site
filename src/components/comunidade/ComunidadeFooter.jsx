"use client";

export function ComunidadeFooter() {
    return (
        <footer className="relative w-full px-6 pb-14 pt-16">
            <div className="mx-auto max-w-5xl">
                <div className="cmn-hairline" />

                <div className="mt-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
                    <div>
                        <img
                            src="/pgar-logo.png"
                            alt="PGAR"
                            className="h-6 w-auto opacity-80"
                        />
                        <p className="mt-3 text-xs text-ice/35">
                            Comunidade PGAR · método e preparação de goleiros
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 md:items-end">
                        <a
                            href="#oferta"
                            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-electric-blue transition-colors duration-400 hover:text-ice"
                        >
                            Entrar na Comunidade →
                        </a>
                        <p className="text-[11px] text-ice/25">
                            © 2026 Rodrigo Bruns. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
