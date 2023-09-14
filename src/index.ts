import express from "express";
import { logger } from "./configs/logger";
import { getBlockChain, healthCheck } from "./route/acctuater";
import { createBlockchain } from "./data/blockchain";




const app = express();
const createdBlockchain = createBlockchain()

//routers
getBlockChain(app, createdBlockchain)
healthCheck(app)


const PORT = 3000;
app.listen(PORT, () => {
    logger.info(`App is listening on port ${PORT}!`);
})



