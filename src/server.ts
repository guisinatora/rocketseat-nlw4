import { app } from "./app";

app.listen(3333, () => console.log("Server is UP!"));

/**
 * GET => Buscar
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração específica
 *
 * 1 parametro => Rota
 * 2 parametro => request, response
 */