import { Express } from "express";
import { Blockchain } from "../models/Blockchain";

export type voidRouter = (app: Express) => void
//this his is a function that takes in an express app and .
export const healthCheck: voidRouter = (app: Express): void => {
    app.get("/health", (_req, res) => {
        res.json({
            STATUS: "Healthy"
        });
    })
}

export const getBlockChain = (app: Express, createdBlickchain: Blockchain) => {
    app.get("/", (_req, res) => {
        res.json(createdBlickchain);
    })
}