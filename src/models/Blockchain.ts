import { logger } from "../configs/logger";
import { hashedGenesisAmount } from "../constants/genesis";
import { Block } from "./Block";



export class Blockchain {
    chain: Block[];
    constructor() {
        this.chain = [this.createGenesisBlock()]
    }


    private createGenesisBlock(): Block {
        return new Block(new Date(), `Special Genesis amount is ${hashedGenesisAmount}`,
            "Genesis secret starter", true)
    }

    private getLastBlock(): Block {
        return this.chain[this.chain.length - 1];
    }
    public addBlock(newBlock: Block): void {
        newBlock.previousHash = this.getLastBlock().blockHash;
        newBlock.blockHash = newBlock.calculateHash();
        this.chain.push(newBlock);

    }

    public isChainValid(): boolean {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.blockHash !== currentBlock.calculateHash()) {
                logger.debug("Blockchain is not valid");
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.blockHash) {
                logger.debug("Blockchain is manipulated and is not acceptable");
                return false;
            }
        }
        logger.info("Blockchain is valid");
        return true;

    }

}