import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";

export default function SendToken() {
  const { connection } = useConnection();
  const wallet = useWallet();
  async function sendToken() {
    const transaction = new Transaction();
    const topublickey = document.getElementById("to").value;
    const amount = Number(document.getElementById("amount").value);
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: new PublicKey(topublickey),
        lamports: amount * LAMPORTS_PER_SOL,
      })
    );
    await wallet.sendTransaction(transaction, connection);
    alert("Sent" + amount + "Sol to" + topublickey);
  }
  return (
    <div>
      <input id="to" type="text" placeholder="to"></input>
      <input id="amount" type="number" placeholder="amount" />
      <button onClick={sendToken}>Send</button>
    </div>
  );
}
