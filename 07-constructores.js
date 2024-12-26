// Antes de ES6
function Person(name) {
  this.name = name;
}
var person = new Person("Alex");
console.log(person.name); //> Alex


// Con ES6
class Cat {
  constructor(name) {
    this.name = name;
  }
}
const cat = new Cat("Oliver");
console.log(cat.name); //> Oliver
