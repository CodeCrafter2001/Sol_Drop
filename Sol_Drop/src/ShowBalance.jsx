import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";


export function ShowBalance() {
const {connection} = useConnection();
const {publicKey }= useWallet();
const[balance, setBalance]= useState(null);

const fetchBalance = async () => {
    if (!publicKey) return;
    try{
        const lamports= await connection.getBalance(publicKey);
        setBalance(lamports/LAMPORTS_PER_SOL);
    }catch(error){
        console.log("error in fetching balance");
    }
};

useEffect(()=>{
 fetchBalance();  
},[publicKey, connection]);

   return (
    <div>
      {publicKey ? (
        <p>
          💰 Balance:{" "}
          {balance !== null ? `${balance.toFixed(4)} SOL` : "Loading..."}
        </p>
      ) : (
        <p>Connect wallet to see balance</p>
      )}
    </div>
  );

} 