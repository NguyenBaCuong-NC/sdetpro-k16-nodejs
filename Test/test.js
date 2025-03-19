
const animals = [
    { name: "Dog", age: 3 },
    { name: "Cat", age: 2 },
    { name: "Elephant", age: 10 }
  ];
  
  console.log(`Animals: ${animals.map(animal => `${animal.name} (${animal.age} years old)`).join(", ")}`);

