const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "la base debe ser numero";
    }
    return true;
  }).argv;

console.clear();

const base = argv.b;
const listar = argv.l;

crearArchivo(base, listar)
  .then((nombre) => console.log(nombre, "creado"))
  .catch((err) => console.log(err));
