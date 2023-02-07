let person = {
  firstname: "Osar",
  lastname: "Almousavi",
  gift: true,
  age: 37,
  højde: undefined,
  hometown: "Hvidovre",
  hobbies: ["bio", {dance:["mave dance","dabka"]}, "Programmering"],
  børn: {
    drenge: {
      Mohammad: {
        højde: 150,
        age: 12,
        hårfarve: "sort",
      },
      Hassan: {
        højde: 175,
        age: 27,
        hårfarve: "sort",
      },
    },
    piger: {
      Fatima: {
        højde: 140,
        age: 11,
        hårfarve: "rød",
      },
      Laila: {
        højde: 128,
        age: 7,
        hårfarve: "Brun",
      },
    },
  },
  
};

console.log(person.firstname);
console.log(person.lastname);

console.log(person["hometown"]);
console.log(person["børn"]);
 console.log(person.børn.drenge.Hassan.hårfarve);
 console.log(person.hobbies[1].dance);
 console.log(person.hobbies[1].dance[0]);
 console.log(person.gift);
 console.log(person.højde);
 
 for(let i=0; i< person.hobbies.length ; i++){
    console.log(person.hobbies[i]);

 }
 person.hobbies[1].dance.forEach( element => {
    console.log(element);
 });

 

