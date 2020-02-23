const grupos = require("../../database/database.json");

function index(req, res) {
  return res.send(
    grupos.map(grupo => {
      return { COD_GRUPO: grupo.COD_GRUPO, DESC: grupo.DESC };
    })
  );
}

module.exports = { index };
