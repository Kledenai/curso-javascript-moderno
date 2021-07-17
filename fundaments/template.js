const name = 'Rebecka';
const concatenation = 'Olá ' + name + '!';

// This is the creation of a template string, as you can see in console.log it even understands the space after the line break
const template = `
  Olá
  ${name}!
`;

console.log(concatenation, template);

// Expressions
console.log(`1 + 1 = ${1 + 1}`);


const up = text => text.toUpperCase();

console.log(`Hey... ${up('Caution')}!`);
