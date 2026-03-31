import { motion } from "framer-motion";
import { ArrowRight, Droplets, RefreshCw, ShieldCheck, Waves } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WalletConnectTrigger } from "@/components/WalletConnectTrigger";

type WalletActionsProps = {
  chainName: string;
  title: string;
  description: string;
  busy: boolean;
  connected: boolean;
  onRefresh: () => Promise<void>;
};

export function WalletActions({
  chainName,
  title,
  description,
  busy,
  connected,
  onRefresh,
}: WalletActionsProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
      <Card className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(191,219,254,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.14),transparent_30%)]" />
        <CardHeader className="relative space-y-4">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-100/70">
            XVGBASE Yield Farm
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Live Farm
            </Badge>
            <Badge variant="secondary">{chainName}</Badge>
          </div>
          <CardTitle className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </CardTitle>
          <p className="max-w-2xl text-base leading-7 text-slate-200/95">{description}</p>
          <div className="grid gap-3 pt-1 sm:grid-cols-3">
            <div className="rounded-2xl border border-blue-200/16 bg-blue-950/35 px-4 py-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300/80">
                <ShieldCheck className="h-4 w-4 text-blue-200" />
                Connect
              </div>
              <div className="mt-2 text-sm text-slate-100">Link wallet and verify balances instantly.</div>
            </div>
            <div className="rounded-2xl border border-blue-200/16 bg-blue-950/35 px-4 py-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300/80">
                <Droplets className="h-4 w-4 text-blue-200" />
                Add Liquidity
              </div>
              <div className="mt-2 text-sm text-slate-100">Fund the XVGBASE/WETH pool and receive LP tokens.</div>
            </div>
            <div className="rounded-2xl border border-blue-200/16 bg-blue-950/35 px-4 py-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300/80">
                <Waves className="h-4 w-4 text-blue-200" />
                Farm
              </div>
              <div className="mt-2 text-sm text-slate-100">Stake LP positions and harvest rewards over time.</div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative grid gap-3 sm:flex sm:flex-wrap">
          <WalletConnectTrigger />
          <a
            href="#add-liquidity"
            className={buttonVariants("secondary", "w-full sm:w-auto")}
          >
            <Droplets className="mr-2 h-4 w-4" />
            Add Liquidity
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <Button
            onClick={onRefresh}
            disabled={busy || !connected}
            variant="outline"
            className="w-full sm:w-auto"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
