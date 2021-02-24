import 'reflect-metadata';
import express from 'express';
import "./database";
import { router } from './routes';


const app = express();

app.use(express.json());

app.use(router);

app.listen(3333, () => console.log("Server is UP!"));

/**
 * GET => Buscar
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração específica
 *
 * 1 param => Rota
 * 2 param => request, response
 */