const express = require("express");
const cors = require("cors")
const app = express();
const path = require("path");

// Autorizando cors pra geral
app.use(cors())

//
app.use(express.json());

// Incluindo Roteadores
const GruposRoutes = require("./routes/GruposRoutes");
const ProdutosRoutes = require("./routes/ProdutosRoutes");

// Definindo uma rota raíz
app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, "./index.html"));
});

// Usando rotas
app.use("/grupos", GruposRoutes);
app.use("/produtos", ProdutosRoutes);

// Definindo a porta
const PORT = Number(process.env.PORT) || 3000;

// Levantando o servidor
app.listen(PORT);
