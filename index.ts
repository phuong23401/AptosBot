import { Account, Aptos, AptosConfig, Network } from '@aptos-labs/ts-sdk'

const aptosConfig = new AptosConfig({ network: Network.TESTNET })
const aptos = new Aptos(aptosConfig)

const ledgerInfo = await aptos.getLedgerInfo()
const modules = await aptos.getAccountModules({ accountAddress: '0x123' })
const tokens = await aptos.getAccountOwnedTokens({ accountAddress: '0x123' })

const alice: Account = Account.generate()

await aptos.fundAccount({
  accountAddress: alice.accountAddress,
  amount: 100000000,
})

const bobAddress = '0xb0b'

const transaction = await aptos.transaction.build.simple({
  sender: alice.accountAddress,
  data: {
    function: '0x1::aptos_account::transfer_coins',
    typeArguments: ['0x1::aptos_coin::AptosCoin'],
    functionArguments: [bobAddress, 100],
  },
})

console.log(transaction)
console.log(ledgerInfo)
console.log(modules)
console.log(tokens)
