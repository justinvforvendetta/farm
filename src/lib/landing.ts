import type { FarmConfig } from "@/lib/farms";
import { formatPerDay } from "@/lib/format";
import { isAddress } from "ethers";

export function formatLandingRewardRate(farm: FarmConfig, rewardRate: bigint | null) {
  if (!isAddress(farm.rewardsContractAddress)) {
    return "Not configured";
  }

  if (rewardRate == null) {
    return "Loading...";
  }

  return `${formatPerDay(rewardRate, farm.tokenDecimals)} ${farm.tokenSymbol}/day`;
}
