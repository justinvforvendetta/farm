import { useMemo } from "react";
import { isAddress } from "ethers";
import { useReadContracts } from "wagmi";
import { REWARDS_ABI } from "@/lib/abis";
import type { FarmConfig, FarmSlug } from "@/lib/farms";

export type LandingFarmSummary = {
  rewardRate: bigint | null;
};

export function useLandingFarmSummaries(farms: FarmConfig[]) {
  const summaryContracts = useMemo(
    () =>
      farms
        .filter((farm) => isAddress(farm.rewardsContractAddress))
        .map((farm) => ({
          address: farm.rewardsContractAddress as `0x${string}`,
          chainId: farm.chainId,
          abi: REWARDS_ABI as never,
          functionName: "rewardRate" as const,
        })),
    [farms],
  );

  const { data, isLoading, isFetching } = useReadContracts({
    contracts: summaryContracts,
    allowFailure: true,
    query: {
      enabled: summaryContracts.length > 0,
      staleTime: 30_000,
      refetchInterval: 30_000,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
    },
  });

  const summaries = useMemo(() => {
    const next = {} as Record<FarmSlug, LandingFarmSummary>;
    let resultIndex = 0;

    for (const farm of farms) {
      if (!isAddress(farm.rewardsContractAddress)) {
        next[farm.slug] = { rewardRate: null };
        continue;
      }

      const entry = data?.[resultIndex] as
        | { status?: string; result?: bigint | null }
        | undefined;
      next[farm.slug] = {
        rewardRate:
          entry?.status === "success" && typeof entry.result === "bigint" ? entry.result : null,
      };
      resultIndex += 1;
    }

    return next;
  }, [data, farms]);

  return {
    summaries,
    isLoading: isLoading || isFetching,
  };
}
