import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { UsuarioToken } from "../interfaces/UsuarioToken";

declare global {
    namespace Express {
        interface Request {
            usuario?: UsuarioToken;
        }
    }
}


function autenticar(req: Request, res: Response, next: NextFunction) {
 
    const authorization = req.headers.authorization;

    if (!authorization) {
        return res.status(401).json({
            mensagem: "Token não informado"
        });
    }

    const partes = authorization.split(" ");

    
    if (partes[0] !== "Bearer" || !partes[1]) {
    
        return res.status(401).json({
            mensagem:"Token Inválido"
        });

    }

    const token = partes[1];


    try {
        const dados = jwt.verify(
            token,
             "segredo-do-projeto"
        ) as UsuarioToken;

        req.usuario = dados;

        next();

    } catch (erro) {
        return res.status(401).json({
            mensagem: "Token Inválido ou expirado"
        });
    }
}

export { autenticar };