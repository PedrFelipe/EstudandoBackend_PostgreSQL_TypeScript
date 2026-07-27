import * as usuarioService from "../services/usuarioServices"

import type { Request, Response } from "express";

async function listarUsuarios (req: Request ,res: Response) {

    const nome = req.query.nome as string | undefined;

    const usuarios = await usuarioService.listarUsuarios(nome);

    res.status(200).json(usuarios);
    console.log(req.headers.projeto);
}

async function criarUsuarios (req: Request ,res: Response) {

   const nome = req.body.nome;

    if (!nome) {
    return res.status(400).json({
        mensagem: "Nome inválido"
    });
    } 

    const nomeSemEspacos = nome.trim();

    if (!nomeSemEspacos) {
        return res.status(400).json({
            mensagem: "Nome inválido"
        });
    }

        await usuarioService.criarUsuarios(nomeSemEspacos);

        return res.status(201).json({
            mensagem: "Usuário criado"
        });

    


}

async function deletarUsuario (req: Request ,res: Response) {

    const id = Number(req.params.id);

    const apagou = await usuarioService.deletarUsuario(id);

    if (!apagou) {
        return res.status(404).json({
            mensagem: "Usuario não encontrado"
        })
    }

    return res.status(200).json({
        mensagem: "Usuário removido"
    });
}   

async function editarUsuario (req: Request ,res: Response) {

    const id = Number(req.params.id);

    const nome = req.body.nome;

    if (!nome) {
    return res.status(400).json({
        mensagem: "Nome inválido"
    });
    } 

    const nomeSemEspacos = nome.trim();

    if (!nomeSemEspacos) {
        return res.status(400).json({
            mensagem: "Nome inválido"
        });
    }

    const atualizado = await usuarioService.editarUsuario(id, nomeSemEspacos);

    if (!atualizado) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado"
        })
    }

     return res.status(200).json ({
        mensagem: "Usuário atualizado"
    });
}

async function procurarUsuario (req: Request ,res: Response) {

    const id = Number(req.params.id)

    const usuario = await usuarioService.procurarUsuario(id);

    if (!usuario){
        return res.status(404).json ({
            mensagem: "Usuário não encotrado"
        })
    }

    return res.status(200).json(usuario);
    
}

export {
    listarUsuarios,
    criarUsuarios,
    deletarUsuario,
    editarUsuario,
    procurarUsuario
}