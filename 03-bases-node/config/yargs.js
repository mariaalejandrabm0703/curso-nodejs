const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar.",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Permite mostrar la tabla en consola.",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Permite poner limite a multiplicar.",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "la base debe ser numero";
    }
    return true;
  }).argv;

module.exports = argv;
