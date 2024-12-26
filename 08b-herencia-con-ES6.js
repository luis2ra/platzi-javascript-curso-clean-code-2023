//> Herencia de clases con ES6
// Clase padre
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello I am ${this.name}`;
  }
}

// Clase hija
class Developer extends Person {
  constructor(name) {
    super(name);
  }

  writeCode(coffee) {
    coffee
      ? console.log("I am developing new feature")
      : console.log("I need coffeeee");
  }
}

const dev = new Developer("Alex");
dev.greet(); //> Hello I am Alex
dev.writeCode(); //> I need coffeeee
