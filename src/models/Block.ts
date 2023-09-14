import { SHA256 } from "crypto-js";
import { v4 as uuidv4 } from 'uuid';

//block 
export class Block {
    blockHash: string;
    index: string;
    isGenesis: boolean;
    unit = "Special mini Satoshi";


    constructor(
        public timestamp: Date,
        public amount: any,
        public previousHash = "",
        isGenesis: boolean = false,
    ) {
        this.isGenesis = isGenesis;
        this.index = uuidv4();
        this.timestamp = timestamp;
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

