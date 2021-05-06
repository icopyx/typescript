interface Human {
   name: string,
   age: number,
   gender: string
}

const person = {
   name: "hiro",
   age: 33,
   gender: "male"
};

const sayHi = (person: Human): string => {
   return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(person));

export {};