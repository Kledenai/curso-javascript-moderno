const school = "Khanelab";

// Here was taken only one letter which is located in 4 characters and below in 5
console.log(school.charAt(4));
console.log(school.charAt(5));

// Here it will generate a third letter char code
console.log(school.charCodeAt(3));

// From the index of we get the 1 character position
console.log(school.indexOf('3'));

// Here we show from the first to the end
console.log(school.substring(1));

// Here is shown from beginning to third
console.log(school.substring(0, 3));

// This is one of the ways you can concatenate in js
console.log('school '.concat(school).concat("!"));

// Using replace with /\w/g he makes all the letters and so getting eeeeeee etc.
console.log(school.replace(/\w/g, 'e'));

// Here it ends up taking it from a specific element using split transforms the text into an Array
console.log('Ana,Maria,Braga'.split(','));
