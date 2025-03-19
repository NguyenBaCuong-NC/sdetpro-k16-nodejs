const employees = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "bob", age: 28 },
  { name: "Charlie", age: 35 }
];


let unsortedPosition = employees.length - 1;

while (unsortedPosition > 0) {
  for (let index = 0; index < unsortedPosition; index++) {
    const leftValue = employees[index].name;
    const rightValue = employees[index + 1].name;
    if (leftValue > rightValue) {
      let temp = employees[index];
      employees[index] = employees[index + 1];
      employees[index + 1] = temp;
    }
  }
  unsortedPosition--;
}



console.log(employees);