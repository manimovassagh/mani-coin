import express from "express";
import { Block } from "./models/Block";
import { Blockchain } from "./models/Blockchain";
import { logger } from "./utilities/logger";




const app = express();
logger.info("Blockchain is starting up");
const someChain = new Blockchain();
logger.info("Blockchain is started");

someChain.addBlock(new Block(new Date(), 10));
someChain.addBlock(new Block(new Date(), 20));
someChain.isChainValid()



app.get("/", (_req, res) => {
    res.json(someChain);
})

const PORT = 3000;
app.listen(PORT, () => { 
    logger.info(`App is listening on port ${PORT}!` );
})



