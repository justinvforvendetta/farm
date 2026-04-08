import { isAddress } from "ethers";
import { useReadContracts } from "wagmi";
import { REWARDS_ABI } from "@/lib/abis";
import type { FarmConfig, FarmSlug } from "@/lib/farms";

export type LandingFarmSummary = {
  status: "unconfigured" | "loading" | "ready";
  rewardRate: bigint | null;
};

function useFarmRewardRateSummary(farm?: FarmConfig): LandingFarmSummary {
  const enabled = Boolean(farm && isAddress(farm.rewardsContractAddress));

  const { data, isLoading, isFetching } = useReadContracts({
    contracts: enabled
      ? [
          {
            address: farm!.rewardsContractAddress as `0x${string}`,
            chainId: farm!.chainId,
            abi: REWARDS_ABI as never,
            functionName: "rewardRate" as const,
          },
        ]
      : [],
    allowFailure: true,
    query: {
      enabled,
      staleTime: 30_000,
      refetchInterval: 30_000,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      retry: 6,
      retryDelay: (attempt) => Math.min(1_000 * 2 ** attempt, 10_000),
    },
  });

  if (!farm || !enabled) {
    return {
      status: "unconfigured",
      rewardRate: null,
    };
  }

  const rewardRateResult = data?.[0] as
    | { status?: string; result?: bigint | null }
    | undefined;

  if (
    rewardRateResult?.status === "success" &&
    typeof rewardRateResult.result === "bigint"
  ) {
    return {
      status: "ready",
      rewardRate: rewardRateResult.result,
    };
  }

  return {
    status: isLoading || isFetching ? "loading" : "loading",
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
