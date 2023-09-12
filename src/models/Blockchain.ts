import { Block } from "./Block";

export class Blockchain {
    chain:  Block[];
    constructor() {
        this.chain = [this.createGenesisBlock()]
    }


    createGenesisBlock(): Block {
        return new Block(0, new Date(),{amount: "Gensis Amount"}, "Genesis secret starter")
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