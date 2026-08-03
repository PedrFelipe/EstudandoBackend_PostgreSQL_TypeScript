import { UsuarioToken } from "../interfaces/UsuarioToken";

declare global {
    namespace Express {
        interface Request {
            usuario?: UsuarioToken;
        }
    }
}

export {};