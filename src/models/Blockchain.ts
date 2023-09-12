import { SHA256 } from "crypto-js";
import { Block } from "./Block";
import { hashedGenesisAmount } from "../constants/genesis";
const logger = require('pino')()


export class Blockchain {
    chain: Block[];
    constructor() {
        this.chain = [this.createGenesisBlock()]
    }


    createGenesisBlock(): Block {
        return new Block(new Date(), `Special Genesis amount is ${hashedGenesisAmount}`,
         "Genesis secret starter", true)
    }

    getLastBlock(): Block {
        return this.chain[this.chain.length - 1];
    }
    addBlock(newBlock: Block): void {
        newBlock.previousHash = this.getLastBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);

    }

    isChainValid(): boolean {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                logger.info("Blockchain is not valid");
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                logger.info("Blockchain is manipulated and is not acceptable");
                return false;
            }
        }
        logger.info("Blockchain is valid");
        return true;

    }


}