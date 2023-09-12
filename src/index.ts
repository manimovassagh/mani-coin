import express from "express";
import { Block } from "./models/Block";
import { Blockchain } from "./models/Blockchain";
const logger = require('pino')()

const app = express();
logger.info("Blockchain is starting up");
const someChain = new Blockchain();

someChain.addBlock(new Block(new Date(), 10));
someChain.addBlock(new Block(new Date(), 20));
someChain.isChainValid()

const responseDTO: Block[] = []
someChain.chain.forEach((block, index) => {
    if (index > 0) {
        responseDTO.push(block)
    }

})

app.get("/", (_req, res) => {
    res.json(responseDTO);
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}!`);

})



