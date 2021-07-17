// Here we see how the array is structured, that it can be mixed with various data types, but this is not recommended.
const values = [7.7, 8.9, 6.3, 9.2];

// Here we see how to access the values ​​of an array passing its index, remembering it always starts with 0 not 1
console.log(values[0], values[4]);

// If it doesn't have a defined value it will return undefined and no error
console.log(values[4]);

// Here we add a new index in the array.
values[4] = 10;
console.log(values);
console.log(values.length);

// This is one way I show that the array can have multiple data types
values.push({id: 3}, false, null, 'test');
console.log(values);

// Here the pop method is used
console.log(values.pop());

// Here we delete an element from the array
delete values[0];
console.log(values);

// And here we see that the array is an object type.
console.log(typeof values);
