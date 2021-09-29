// Retorna o tamanho de uma string
const testsize = 'Texto'.length;
console.log('Quantidade de letras:' + testsize);

// Retorna um array quebrando a string por um delimitador
const splittedtext = 'Texto'.split('x');    // Aqui ele quebra o valor no X retornando um array splittedText[0] = TE [1] =to
console.log('\nArray com as posições separadas pelo delimitador: ' + splittedtext);

// Busca por um valor e substitui por outro
const  replacedText = 'Texto'.replace('Text' ,'Txet'); // substituiu o valor da string por outro passado por parametro
console.log('\nSubstituição de valor: ' + replacedText);

// Retorna a "fatia" de um valor
const lastchar = 'texto'.slice(-1);             // retornou a ultima letra
console.log('\nultima letra de uma string: ' + lastchar);

const allWithoutlastchar ='Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a útima:', allWithoutlastchar); // cortando a utima letra

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última:', secondToEnd); // aqui a string ignora o index zero no caso
                                                                            // o "T"
// Retorna N caracters a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);            // começando no index zero e querendo 2 valores. index[0] e [1]
console.log('\nAs duas primeiras letras são:', twoCharsBeforeFirstPos)