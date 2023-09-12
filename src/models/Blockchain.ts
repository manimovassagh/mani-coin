import { SHA256 } from "crypto-js";
import { Block } from "./Block";

const GENESIS_AMOUNT = 1_000_000
const hashedGensisiAmount = SHA256(JSON.stringify(GENESIS_AMOUNT).toString())

export class Blockchain {
    chain: Block[];
    constructor() {
        this.chain = [this.createGenesisBlock()]
    }


    createGenesisBlock(): Block {
        return new Block(new Date(), `Special Genesis amount is ${hashedGensisiAmount}`, "Genesis secret starter")
    }

    getLastBlock(): Block {
        return this.chain[this.chain.length - 1];
    }
    addBlock(newBlock: Block): void {
        newBlock.previousHash = this.getLastBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);

    }


}