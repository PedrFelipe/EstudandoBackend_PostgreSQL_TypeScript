import * as usuarioService from "../services/usuarioServices"

import type { Request, Response } from "express";

async function listarUsuarios (req: Request ,res: Response) {

    const usuarios = await usuarioService.listarUsuarios();

    res.json(usuarios);
}

async function criarUsuarios (req: Request ,res: Response) {

    const nome = req.body.nome;

    await usuarioService.criarUsuarios(nome);

    res.json({
        mensagem: "Usuário criado"
    });

}

async function deletarUsuario (req: Request ,res: Response) {

    const id = Number(req.params.id);

    await usuarioService.deletarUsuario(id);

    res.json({
        mensagem: "Usuário removido"
    });
}   

async function editarUsuario (req: Request ,res: Response) {

    const id = Number(req.params.id);

    const nome = req.body.nome;

    await usuarioService.editarUsuario(id, nome);

    res.json ({
        mensagem: "Usuário atualizado"
    });
}

async function procurarUsuario (req: Request ,res: Response) {

    const id = Number(req.params.id)

    const usuario = await usuarioService.procurarUsuario(id);

    res.json(usuario);

}

export {
    listarUsuarios,
    criarUsuarios,
    deletarUsuario,
    editarUsuario,
    procurarUsuario
}