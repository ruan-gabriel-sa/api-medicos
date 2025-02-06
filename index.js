import express from 'express';
import cors from 'cors';
import { retornaMedicos } from '../api-medicos/servico/funcoes.js';

const app = express();

app.use(cors());

app.get('/medicos', async (req, res) => {
    const horarios = await retornaMedicos();
    res.json(horarios);
})

app.listen(9000, () => {
    const data = new Date();
    console.log('Servidor iniciado em: '+data);
})