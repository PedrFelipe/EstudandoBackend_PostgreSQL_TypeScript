import * as usuarioService from "../services/usuarioServices"

import type { Request, Response } from "express";

async function listarUsuarios (req: Request ,res: Response) {

    const usuarios = await usuarioService.listarUsuarios();

    res.status(200).json(usuarios);
}

async function criarUsuarios (req: Request ,res: Response) {

    const nome = req.body.nome;

    await usuarioService.criarUsuarios(nome);

    res.status(201).json({
        mensagem: "Usuário criado"
    });

}

async function deletarUsuario (req: Request ,res: Response) {

    const id = Number(req.params.id);

    await usuarioService.deletarUsuario(id);

    res.status(200).json({
        mensagem: "Usuário removido"
    });
}   

async function editarUsuario (req: Request ,res: Response) {

    const id = Number(req.params.id);

    const nome = req.body.nome;

    await usuarioService.editarUsuario(id, nome);

    res.status(201).json ({
        mensagem: "Usuário atualizado"
    });
}

async function procurarUsuario (req: Request ,res: Response) {

    const id = Number(req.params.id)

    const usuario = await usuarioService.procurarUsuario(id);

    if (!usuario) {

        res.status(404).json ({
            mensagem: "Usuário não encotrado"
        })

    }

    res.status(200).json(usuario);

}

export {
    listarUsuarios,
    criarUsuarios,
    deletarUsuario,
    editarUsuario,
    procurarUsuario
}