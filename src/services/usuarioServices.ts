const pool = require("../config/database");

async function listarUsuarios(nome?: string) {
    if (nome) {
        const resultado = await pool.query(
        "SELECT * FROM usuarios WHERE nome = $1 ORDER BY id ASC;",
        [nome]
    );
    return resultado.rows;
    
} else {
    
    const resultado = await pool.query(
        "SELECT * FROM usuarios ORDER BY id ASC;"
    );
    return resultado.rows;
}

};


async function criarUsuarios(nome: string) {
    const resultado = await pool.query(
        "INSERT INTO usuarios (nome) VALUES ($1);",
        [nome]
    );

};

async function deletarUsuario(id: number) {

    const resultado = await pool.query(
        "DELETE FROM usuarios WHERE id = $1;",
        [id]
    );
    return resultado.rowCount;
};

async function editarUsuario (id: number, nome: string) {

    const resultado = await pool.query(
            "UPDATE usuarios SET nome = $1 WHERE id = $2;",
            [nome, id]
    );
    return resultado.rowCount;
};

async function procurarUsuario(id: number) {

const resultado = await pool.query(
    "SELECT * FROM usuarios WHERE id = $1",
    [id]
);
return resultado.rows[0] ?? null;

};

export {
    listarUsuarios,
    criarUsuarios,
    deletarUsuario,
    editarUsuario,
    procurarUsuario
}