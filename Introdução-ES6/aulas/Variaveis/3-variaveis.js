/** O "CONST" como o propio nome sugere foi feito para criar constantes mais
 * tem algumas particularidades. 
 */

 // Ao criar um const de um tipo primitivo, não se pode alterar o seu valor
const name ='Jefferson';   

//nao podemos alterar o valor
//name= 'Maluquinho';

//Mas se for um objeto podemos trocar suas propiedades
const user = {
    name: 'Jefferson'
};

// Alterando o atributo do objeto
user.name = 'Outro Nome';  

// Não podemos fazer o objeto "APONTAR" para outro lugar
//user ={
//  name: 'Jefferson'
//};

const persons= ['Jefferson' ,'Pedro','Jennifer']

//podemos adicionar novos itens 
// foi adicionado "Lua" e o Array ficou [Jefferson, Pedro, Jennifer, Lua]
persons.push('Lua')

//podemos remover algum item
// Com esse comando removemos o primeiro intem da lista de array no caso o "Jefferson"
// o array ficou [Pedro,Jennifer,Lua]
persons.shift()


//podemos alterar diretamente
//Aqui mudamos o segundo index do array de Jennifer para Joao e o array ficou,
// [Pedro, Joao, Lua]
persons[1] ='João';


console.log('\nArray após as alterações: ' +persons);
