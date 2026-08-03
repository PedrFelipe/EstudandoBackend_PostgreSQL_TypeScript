import type { Response, Request, NextFunction } from "express";

function somenteAdmin(req: Request, res: Response, next: NextFunction) {

    if (req.usuario?.role !== "admin") {
        return res.status(403).json ({
            mensagem: "Sem permissão"
        });
    }

    next ();
}

export { somenteAdmin };