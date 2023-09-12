import { SHA256 } from "crypto-js";
import { IamAmount } from "./Types";

 export class Block {
    hash: any;
    constructor(public index: number,
        public timestamp: Date,
        public data: IamAmount,
        public previousHash="") {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
    calculateHash(): any {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
    



}

