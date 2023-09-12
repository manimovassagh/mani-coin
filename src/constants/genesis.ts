import { SHA256 } from "crypto-js"

const GENESIS_AMOUNT = 1_000_000
export const hashedGenesisAmount = SHA256(JSON.stringify(GENESIS_AMOUNT).toString())