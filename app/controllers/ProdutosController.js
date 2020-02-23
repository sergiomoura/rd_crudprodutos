const grupos = require("../../database/database.json");

function index(req, res) {
  let produtos = [];
  for (const grupo of grupos) {
    produtos = [
      ...produtos,
      grupo.PRODUTOS.map(produto =>
        Object.assign(produto, {
          COD_GRUPO: grupo.COD_GRUPO,
          DESC_GRUPO: grupo.DESC_GRUPO
        })
      )
    ];
  }
  res.send(produtos);
}

module.exports = { index };
