import { Aptos, AptosConfig, Network } from '@aptos-labs/ts-sdk'

const aptosConfig = new AptosConfig({ network: Network.TESTNET })
const aptos = new Aptos(aptosConfig)

const ledgerInfo = await aptos.getLedgerInfo()
const modules = await aptos.getAccountModules({ accountAddress: '0x123' })
const tokens = await aptos.getAccountOwnedTokens({ accountAddress: '0x123' })

console.log(ledgerInfo)
console.log(modules)
console.log(tokens)
