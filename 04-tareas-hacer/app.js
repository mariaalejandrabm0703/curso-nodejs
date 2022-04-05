require("colors");
const { mostrarMenu, pausa } = require("./helpers/mensajes");

const main = async () => {
  let opt = "";
  do {
    // Imprimir el menú
    opt = await mostrarMenu();

    switch (opt) {
      case "1": // Crear tarea
        console.log("1", 2);
        break;

      case "2": //Listar tareas
        console.log("2", 2);
        break;

      case "3": // listar completadas
        console.log("3", 3);
        break;

      case "4": // listar pendientes
        console.log("4", 4);
        break;

      case "5": // completado | pendiente
        console.log("5", 5);
        break;

      case "6": // Borrar
        console.log("6", 6);
        break;
    }

    await pausa();
  } while (opt !== "0");
};

main();
