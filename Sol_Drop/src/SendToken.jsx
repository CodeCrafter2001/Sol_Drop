import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";


export function SendTokens() {
    const wallet = useWallet();
    const {connection} = useConnection();

    async function sendTokens() {
        let to = document.getElementById("to").value;
        let amount = document.getElementById("amount").value;
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL,
        }));

        await wallet.sendTransaction(transaction, connection);
        alert("Sent " + amount + " SOL to " + to);
    }

    return (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      width: "100%",
      marginTop: "10px",
    }}
  >
    <input
      id="to"
      type="text"
      placeholder="Recipient Address"
      style={{
        padding: "12px",
        borderRadius: "10px",
        border: "1px solid #333",
        backgroundColor: "#1e1e1e",
        color: "white",
        outline: "none",
        fontSize: "14px",
      }}
    />

    <input
      id="amount"
      type="number"
      placeholder="Amount (SOL)"
      style={{
        padding: "12px",
        borderRadius: "10px",
        border: "1px solid #333",
        backgroundColor: "#1e1e1e",
        color: "white",
        outline: "none",
        fontSize: "14px",
      }}
    />

    <button
      onClick={sendTokens}
      style={{
        padding: "12px",
        borderRadius: "10px",
        border: "none",
        background: "linear-gradient(90deg, #7f5af0, #6246ea)",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "0.2s ease",
        fontSize: "14px",
      }}
      onMouseOver={(e) =>
        (e.target.style.opacity = "0.85")
      }
      onMouseOut={(e) =>
        (e.target.style.opacity = "1")
      }
    >
      Send SOL
    </button>
  </div>
);
}