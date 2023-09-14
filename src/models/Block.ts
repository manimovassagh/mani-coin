import { SHA256 } from "crypto-js";
import { v4 as uuid } from 'uuid';
import { UNIT_CURRENCY } from "../constants/genesis";

//block
export class Block {
    public blockHash: string;
    public index: string;
    public unit: string;
    public timestamp: Date

    constructor(
        public amount: number | string,
        public previousHash = "",
        public isGenesis: boolean = false,
    ) {
        this.isGenesis = isGenesis;
        this.index = uuid();
        this.timestamp = new Date();
        this.amount = amount;
        this.previousHash = previousHash;
        this.blockHash = this.calculateHash();
        this.unit = UNIT_CURRENCY
    }
    calculateHash(): any {
        return SHA256(
            this.index +
            this.previousHash
            + this.timestamp
            + String(this.amount)).toString();
    }

}

