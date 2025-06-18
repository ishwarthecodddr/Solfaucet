import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
// import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
// import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletConnectButton,
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
import Airdrop from "./Airdrop";
function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-tr from-violet-600 to-blue-500">
      <ConnectionProvider
        endpoint={
          "https://solana-devnet.g.alchemy.com/v2/tn6AMZFjeh7x_D-YINLvE"
        }
      >
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className="bg-white/10 bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl px-10 py-8 flex flex-col items-center max-w-md w-full">
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-red-600 mb-2 drop-shadow-lg">
                SolFaucet
              </h1>
              <h2 className="text-lg font-medium text-black mb-6">
                Instantly get free SOL on Solana Devnet. Connect your wallet and
                claim your airdrop!
              </h2>
              <div className="flex items-center justify-center gap-4 mb-4">
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
              <Airdrop />
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}

export default App;
