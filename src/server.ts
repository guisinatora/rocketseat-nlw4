import express from 'express';

const app = express();

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

app.get("/", (request, response) => {
  
  return response.json({message: "Hello World - GET"})
});

app.post("/", (request, response) =>{

  return response.json({message: "Hello World - POST"})
})

app.listen(3333, () => console.log("Server up!"));