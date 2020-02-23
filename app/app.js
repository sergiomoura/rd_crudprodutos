const express = require("express");
const app = express();

// Incluindo Roteadores
const GruposRoutes = require("./routes/GruposRoutes");
const ProdutosRoutes = require("./routes/ProdutosRoutes");
// Usando rotas
app.use("/grupos", GruposRoutes);
app.use("/produtos", ProdutosRoutes);

// Levantando o servidor
app.listen(3000);
