const grupos = require("../../database/database.json");

function index(req, res) {
  let produtos = [];
  for (const grupo of grupos) {
    produtos = [
      ...produtos,
      ...grupo.PRODUTOS.map(produto =>
        Object.assign(produto, {
          COD_GRUPO: grupo.COD_GRUPO,
          DESC_GRUPO: grupo.DESC_GRUPO
        })
      )
    ];
  }
  res.send(produtos);
}

function store(req, res) {
  // Capturando o produto do body
  let produto = req.body;

  // Recuperando o cod do grupo
  let cod_grupo = produto.COD_GRUPO;

  // removendo o cod_grupo do produto
  delete produto.COD_GRUPO;

  // recuperando o grupo da vez
  let grupo = grupos.find(g => g.COD_GRUPO == cod_grupo);

  // adicionando produto ao grupo
  grupo.PRODUTOS.push(produto);

  // retornando resposta para o visitante
  return res.send({ msg: "ok", error: 0 });
}

function update(req, res) {
  // Capturando o codigo do produto
  let codigo = req.params.codigo;

  // Capturando os dados do produto no body
  let produto = req.body;

  // Achando o grupo que deve conter o produto
  let grupoNovo = grupos.find(g => g.COD_GRUPO == produto.COD_GRUPO);

  // Verificando se o novo grupo de produtos existe
  if (!grupoNovo) {
    return res
      .status(404)
      .send({ msg: "Grupo de produtos não encontrado", error: 1 });
  }

  // Encontrando qual o grupo que o contém atualmente
  let posProduto = null;
  let grupo = grupos.find(g => {
    posProduto = g.PRODUTOS.findIndex(p => p.COD_PRODUTO == codigo);
    return posProduto > -1;
  });

  // Verificando se algum grupo realmente contém um
  // produto com esse codigo
  if (!grupo) {
    return res.status(404).send({ msg: "Produto não encontrado", error: 1 });
  }

  // Removendo o produto do grupo
  grupo.PRODUTOS.splice(posProduto, 1);

  // removendo campo de codigo de grupo do produto
  delete produto.COD_GRUPO;

  // adicionando produto ao grupo novo
  grupoNovo.PRODUTOS.push(produto);

  // retornando resposta para o visitante
  return res.send({ msg: "ok", error: 0 });
}

module.exports = { index, store, update };
