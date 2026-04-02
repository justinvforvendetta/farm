import { motion } from "framer-motion";
import {
  ArrowRight,
  Orbit,
  ShieldCheck,
  Sparkles,
  Sprout,
} from "lucide-react";
import { farmConfig } from "@/lib/config";

type LandingPageProps = {
  onNavigateToFarm: () => void;
};

export function LandingPage({ onNavigateToFarm }: LandingPageProps) {
  return (
    <main className="min-h-screen min-h-[calc(var(--app-height,1vh)*100)] overflow-x-hidden px-4 pb-10 pt-28 text-slate-100 sm:px-6 sm:pt-32 md:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-emerald-200/10 via-sky-300/10 to-transparent" />
      <div className="pointer-events-none absolute left-[-10rem] top-20 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8rem] top-40 h-80 w-80 rounded-full bg-sky-300/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-44 h-56 w-56 -translate-x-1/2 rounded-full border border-white/10 opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-52 h-80 w-80 -translate-x-1/2 rounded-full border border-emerald-200/10 opacity-20" />

      <div className="relative mx-auto grid max-w-6xl gap-8">
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-100">
              <Sprout className="h-4 w-4" />
              XVG Farm Network
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Welcome to the XVGTokens Farm!
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200/85 sm:text-lg">
              Here you can find farms for XVGTokens.
            </p>
            <div className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-3">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-100/80">
                  <Sparkles className="h-4 w-4" />
                  Multi-Chain
                </div>
                <div className="mt-2 text-sm leading-6 text-slate-200/80">
                  A single starting point for every XVG farm you publish.
                </div>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-100/80">
                  <Orbit className="h-4 w-4" />
                  Fast Routing
                </div>
                <div className="mt-2 text-sm leading-6 text-slate-200/80">
                  Farm pages stay separated while sharing one clean nav.
                </div>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-100/80">
                  <ShieldCheck className="h-4 w-4" />
                  Clear Status
                </div>
                <div className="mt-2 text-sm leading-6 text-slate-200/80">
                  Live farms can be surfaced immediately as more chains come online.
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onNavigateToFarm}
                className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_40px_rgba(255,255,255,0.18)] transition hover:bg-slate-100"
              >
                Open xvgbase Farm
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.08 } }}
            className="rounded-[32px] border border-white/10 bg-white/[0.055] p-6 shadow-[0_24px_120px_rgba(15,23,42,0.4)] backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-300/80">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(74,222,128,0.8)]" />
              </span>
              Active Farm
            </div>
            <div className="mt-4 rounded-[28px] border border-emerald-200/15 bg-[linear-gradient(180deg,rgba(16,185,129,0.14),rgba(15,23,42,0.2))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm uppercase tracking-[0.26em] text-emerald-100/80">Base</div>
                  <div className="mt-2 text-3xl font-semibold text-white">{farmConfig.projectName}</div>
                </div>
                <div className="rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-100">
                  Live
                </div>
              </div>
              <div className="mt-2 text-sm leading-7 text-slate-200/80">
                Existing liquidity farming dashboard for the {farmConfig.tokenSymbol}/
                {farmConfig.quoteTokenSymbol} LP.
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/25 px-4 py-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Pair
                  </div>
                  <div className="mt-2 text-sm font-medium text-white">
                    {farmConfig.tokenSymbol}/{farmConfig.quoteTokenSymbol}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/25 px-4 py-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Chain
                  </div>
                  <div className="mt-2 text-sm font-medium text-white">{farmConfig.chainName}</div>
                </div>
              </div>
              <button
                type="button"
                onClick={onNavigateToFarm}
                className="mt-6 inline-flex items-center rounded-full border border-white/14 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/8"
              >
                Enter Farm
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </section>

        <div className="pb-2 pt-2 text-center text-xs text-slate-300/70">
          Copyright 2026 XVGTokens.com
        </div>
      </div>
    </main>
  );
}
