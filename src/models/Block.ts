import { SHA256 } from "crypto-js";
import { v4 as uuidv4 } from 'uuid';

export class Block {
    hash: string;
    index: string;
    unit="Special mini Satoshi";
    constructor(
        public timestamp: Date,
        public amount: any,
        public previousHash = "") {
        this.index = uuidv4();
        this.timestamp = timestamp;
        this.amount = amount;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
    calculateHash(): any {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.amount)).toString();
    }




}

