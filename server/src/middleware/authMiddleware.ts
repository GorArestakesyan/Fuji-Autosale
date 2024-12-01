import { NextFunction, Request, Response } from "express";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    const { createdBy } = req.body;
    if (createdBy !== "admin") {
        return res.status(403).json({ error: "Unauthorized action" });
    }
    next();
};
