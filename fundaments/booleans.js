let isActive = false;
console.log(isActive);

isActive = true;
console.log(isActive);

// This is a denial that can be used in js !! would be no no and! would not if you use! true would be not true so becoming not true
isActive = 1;
console.log(!!isActive);

// These are the types that can be true.
console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isActive = true));

// These are the types that can be false
console.log('the false');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isActive = false));

// If it finds a true type it will come back tru and we separate using ||
console.log('to finish...');
console.log(!!('' || null || 0 || 'hey' || 123));

// if it is not valid it will use another value that we will pass using ||
let nome = 'Lucas';
console.log(nome || 'Unknown');
