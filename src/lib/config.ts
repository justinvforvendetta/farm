function getEnv(name: string, fallback: string) {
  const raw = import.meta.env[name];
  if (typeof raw !== "string") {
    return fallback;
  }

  const normalized = raw.trim();
  return normalized.length > 0 ? normalized : fallback;
}

function getNumberEnv(name: string, fallback: number) {
  const raw = import.meta.env[name];
  if (typeof raw !== "string" || raw.trim().length === 0) {
    return fallback;
  }

  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export const farmConfig = {
  chainId: getNumberEnv("VITE_CHAIN_ID", 1),
  chainName: getEnv("VITE_CHAIN_NAME", "Base Network"),
  projectName: getEnv("VITE_PROJECT_NAME", "XVGBASE"),
  projectTicker: getEnv("VITE_PROJECT_TICKER", "XVGBASE"),
  walletConnectProjectId: getEnv(
    "VITE_WALLETCONNECT_PROJECT_ID",
    "YOUR_WALLETCONNECT_PROJECT_ID",
  ),
  tokenSymbol: getEnv("VITE_TOKEN_SYMBOL", "XVGBASE"),
  tokenAddress: getEnv(
    "VITE_TOKEN_ADDRESS",
    "0xe061aa40be525a13296cb4bf69f513242349d708",
  ),
  quoteTokenSymbol: getEnv("VITE_QUOTE_TOKEN_SYMBOL", "WETH"),
  quoteTokenAddress: getEnv("VITE_QUOTE_TOKEN_ADDRESS", "0x4200000000000000000000000000000000000006"),
  quoteTokenDecimals: getNumberEnv("VITE_QUOTE_TOKEN_DECIMALS", 18),
  lpSymbol: getEnv("VITE_LP_SYMBOL", "XVGBASE/WETH LP"),
  rewardsContractAddress: getEnv(
    "VITE_REWARDS_CONTRACT_ADDRESS",
    "0xYourRewardsContractAddressHere",
  ),
  lpTokenAddress: getEnv("VITE_LP_TOKEN_ADDRESS", "0xYourLpTokenAddressHere"),
  v2RouterAddress: getEnv("VITE_V2_ROUTER_ADDRESS", "0xYourV2RouterAddressHere"),
  v2PoolAddress: getEnv("VITE_V2_POOL_ADDRESS", "0xYourXvgbaseWethPairAddressHere"),
  liquiditySlippageBps: getNumberEnv("VITE_LIQUIDITY_SLIPPAGE_BPS", 100),
  liquidityDeadlineMinutes: getNumberEnv("VITE_LIQUIDITY_DEADLINE_MINUTES", 20),
  tokenDecimals: getNumberEnv("VITE_TOKEN_DECIMALS", 18),
  lpDecimals: getNumberEnv("VITE_LP_DECIMALS", 18),
} as const;
