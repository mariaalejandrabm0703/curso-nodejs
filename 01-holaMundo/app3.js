console.log("Inicio");

setTimeout(() => {
  console.log("Primero");
}, 3000);

setTimeout(() => {
  console.log("Segundo");
}, 0);

setTimeout(() => {
  console.log("Tercero");
}, 0);

console.log("Fin");
