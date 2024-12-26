// Estructura explícita de una arrow function
const getResult_v1 = () => {
  return "Results";
}

// El return está implícito sino añadimos las llaves.
const getResult_v2 = () => "Results";

console.log(getResultV1());
console.log(getResultV2());


// Sin arrows functions
resultV1 = [1, 2, 3].map(function (n) {
  return n * 2;
});

// Con arrows functions
resultV2 = [1, 2, 3].map((n) => n * 2); 

console.log(resultV1); //> [2, 4, 6]
console.log(resultV2); //> [2, 4, 6]


// Ejemplo de uso de this con la arrow function
const counterV1 = {
  number: 0,
  increase() {
    setInterval(() => console.log(++this.number), 1000);
  },
};
counterV1.increase(); //> 1 2 3 4 5

// Ejemplo de uso de this sin la arrow function
const counterV2 = {
  number: 0,
  increase() {
    setInterval(function () {
      console.log(++this.number);
    }, 1000);
  },
};
counterV2.increase(); //> NaN, NaN, NaN, NaN, NaN

// Ejemplo de uso de this sin la arrow function y bind
const counterV3 = {
  number: 0,
  increase() {
    setInterval(
      function () {
        console.log(++this.number);
      }.bind(this),
      1000
    );
  },
};

counterV3.increase(); //> 1 2 3 4 5
