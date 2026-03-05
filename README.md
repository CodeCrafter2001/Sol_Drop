# ☀️ Sol Drop — Solana Wallet Interface

A lightweight, minimal React app for interacting with the Solana blockchain. Connect your wallet, request airdrops, check your balance, and send SOL — all from one sleek dark-themed UI.

---

## ✨ Features

- 🔌 **Wallet Connect** — Supports all major Solana wallets via `@solana/wallet-adapter`
- 💸 **Airdrop SOL** — Request up to 2 SOL directly to your connected wallet (devnet/localnet)
- 💰 **Live Balance** — Automatically fetches and displays your SOL balance on connect
- 🚀 **Send SOL** — Transfer SOL to any valid Solana public key with one click

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 19 | UI Framework |
| Vite | Build tool & dev server |
| `@solana/web3.js` | Solana blockchain interaction |
| `@solana/wallet-adapter-react` | Wallet connection hooks |
| `@solana/wallet-adapter-react-ui` | Pre-built wallet modal UI |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- A local Solana validator **or** access to devnet
- A Solana-compatible browser wallet (e.g. Phantom, Backpack, Solflare)

### Installation

```bash
git clone https://github.com/your-username/sol-drop.git
cd sol-drop
npm install
```

### Run locally

```bash
# Start a local Solana validator (optional, for local testing)
solana-test-validator

# Start the dev server
npm run dev
```

> By default, the app connects to `http://127.0.0.1:8899` (local validator).  
> To use devnet, change the endpoint in `App.jsx`:
> ```js
> endpoint={"https://api.devnet.solana.com"}
> ```

---

## 📁 Project Structure

```
Sol_Drop/
├── src/
│   ├── App.jsx              # Root component, wallet providers & layout
│   ├── RequestAirDrop.jsx   # Airdrop UI & logic
│   ├── ShowBalance.jsx      # Wallet balance display
│   ├── SendToken.jsx        # SOL transfer UI & logic
│   ├── App.css              # Component styles
│   └── index.css            # Global styles
├── package.json
└── vite.config.js
```

---

## 🧩 Components

### `RequestAirDrop`
Lets you request between 0.1 and 2 SOL to the connected wallet. Uses `connection.requestAirdrop()` and waits for transaction confirmation before alerting success.

### `ShowBalance`
Fetches the live SOL balance of the connected wallet using `connection.getBalance()`. Automatically re-fetches when the wallet or connection changes.

### `SendTokens`
Constructs a `SystemProgram.transfer` transaction and broadcasts it via `wallet.sendTransaction()`. Takes a recipient address and SOL amount as inputs.

---

## ⚠️ Notes

- Airdrop is only available on **devnet** or **localnet** — not mainnet.
- Both `RequestAirDrop` and `SendTokens` share the DOM `id="amount"` — they work independently since they're rendered separately, but be mindful if refactoring.
- No wallet is pre-configured in `wallets={[]}` — the adapter auto-detects injected wallets from the browser.

---

## 📜 License

MIT — free to use, fork, and build upon.

---

> Built with 💜 using React + Solana Web3.js
