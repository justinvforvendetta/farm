import type { LandingFarmSummary } from "@/hooks/useLandingFarmSummaries";
import type { FarmConfig } from "@/lib/farms";
import { formatPerDay } from "@/lib/format";

export function formatLandingRewardRate(
  farm: FarmConfig,
  summary?: LandingFarmSummary,
) {
  if (summary?.status === "unconfigured") {
    return "Not configured";
  }

  if (summary?.status === "error") {
    return "RPC unavailable";
  }

  if (!summary || summary.status === "loading" || summary.rewardRate == null) {
    return "Loading...";
  }

  return `${formatPerDay(summary.rewardRate, farm.tokenDecimals)} ${farm.tokenSymbol}/day`;
}
