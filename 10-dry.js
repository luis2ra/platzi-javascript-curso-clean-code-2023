// Código que se repite

const juanAverage = (90 + 50 + 70) / 3;
const sofiaAverage = (80 + 90 + 70 + 80) / 4;
const anaAverage = (60 + 90 + 70 + 100 + 95) / 5;

console.log(juanAverage);
console.log(sofiaAverage);
console.log(anaAverage);

// Sin repetir código
function average(grades) {
  return grades.reduce((prev, current) => prev + current, 0) / grades.length;
}

const juanAverageNew = average([90, 50, 70]);
const sofiaAverageNew = average([80, 90, 70, 80]);
const anaAverageNew = average([60, 90, 70, 100, 95]);

console.log(juanAverageNew);
console.log(sofiaAverageNew);
console.log(anaAverageNew);
