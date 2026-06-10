import type { Request, Response, NextFunction } from "express";

function avisarAcesso (req: Request, res: Response, next: NextFunction){
    console.log("Nova requisição recebida!");

    next()
};

export {
    avisarAcesso
}