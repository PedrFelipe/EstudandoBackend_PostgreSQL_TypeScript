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

async function editarUsuario (
    id: number,
    nome: string,
    email: string,
    idade: number) {

    const resultado = await pool.query(
            "UPDATE usuarios SET nome = $1, email = $2, idade = $3 WHERE id = $4;",
            [nome, email, idade, id]
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

async function atualizarUsuario(id: number, dados: any) {

    let sql = "UPDATE usuarios SET "
    
    const campos = [];
    const valores = [];
 
    if (dados.nome){
        campos.push(`nome = $${valores.length + 1}`);
        valores.push(dados.nome);
    }

    if (dados.email) {
        campos.push(`email = $${valores.length + 1}`);
        valores.push(dados.email);
    }

    if (dados.idade) {
        campos.push(`idade = $${valores.length + 1}`);
        valores.push(dados.idade);
    }

    sql += campos.join(", ");

    valores.push(id);

    sql += ` WHERE id = $${valores.length}`;

    const resultado = await pool.query(sql, valores);

    return resultado.rowCount

}

export {
    listarUsuarios,
    criarUsuarios,
    deletarUsuario,
    editarUsuario,
    procurarUsuario,
    atualizarUsuario
}