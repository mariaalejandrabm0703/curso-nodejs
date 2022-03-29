const obj1 = {
  name: "Maria",
  lastName: "Bohorquez",
  country: "Colombia",
  age: 26,
};

const obj2 = { ...obj1 };
obj2.name = "Valentina";
obj2.age = 16;

// console.log("obj1", obj1);

// console.log("obj2", obj2);

const { name, lastName, age } = obj1;
console.log("name", name);
console.log("lastName", lastName);
console.log("age", age);
