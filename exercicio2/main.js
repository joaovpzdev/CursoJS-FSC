const person = {
    firstName: "John",
    lastName: "Doe",
    age: "23",
    hobbies: ["Reading", "Traveling", "Cooking", "Climbing"],
};

//const firstName = person.firstName;
//const lastName = person.lastName;
//const age = person.age;
//const hobbies = person.hobbies;

const { firstName, lastName, age, hobbies } = person; 
//Destructuring assignment

const read = person.hobbies[3];
//const read faz a leitura ir para um lugar x e person.hobbies identifica o array hobbies e o [3] identifica a posição do item que queremos ler, no caso o item Climbing.

console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
console.log(`Age: ${age}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(read);