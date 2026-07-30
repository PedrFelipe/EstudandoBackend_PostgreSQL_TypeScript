import * as authService from "../services/authServices";

import type {Request, Response } from "express";

async function login (req: Request, res: Response) {

    const email = req.body.email;
    const senha = req.body.senha;

    if (!email || !senha) {
        return res.status(400).json({
            mensagem:"Email e senha são obrigatórios"
        });
    }

    const usuario = await authService.login(email, senha);

    if (!usuario) {
        return res.status(401).json({
            mensagem: "Email ou Senha Incorreto"
        });
    }

    return res.status(200).json({
        mensagem: "Logado"
    })
}
export { login };