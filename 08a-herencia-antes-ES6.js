//> Herencia prototipal
// Clase padre
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return "Hello I am " + this.name;
};

// Herencia ES5
function Developer(name) {
  this.name = name;
}

Developer.prototype = Object.create(Person.prototype);

Developer.prototype.writeCode = function (coffee) {
  if (coffee) {
    console.log("I am developing new feature");
  } else {
    console.log("I need coffeeee");
  }
};

var dev = new Developer("Alex");
dev.greet(); //> Hello I am Alex
dev.writeCode(); //> I need coffeeee
