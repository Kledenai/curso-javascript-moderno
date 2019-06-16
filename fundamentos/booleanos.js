let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

// Essa é uma negação que pode ser usada no js !! seria não não e ! seria não se você usar !true seria não true então se tornando não verdadeiro
isAtivo = 1;
console.log(!!isAtivo);

// Esses são os tipos que podem ser verdadeiros
console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

// Esses são os tipos que podem ser falsos
console.log('os falsos');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

// Caso ele ache um tipo verdadeiro ele vai voltar tru e separamos usando ||
console.log('pra finalizar...');
console.log(!!('' || null || 0 || 'epa' || 123));

// caso não seja valido ele irá usar outro valor que vamos passar usando ||
let nome = 'Lucas';
console.log(nome || 'Desconhecido');
