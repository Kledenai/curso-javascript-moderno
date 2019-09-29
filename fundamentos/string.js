const escola = "Khanelab";

// Aqui foi pego apenas uma letra ao qual se localiza no 4 caracter e abaixo no 5
console.log(escola.charAt(4));
console.log(escola.charAt(5));

// Aqui ele vai gerar um char code da terceira letra
console.log(escola.charCodeAt(3));

// Apartir da do index of pegamos a posição de 1 caracter
console.log(escola.indexOf('3'));

// Aqui mostramos a partir do primeiro até o final
console.log(escola.substring(1));

// Aqui é mostrado do começo ao terceiro
console.log(escola.substring(0, 3));

// Essa é uma das maneiras de poder concatenar no js
console.log('escola '.concat(escola).concat("!"));

// Utilizando o replace com o /\w/g ele tornar todas as letras e assim ficando eeeeeee etc.
console.log(escola.replace(/\w/g, 'e'));

// Aqui ele acaba pegando apartir de um elemento especifico usando o split transforma o texto em um Array
console.log('Ana,Maria,Braga'.split(','));
