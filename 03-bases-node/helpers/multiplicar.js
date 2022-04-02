const fs = require("fs");

const crearArchivo = async (base = 5, listar, limite = 10) => {
  try {
    let salida = "";

    salida += "==================\n";
    salida += `tabla de ${base}\n`;
    salida += "==================\n";

    for (let i = 1; i <= limite; i++) {
      salida += `${base} * ${i} = ${base * i}\n`;
    }
    if (listar) {
      console.log(salida);
    }
    fs.writeFileSync(`tablas/tabla${base}.txt`, salida);
    return `tabla de ${base}`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
