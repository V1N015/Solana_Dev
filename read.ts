//Solana Wallet Balance Checking

import {Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from '@solana/web3.js'

const connection = new Connection(clusterApiUrl('devnet'))

const wallet = new PublicKey('Fc2nGvify4eQJDVurKYLYfGCnTdCKfxLy9mwqBvf1GNr')

async function main() 
{
  const balance = await connection.getBalance(wallet)

  console.log('Balance is: ', balance / LAMPORTS_PER_SOL)
}

main()