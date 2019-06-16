const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';

// Essa é a criação de uma template string, como pode ver no console.log ele entende até o espaço depois da quebra de Linha
const template = `
  Olá
  ${nome}!
`;

console.log(concatenacao, template);

// Expressões
console.log(`1 + 1 = ${1 + 1}`);


const up = texto => texto.toUpperCase();

console.log(`Eii... ${up('Cuidado')}!`);
