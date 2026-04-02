import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  coinbaseWallet,
  injectedWallet,
  metaMaskWallet,
  trustWallet,
  uniswapWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { http } from "wagmi";
import { base, bsc } from "wagmi/chains";

export const wagmiConfig = getDefaultConfig({
  appName: "XVGTokens Farm",
  appDescription: "Liquidity farms for XVGTokens deployments on Base and BNB Smart Chain.",
  appUrl: "https://farm.xvgtokens.com/",
  projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || "YOUR_WALLETCONNECT_PROJECT_ID",
  chains: [base, bsc],
  transports: {
    [base.id]: http(),
    [bsc.id]: http(),
  },
  wallets: [
    {
      groupName: "Recommended",
      wallets: [
        metaMaskWallet,
        uniswapWallet,
        trustWallet,
        coinbaseWallet,
        walletConnectWallet,
        injectedWallet,
      ],
    },
  ],
  ssr: false,
});
