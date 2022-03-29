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

const getEmpleado = async (id) => {
  const empleado = empleados.find((e) => e.id === id)?.nombre;

  return empleado ? empleado : "";
};

const getSalario = async (id) => {
  const salario = salarios.find((salario) => salario.id === id)?.salario;
  return salario ? salario : "";
};

const getInfo = async () => {
  const id = 3;

  const nombre = await getEmpleado(id);
  const salario = await getSalario(id);
  return nombre
    ? `el empleado ${nombre} tiene un salario de ${salario}`
    : `No existe empleado con id ${id} y no existe el salario`;
};

getInfo()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
