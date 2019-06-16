// Aqui vemos como é a estrutura do array, que ele pode ser misturado com vários tipos de dados, mas isso não é recomendado
const valores = [7.7, 8.9, 6.3, 9.2];

// Aqui vemos como acessar os valores de um array passando o seu indice, lembrando ele sempre começa por 0 não por 1
console.log(valores[0], valores[4]);

// Caso não tenha um valor definido ele vai retornar undefined e não erro
console.log(valores[4]);

// Aqui adicionamos um novo indice no array
valores[4] = 10;
console.log(valores);
console.log(valores.length);

// Essa é uma forma que mostro que o array pode ter vários tipos de dados
valores.push({id: 3}, false, null, 'teste');
console.log(valores);

// Aqui é utilizado o metodo pop
console.log(valores.pop());

// Aqui deletamos um elemento do array
delete valores[0];
console.log(valores);

// E aqui vemos que o array é um tipo objeto
console.log(typeof valores);
