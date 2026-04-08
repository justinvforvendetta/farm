import { isAddress } from "ethers";
import { useReadContract } from "wagmi";
import { REWARDS_ABI } from "@/lib/abis";
import type { FarmConfig, FarmSlug } from "@/lib/farms";

export type LandingFarmSummary = {
  status: "unconfigured" | "loading" | "ready" | "error";
  rewardRate: bigint | null;
};

function useFarmRewardRateSummary(farm?: FarmConfig): LandingFarmSummary {
  const enabled = Boolean(farm && isAddress(farm.rewardsContractAddress));

  const { data, isLoading, isFetching, isError } = useReadContract({
    address: enabled ? (farm!.rewardsContractAddress as `0x${string}`) : undefined,
    chainId: farm?.chainId,
    abi: REWARDS_ABI as never,
    functionName: "rewardRate",
    query: {
      enabled,
      staleTime: 30_000,
      refetchInterval: 30_000,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      retry: 1,
    },
  });

  if (!farm || !enabled) {
    return {
      status: "unconfigured",
      rewardRate: null,
    };
  }

  if (typeof data === "bigint") {
    return {
      status: "ready",
      rewardRate: data,
    };
  }

  if (isLoading || isFetching) {
    return {
      status: "loading",
      rewardRate: null,
    };
  }

  if (isError) {
    return {
      status: "error",
      rewardRate: null,
    };
  }

  return {
    status: "error",
    rewardRate: null,
  };
}

export function useLandingFarmSummaries(farms: FarmConfig[]) {
  const xvgbaseFarm = farms.find((farm) => farm.slug === "xvgbase");
  const xvgbscFarm = farms.find((farm) => farm.slug === "xvgbsc");

  const xvgbaseSummary = useFarmRewardRateSummary(xvgbaseFarm);
  const xvgbscSummary = useFarmRewardRateSummary(xvgbscFarm);

  const summaries = {
    xvgbase: xvgbaseSummary,
    xvgbsc: xvgbscSummary,
  } as Record<FarmSlug, LandingFarmSummary>;

  return {
    summaries,
    isLoading:
      xvgbaseSummary.status === "loading" || xvgbscSummary.status === "loading",
  };
}
