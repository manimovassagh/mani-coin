import { Block } from "./models/Block";
import { Blockchain } from "./models/Blockchain";


const someChain = new Blockchain();

someChain.addBlock(new Block( new Date(), 10 ));
someChain.addBlock(new Block( new Date(), 20 ));

console.log(someChain);



