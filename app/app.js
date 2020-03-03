const express = require("express");
const app = express();

// Autorizando cors pra geral
app.use(cors())

//
app.use(express.json());

// Incluindo Roteadores
const GruposRoutes = require("./routes/GruposRoutes");
const ProdutosRoutes = require("./routes/ProdutosRoutes");
// Usando rotas
app.use("/grupos", GruposRoutes);
app.use("/produtos", ProdutosRoutes);

// Definindo a porta
const PORT = Number(process.env.PORT) || 3000;

// Levantando o servidor
app.listen(PORT);
