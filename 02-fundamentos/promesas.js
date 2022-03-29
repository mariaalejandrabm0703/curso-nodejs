const empleados = [
  {
    id: 1,
    nombre: "Fernando",
  },
  {
    id: 2,
    nombre: "Linda",
  },
  {
    id: 3,
    nombre: "Karen",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 3,
    salario: 1500,
  },
];

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;

    empleado ? resolve(empleado) : reject(`No existe empleado con id ${id}`);
  });
};

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((salario) => salario.id === id)?.salario;
    salario ? resolve(salario) : reject("Error no existe el salario");
  });
};

const id = 3;

getEmpleado(id)
  .then((empleado) => console.log("result ", empleado))
  .catch((err) => console.log("error ", err));

getSalario(id)
  .then((empleado) => console.log("salario ", empleado))
  .catch((err) => console.log("error ", err));

let nombre;

getEmpleado(id)
  .then((empleado) => {
    nombre = empleado;
    return getSalario(id);
  })
  .then((salario) =>
    console.log("El empleado:", nombre, "tiene un salario de:", salario)
  )
  .catch((err) => console.log(err));
