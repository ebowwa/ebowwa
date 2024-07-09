import { NextResponse } from 'next/server';
import { Aptos, AptosConfig, Network, Account, AccountAddress, Ed25519PrivateKey } from "@aptos-labs/ts-sdk";

const aptos = new Aptos(new AptosConfig({ network: Network.DEVNET }));

export async function POST(request: Request) {
  const { action, data } = await request.json();

  switch (action) {
    case 'generateAccount':
      const newAccount = Account.generate();
      return NextResponse.json({ 
        address: newAccount.accountAddress.toString(), 
        privateKey: newAccount.privateKey.toString() 
      });

    case 'transfer':
      try {
        const { senderPrivateKey, recipientAddress, amount } = data;
        const privateKey = new Ed25519PrivateKey(senderPrivateKey);
        const sender = await Account.fromPrivateKey({ privateKey });
        
        const transaction = await aptos.transferCoinTransaction({
          sender: sender.accountAddress,
          recipient: AccountAddress.from(recipientAddress),
          amount: BigInt(amount),
        });

        const pendingTransaction = await aptos.signAndSubmitTransaction({ signer: sender, transaction });
        return NextResponse.json({ txnHash: pendingTransaction.hash });
      } catch (error) {
        console.error("Transfer failed:", error);
        return NextResponse.json({ error: 'Transfer failed' }, { status: 500 });
      }

    default:
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  }
}