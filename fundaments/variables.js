
// It is no longer advisable to use var as it can slow your application down as it causes this data to be stored in your computer's ram.
var a = 3;

// Let is a more modern way of being able to declare a variable but it is used for mutable data
let b = 4;

// Const is what we normally use the most, but use const if the data is non-mutable
const c = 5;

// Note that using var (I don't advise you to use it) you can kind of use it twice by changing the value
// deepcode ignore RedeclarationVars: <please specify a reason of ignoring this>
var a = 30;

console.log(a, b, c);

// This is a way to declare a value to a variable once it has already been created.
a = 300;
b = 400;

console.log(a, b);
