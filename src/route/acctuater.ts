import { Express } from "express";

export type voidRouter = (app: Express) => void

export const healthCheck: voidRouter = (app: Express) => {
    app.get("/health", (_req, res) => {
        res.json({
            STATUS: "Healthy"
        });
    })
}