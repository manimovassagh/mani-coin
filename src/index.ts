import { Block } from "./models/Block";
import { Blockchain } from "./models/Blockchain";

console.log("Start");

const mani = new Blockchain();

mani.addBlock(new Block(1, new Date(), { amount: 10 }));
mani.addBlock(new Block(2, new Date(), { amount: 20 }));


