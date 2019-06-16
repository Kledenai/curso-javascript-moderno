
// Não é mais aconselhado usar var pois ela pode deixar a sua aplicação lenta, pois ela faz esse dado ser armazenado na ram do computador
var a = 3;

// Let é uma forma mais moderna de poder declarar uma variavel porém ele é utilizado para dados mutaveis
let b = 4;

// Const é o que normalmente mais usamos, porém use const caso o dado seja não mutavel
const c = 5;

// Note que usando var (não aconselho que use) você pode meio que utilizar duas vezes ela mudando o valor
var a = 30;

console.log(a, b, c);

// Esse é um modo de declarar um valor a uma variavel assim que ela já foi criado
a = 300;
b = 400;

console.log(a, b);
