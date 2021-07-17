const weight1 = 1.1;
const weight2 = Number('2.0');

console.log(weight1, weight2);
console.log(Number.isInteger(weight1));
console.log(Number.isInteger(weight2));

const assessment1 = 9.871;
const assessment2 = 6.871;

const total = assessment1 * weight1 + assessment2 * weight2;
const average =  total / (weight1 + weight2);

// Here we limit the display of all decimal places to just 2 thus leaving x.xx
console.log(average.toFixed(2));

// We see that when declaring a console.log again now using toString the toFixed has no effect and by adding the number 2 we convert the string to binary
console.log(average.toString(2));

console.log(typeof average);
