"use client";

import React, { useState } from 'react';
import { Button } from "@/components/landing/ui/button";
import { Input } from "@/components/landing/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/landing/ui/card";

export default function Home() {
  const [accountAddress, setAccountAddress] = useState<string | null>(null);
  const [recipientAddress, setRecipientAddress] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [txnHash, setTxnHash] = useState<string | null>(null);

  const generateAccount = async () => {
    const response = await fetch('/api/aptos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'generateAccount' }),
    });
    const data = await response.json();
    setAccountAddress(data.address);
  };

  const handleTransfer = async () => {
    if (!accountAddress || !recipientAddress || !amount) return;

    try {
      const response = await fetch('/api/aptos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'transfer',
          data: {
            senderPrivateKey: 'REPLACE_WITH_ACTUAL_PRIVATE_KEY', // Note: In a real app, you'd need a secure way to manage private keys
            recipientAddress,
            amount,
          },
        }),
      });
      const data = await response.json();
      setTxnHash(data.txnHash);
    } catch (error) {
      console.error("Transfer failed:", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Aptos SDK Example</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button onClick={generateAccount} className="w-full">
              Generate New Account
            </Button>
            
            {accountAddress && (
              <div className="text-sm">
                <p>Address: {accountAddress}</p>
              </div>
            )}
            
            <Input
              placeholder="Recipient Address"
              value={recipientAddress}
              onChange={(e) => setRecipientAddress(e.target.value)}
            />
            
            <Input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            
            <Button onClick={handleTransfer} className="w-full" disabled={!accountAddress}>
              Transfer
            </Button>
            
            {txnHash && (
              <div className="text-sm">
                <p>Transaction Hash: {txnHash}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}