const names = ["João", "Samira", "Carlos", "Ana", "Beatriz", 10];

const Samira = names [1];

names.push(Samira);

console.log(names);

names.unshift("Beatriz");

console.log(names);

names.pop();
names.pop();

console.log(names);

console.log(names.indexOf("Carlos"));

const sortedNames = names.sort();

console.log(sortedNames);
