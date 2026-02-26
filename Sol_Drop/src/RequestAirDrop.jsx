import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function RequestAirDrop() {
  const { publicKey } = useWallet();
  const { connection } = useConnection();

  async function requestAirdrop() {
    if (!publicKey) {
      alert("Connect wallet first");
      return;
    }

    const amount = Number(document.getElementById("amount").value);

    if (!amount || amount <= 0 || amount > 2) {
      alert("Enter amount between 0.1 and 2 SOL");
      return;
    }

    try {
      const signature = await connection.requestAirdrop(
        publicKey,
        amount * LAMPORTS_PER_SOL
      );

      const latestBlockhash = await connection.getLatestBlockhash();
      await connection.confirmTransaction(
        { signature, ...latestBlockhash },
        "confirmed"
      );

      alert(`Airdropped ${amount} SOL to ${publicKey.toBase58()}`);
    } catch (err) {
      console.error(err);
      alert("Devnet rate-limited or faucet exhausted");
    }
  }

  return (
    <div>
      <input id="amount" type="number" placeholder="Amount (SOL)" />
      <button onClick={requestAirdrop}>Request Airdrop</button>
    </div>
  );
}