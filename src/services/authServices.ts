const pool = require("../config/database");

async function login(email: string, senha: string){

    const resultado = await pool.query(
        "SELECT * FROM usuarios WHERE email = $1;",
        [email]
    );


    const usuario = resultado.rows[0] ?? null;

    if (!usuario) {
        return null;
    }

    if (senha !== usuario.senha){
        return null;
    }

    return usuario;
}

export { login };