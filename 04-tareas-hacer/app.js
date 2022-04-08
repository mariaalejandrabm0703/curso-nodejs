require("colors");
const {
  inquirerMenu,
  pausa,
  leerInput,
  mostrarListadoChecklist,
  listadoTareasBorrar,
  confirmar,
} = require("./helpers/inquirer");
const Tareas = require("./model/tareas");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  const tareasDB = leerDB();

  if (tareasDB) {
    tareas.cargarTareasFromArray(tareasDB);
  }
  do {
    // Imprimir el menú
    opt = await inquirerMenu();
    switch (opt) {
      case "1": // Crear tarea
        const tarea = await leerInput("Descripción: ");
        tareas.crearTarea(tarea);
        break;

      case "2": //Listar tareas
        tareas.listadoCompleto();
        break;

      case "3": // listar completadas
        tareas.listarPendientesCompletadas(true);
        break;

      case "4": // listar pendientes
        tareas.listarPendientesCompletadas(false);
        break;

      case "5": // completado | pendiente
        const ids = await mostrarListadoChecklist(tareas.listadoArr);
        tareas.toggleCompletadas(ids);
        break;

      case "6": // Borrar
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== "0") {
          const ok = await confirmar("¿Está seguro?");
          if (ok) {
            tareas.borrarTarea(id);
          }
        }
        break;
    }
    guardarDB(tareas.listadoArr);
    await pausa();
  } while (opt !== "0");
};

main();
