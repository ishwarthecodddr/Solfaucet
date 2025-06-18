import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";

// the usewallet hook provides the wallet variable inside the Airdrop component because i wrapped the Airdrop component inside the WalletProvider in App.jsx
const Airdrop = () => {
  const wallet = useWallet();
  const [value, setValue] = useState(0);
  const [balance, setBalance] = useState(0);
  const { connection } = useConnection();
  async function sendAirdropToUser() {
    await connection.requestAirdrop(wallet.publicKey, value * 1000000000);
    alert(`${value} Airdrop sent!`);
  }
  async function getBalance() {
    await connection.getBalance(wallet.publicKey).then((balance) => {
      setBalance(balance);
    });
  }
  return (
    <div className="flex flex-col items-center w-full">
      <div className="text-sm text-white mb-2">
        {wallet.publicKey ? (
          <span>
            Wallet:{" "}
            {wallet.publicKey.toBase58().slice(0, 4)}...
            {wallet.publicKey.toBase58().slice(-4)}
          </span>
        ) : (
          <span className="text-black font-bold text-xl">No Wallet Connected</span>
        )}
      </div>
      <div className="flex gap-2 mb-4 w-full">
        <input
          onChange={(e) => setValue(e.target.value)}
          type="number"
          min="0"
          className="rounded-lg px-2 bg-gray-500/30 text-purple-200  w-full focus:outline-none border-purple-500 border focus:ring-2 focus:ring-blue-400"
          placeholder="Airdrop amount (SOL)"
        />
        <button
          onClick={sendAirdropToUser}
          className="bg-gradient-to-r from-violet-600 to-blue-500 text-white font-semibold px-4 py-2 rounded-lg shadow hover:scale-105 transition-transform"
        >
          Request Airdrop
        </button>
      </div>
      <button
        onClick={getBalance}
        className="bg-white bg-opacity-80 text-blue-700 font-semibold px-4 py-2 rounded-lg shadow mb-2 hover:bg-opacity-100 transition"
      >
        Get Balance
      </button>
      <div className="text-lg font-bold text-black mt-2">
        Balance: {balance} lamports
      </div>
    </div>
  );
};
export default Airdrop;
