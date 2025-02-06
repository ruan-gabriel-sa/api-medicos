import pool from "../../api-medicos/servico/conexao.js";

async function executaQuery(conexao, query) {
    const resultado_query = await conexao.query(query);
    
    const resposta = resultado_query[0];
    
    return resposta;
}

export async function retornaMedicos() {
    const conexao = await pool.getConnection();
    const query = 'SELECT * FROM medicos'

    const medicos = executaQuery(conexao, query);

    conexao.release();

    return medicos;
}