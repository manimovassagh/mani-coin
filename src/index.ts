import express from "express";
import { logger } from "./configs/logger";
import { Block } from "./models/Block";
import { Blockchain } from "./models/Blockchain";
import {  healthCheck } from "./route/acctuater";




const app = express();
logger.info("Blockchain is starting up");
const createdBlockchain = new Blockchain();
logger.info("Blockchain is started");

createdBlockchain.addBlock(new Block(10));
createdBlockchain.addBlock(new Block(20));
createdBlockchain.isChainValid()


app.get("/", (_req, res) => {
    res.json(createdBlockchain);
})

healthCheck(app)


const PORT = 3000;
app.listen(PORT, () => {
    logger.info(`App is listening on port ${PORT}!`);
})



