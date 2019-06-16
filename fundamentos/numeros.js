const peso1 = 1.1;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media =  total / (peso1 + peso2);

// Aqui limitamos a exibição de todas as casa decimais para apenas 2 assim ficando x.xx
console.log(media.toFixed(2));

// Vemos que ao declarar novamente um console.log agora utilizando o toString o toFixed não surte efeito e adicionando o numero 2 convertemos a string para binário
console.log(media.toString(2));

console.log(typeof media);
