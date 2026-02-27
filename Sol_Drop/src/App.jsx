import React from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import { RequestAirDrop } from "./RequestAirDrop";
import { ShowBalance } from "./ShowBalance.jsx";
import { SendTokens } from "./SendToken.jsx";

function App() {
  return (
    <ConnectionProvider endpoint={"http://127.0.0.1:8899"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div
            style={{
              minHeight: "100vh",
              width: "100%",
              background:
                "radial-gradient(circle at top left, #1f1c2c, #121212 60%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            <div
              style={{
                background: "linear-gradient(145deg, #1e1e1e, #151515)",
                padding: "40px",
                borderRadius: "20px",
                boxShadow:
                  "0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(120, 80, 255, 0.2)",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                alignItems: "center",
                width: "360px",
                color: "#ffffff",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontWeight: "600",
                  letterSpacing: "1px",
                }}
              >
                Solana Wallet
              </h2>

              <WalletMultiButton />
              <WalletDisconnectButton />

              <RequestAirDrop />
              <ShowBalance />
              <SendTokens/>
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;