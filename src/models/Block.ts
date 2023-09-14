import { SHA256 } from "crypto-js";
import { v4 as uuidv4 } from 'uuid';

//block
export class Block {
    blockHash: string;
    index: string;
    unit = "Special mini Satoshi";
    public timestamp: Date

    constructor(
        public amount: any,
        public previousHash = "",
        public isGenesis: boolean = false,
    ) {
        this.isGenesis = isGenesis;
        this.index = uuidv4();
        this.timestamp = new Date();
        this.amount = amount;
        this.previousHash = previousHash;
        this.blockHash = this.calculateHash();
    }
    calculateHash(): any {
        return SHA256(
            this.index +
            this.previousHash
            + this.timestamp
            + JSON.stringify(this.amount)).toString();
    }

}

