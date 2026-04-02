import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  CircleDot,
  Coins,
  Droplets,
  Orbit,
  Shield,
  ShieldCheck,
  Sparkles,
  Sprout,
  TimerReset,
} from "lucide-react";
import { farmConfig } from "@/lib/config";

type LandingPageProps = {
  onNavigateToFarm: () => void;
};

export function LandingPage({ onNavigateToFarm }: LandingPageProps) {
  const detailItems = [
    {
      label: "Pair",
      value: `${farmConfig.tokenSymbol}/${farmConfig.quoteTokenSymbol}`,
      hint: "Configured LP market",
      icon: <Droplets className="h-4 w-4" />,
    },
    {
      label: "Chain",
      value: farmConfig.chainName,
      hint: "Wallet and contract network",
      icon: <Orbit className="h-4 w-4" />,
    },
    {
      label: "Rewards",
      value: farmConfig.tokenSymbol,
      hint: "Token earned by staking",
      icon: <Coins className="h-4 w-4" />,
    },
  ];

  const workflowSteps = [
    {
      title: "Add liquidity",
      description: `Supply ${farmConfig.tokenSymbol} and ${farmConfig.quoteTokenSymbol} into the configured pool.`,
    },
    {
      title: "Stake LP",
      description: `Deposit your ${farmConfig.lpSymbol} into the live rewards contract.`,
    },
    {
      title: "Track and claim",
      description: `Monitor balances, claim ${farmConfig.tokenSymbol}, or exit when you want.`,
    },
  ];

  function formatAddress(address: string) {
    if (address.length < 12) {
      return address;
    }

    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }

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
            <div className="farm-landing-eyebrow">
              <Sprout className="h-4 w-4" />
              XVG Farm Network
            </div>
            <div className="farm-landing-panel mt-6">
              <h1 className="relative z-[1] max-w-4xl text-4xl font-extrabold tracking-[-0.03em] text-slate-50 sm:text-5xl lg:text-6xl">
                Welcome to the XVGTokens Farm!
              </h1>
              <p className="relative z-[1] mt-5 max-w-2xl text-base leading-8 text-slate-200/85 sm:text-lg">
                Access the active XVGTokens farms, review the live pair setup, and jump straight
                into staking with a cleaner path from discovery to deposit.
              </p>
              <div className="relative z-[1] mt-6 flex flex-wrap gap-3">
                <div className="farm-landing-pill">
                  <CheckCircle2 className="h-4 w-4" />
                  Live XVGBASE deployment
                </div>
                <div className="farm-landing-pill">
                  <Shield className="h-4 w-4" />
                  Direct contract reads
                </div>
                <div className="farm-landing-pill">
                  <TimerReset className="h-4 w-4" />
                  Wallet snapshot updates
                </div>
              </div>
              <div className="relative z-[1] mt-6 grid max-w-2xl gap-3 sm:grid-cols-3">
                <div className="farm-landing-mini-card">
                  <div className="farm-landing-mini-title">
                    <Sparkles className="h-4 w-4" />
                    Easy To Use
                  </div>
                  <div className="mt-2 text-sm leading-6 text-slate-200/80">
                    All steps are numbered to get new users started.
                  </div>
                </div>
                <div className="farm-landing-mini-card">
                  <div className="farm-landing-mini-title">
                    <Orbit className="h-4 w-4" />
                    Real Time Rewards
                  </div>
                  <div className="mt-2 text-sm leading-6 text-slate-200/80">
                    Users can monitor their rewards in real time!
                  </div>
                </div>
                <div className="farm-landing-mini-card">
                  <div className="farm-landing-mini-title">
                    <ShieldCheck className="h-4 w-4" />
                    Clear Status
                  </div>
                  <div className="mt-2 text-sm leading-6 text-slate-200/80">
                    Each farm reads the contract directly and shows the current status.
                  </div>
                </div>
              </div>
              <div className="relative z-[1] mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onNavigateToFarm}
                  className="farm-landing-action farm-landing-action-market"
                >
                  <span>
                    Open $XVGBASE Farm
                    <ArrowRight className="ml-2 inline h-4 w-4" />
                  </span>
                </button>
                <a href="#farm-overview" className="farm-landing-action farm-landing-action-ghost">
                  <span>
                    Explore Details
                    <ArrowUpRight className="ml-2 inline h-4 w-4" />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.08 } }}
            className="farm-landing-panel farm-landing-panel-compact"
          >
            <div className="relative z-[1] flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-300/80">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(74,222,128,0.8)]" />
              </span>
              Active Farms
            </div>
            <div className="farm-landing-inner-card relative z-[1] mt-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm uppercase tracking-[0.26em] text-emerald-100/80">Base</div>
                  <div className="mt-2 text-3xl font-semibold text-white">{farmConfig.projectName}</div>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-100">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                  Live
                </div>
              </div>
              <div className="mt-2 text-sm leading-7 text-slate-200/80">
                Existing liquidity farming dashboard for the {farmConfig.tokenSymbol}/
                {farmConfig.quoteTokenSymbol} LP.
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {detailItems.map((item) => (
                  <div key={item.label} className="farm-landing-mini-card farm-landing-mini-card-interactive">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                        {item.label}
                      </div>
                      <div className="text-sky-200/80">{item.icon}</div>
                    </div>
                    <div className="mt-2 text-sm font-medium text-white">{item.value}</div>
                    <div className="mt-1 text-xs text-slate-300/65">{item.hint}</div>
                  </div>
                ))}
              </div>
              <div className="farm-landing-address-list mt-5">
                <div className="farm-landing-address-row">
                  <span>Farm Contract</span>
                  <span>{formatAddress(farmConfig.rewardsContractAddress)}</span>
                </div>
                <div className="farm-landing-address-row">
                  <span>LP Contract</span>
                  <span>{formatAddress(farmConfig.lpTokenAddress)}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={onNavigateToFarm}
                className="farm-landing-action farm-landing-action-dex mt-6"
              >
                <span>
                  Enter Farm
                  <ArrowRight className="ml-2 inline h-4 w-4" />
                </span>
              </button>
            </div>
          </motion.div>
        </section>

        <section id="farm-overview" className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.12 } }}
            className="farm-landing-panel"
          >
            <div className="relative z-[1]">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300/80">
                Farm Overview
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                A clearer front page before users enter the dashboard
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200/80 sm:text-base">
                The live farm view already carries strong visual detail. This front page now
                mirrors that intent with quick context, deployment hints, and a smoother transition
                into the actual staking workflow.
              </p>
            </div>

            <div className="relative z-[1] mt-6 grid gap-3 sm:grid-cols-3">
              {workflowSteps.map((step, index) => (
                <div key={step.title} className="farm-landing-step-card">
                  <div className="farm-landing-step-index">
                    <CircleDot className="h-4 w-4" />
                    Step {index + 1}
                  </div>
                  <div className="mt-3 text-base font-semibold text-white">{step.title}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-200/76">{step.description}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.18 } }}
            className="farm-landing-panel farm-landing-panel-compact"
          >
            <div className="relative z-[1]">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300/80">
                Quick Notes
              </div>
              <div className="mt-4 grid gap-3">
                <div className="farm-landing-note-card">
                  <div className="farm-landing-note-title">Wallet-first flow</div>
                  <div className="mt-2 text-sm leading-6 text-slate-200/78">
                    Users can connect, verify balances, and move from liquidity to staking without
                    leaving the farm experience.
                  </div>
                </div>
                <div className="farm-landing-note-card">
                  <div className="farm-landing-note-title">Visible network context</div>
                  <div className="mt-2 text-sm leading-6 text-slate-200/78">
                    The pair, chain, LP token, and rewards contract are surfaced earlier so the
                    user has better context before clicking through.
                  </div>
                </div>
                <div className="farm-landing-note-card">
                  <div className="farm-landing-note-title">Cleaner handoff into staking</div>
                  <div className="mt-2 text-sm leading-6 text-slate-200/78">
                    The front page now feels less like a placeholder and more like the opening
                    layer of the actual dashboard.
                  </div>
                </div>
              </div>
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
