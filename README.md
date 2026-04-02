# XVGTokens Farm

Vite + React frontend for the XVGTokens farm hub. The app now serves both the XVGBASE and XVGBSC farms from the same codebase, with route-specific configuration and branding for each farm.

The frontend includes:

- Injected wallet connect
- Live reads for each farm wallet token, quote token, LP balance, staked balance, earned rewards, reward rate, and program end
- Direct liquidity adds through a configurable V2 router per farm
- LP approval
- LP staking
- LP withdrawal
- Reward claiming
- Farm exit
- On-page `Add Liquidity` flow for the configured V2 pool on each farm

## Assumptions

- The original single-file app did not include real rewards contract addresses, LP token addresses, router addresses, pair addresses, or all confirmed quote token addresses, so those remain configurable through environment variables.
- XVGBASE and XVGBSC now use separate env prefixes, so each farm can be configured independently inside the same deploy.
- The minimal ABIs are preserved from the original file. If your deployed farm contract differs, update `src/lib/abis.ts`.
- The frontend assumes `18` decimals for both rewards and LP unless you override them in `.env`.

## Project Structure

```text
.
├── .env.example
├── .gitignore
├── README.md
├── index.html
├── package.json
├── postcss.config.cjs
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── src
    ├── App.tsx
    ├── main.tsx
    ├── components
    │   ├── FarmDashboard.tsx
    │   ├── MetricCard.tsx
    │   ├── ProgramInfoCard.tsx
    │   ├── StakePanel.tsx
    │   ├── StatusAlert.tsx
    │   ├── WalletActions.tsx
    │   └── ui
    │       ├── alert.tsx
    │       ├── badge.tsx
    │       ├── button.tsx
    │       ├── card.tsx
    │       └── input.tsx
    ├── hooks
    │   └── useFarm.ts
    ├── lib
    │   ├── abis.ts
    │   ├── farm-context.tsx
    │   ├── farms.ts
    │   ├── contracts.ts
    │   ├── format.ts
    │   └── utils.ts
    └── styles
        └── index.css
```

## Setup

1. Copy the example environment file:

```bash
cp .env.example .env
```

2. Fill in the values that are still placeholders for each farm you want active:

- `VITE_XVGBASE_REWARDS_CONTRACT_ADDRESS`
- `VITE_XVGBASE_LP_TOKEN_ADDRESS`
- `VITE_XVGBASE_V2_ROUTER_ADDRESS`
- `VITE_XVGBASE_V2_POOL_ADDRESS`
- `VITE_XVGBSC_REWARDS_CONTRACT_ADDRESS`
- `VITE_XVGBSC_LP_TOKEN_ADDRESS`
- `VITE_XVGBSC_V2_ROUTER_ADDRESS`
- `VITE_XVGBSC_V2_POOL_ADDRESS`
- Any token, quote token, or decimal values that differ from the defaults

## Install

```bash
npm install
```

## Run In Dev

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## GitHub Pages

This repo can be deployed either at the root of a domain or under a subpath.

For a root-domain or subdomain deployment such as:

```text
https://farm.xvgtokens.com/
```

use the default build with no extra base-path config.

For a subpath deployment such as GitHub Pages at:

```text
https://mobiitz.github.io/farm/
```

To deploy it:

1. Push the repo to the `main` branch on GitHub.
2. In GitHub, go to `Settings -> Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. In `Settings -> Secrets and variables -> Actions -> Variables`, create one repository variable named `env`.
5. Paste your full Vite env block into that `env` variable exactly as key/value lines.
6. Push again or run the `Deploy to GitHub Pages` workflow manually from the `Actions` tab.
7. Set `VITE_BASE_PATH=/farm` in that deployment environment so built asset URLs resolve correctly.

## Environment Variables

All runtime configuration is read from Vite env vars.

Shared across all farms:

- `VITE_WALLETCONNECT_PROJECT_ID`

Farm-scoped variables use explicit prefixes:

- `VITE_XVGBASE_*`
- `VITE_XVGBSC_*`

Each farm supports the same field set:

- `CHAIN_ID`
- `CHAIN_NAME`
- `ROUTER_KIND`
- `PROJECT_NAME`
- `PROJECT_TICKER`
- `TOKEN_SYMBOL`
- `TOKEN_ADDRESS`
- `QUOTE_TOKEN_SYMBOL`
- `QUOTE_TOKEN_ADDRESS`
- `QUOTE_TOKEN_DECIMALS`
- `LP_SYMBOL`
- `REWARDS_CONTRACT_ADDRESS`
- `LP_TOKEN_ADDRESS`
- `V2_ROUTER_ADDRESS`
- `V2_POOL_ADDRESS`
- `POOL_STABLE`
- `LIQUIDITY_SLIPPAGE_BPS`
- `LIQUIDITY_DEADLINE_MINUTES`
- `TOKEN_DECIMALS`
- `LP_DECIMALS`

## Notes For Deployment

- Wallet integration uses the injected `window.ethereum` provider and `ethers` v6, matching the original app approach.
- Contract reads refresh after wallet connect and every 10 seconds while connected.
- Route-specific farm configuration lives in `src/lib/farms.ts`.
- Direct liquidity uses the configured V2 router from the active farm config and calls `addLiquidity` for that farm pair.
- If your farm ABI differs from the minimal interface in this repo, replace the entries in `src/lib/abis.ts` with your compiled ABI.
- `public/.htaccess` adds an Apache SPA fallback so refreshing `/farm/xvgbase` serves `index.html` instead of returning `404`.
- `public/_redirects` adds the same fallback for hosts that honor Netlify-style redirect rules.
- `VITE_BASE_PATH` controls the build base. Leave it unset for root deployments like `https://farm.xvgtokens.com/`, or set it to `/farm` for deployments hosted under `/farm/`.
