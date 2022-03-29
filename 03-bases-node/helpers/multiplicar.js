const fs = require("fs");

const crearArchivo = async (base = 5, limite = 10) => {
  try {
    let salida = "";

    salida += "==================\n";
    salida += `tabla de ${base}\n`;
    salida += "==================\n";

    for (let i = 1; i <= limite; i++) {
      salida += `${base} * ${i} = ${base * i}\n`;
    }
    console.log(salida);
    fs.writeFileSync(`tabla${base}.txt`, salida);
    return `tabla de ${base}`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
