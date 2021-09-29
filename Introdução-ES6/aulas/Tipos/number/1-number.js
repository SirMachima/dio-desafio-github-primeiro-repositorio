//APESAR DE ALGUMAS LINGUAGENS TEREM O INT E O FLOAT COMO TIPOS PRIMITIVOS DESTINTOS
// NO JAVASCRIPT SÓ HÁ O TIPO NUMBER QUE UTILIZA TANTO INT COMO FLOAT

const myNumber = 12.4032;

// Transformar o número para string
const numberAsString =myNumber.toString()
console.log('Número transformado em string: ' ,typeof numberAsString);

// Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);   //declara o numero de casas decimais quem pretende dentro dos parenteses.
console.log('\nNúmero com duas casas decimais:' , fixedTwoDecimals);

//Trasforma uma string em float |   Se tiver a possibilidade de vir numeros decimais.
console.log('\nString parseada para float: ' ,parsefloat('13.22'));
// Se a ultima casa decimal do float acabar em zero ele nao aparece quando o numero é declarado 2.20 por exemplo
// é mostrado 2.2

//Tranforma uma string em int
console.log('\nString parseada para int: ' ,parseInt('13.20')); // Se você nao precisar de casas decimais