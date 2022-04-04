const argv = require("./config/yargs");
const { crearArchivo } = require("./helpers/multiplicar");

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombre) => console.log(nombre, "creado"))
  .catch((err) => console.log(err));
