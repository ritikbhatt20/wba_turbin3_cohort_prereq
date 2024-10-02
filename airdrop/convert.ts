import bs58 from 'bs58';
import prompt from 'prompt-sync';

const ps = prompt();

// Function to convert a base58 encoded private key to a byte array (Solana wallet format)
function base58ToWallet() {
  const base58 = ps('Enter your base58 private key: ');
  const wallet = bs58.decode(base58);
  console.log('Wallet (byte array):', wallet);
}

// Function to convert a byte array (Solana wallet format) to a base58 encoded private key
function walletToBase58() {
  const walletString = ps('Enter your wallet (byte array) as a comma-separated string: ');
  const wallet = walletString.split(',').map(Number);
  const base58 = bs58.encode(Buffer.from(wallet));
  console.log('Base58 private key:', base58);
  
}

// CLI menu to choose the conversion direction
function main() {
  const choice = ps('Choose an option (1: base58 to wallet, 2: wallet to base58): ');

  if (choice === '1') {
    base58ToWallet();
  } else if (choice === '2') {
    walletToBase58();
  } else {
    console.log('Invalid choice. Please enter 1 or 2.');
  }
}

// Run the main function
main();
