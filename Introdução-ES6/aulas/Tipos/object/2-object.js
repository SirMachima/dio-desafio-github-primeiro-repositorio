const user = {
    name: 'Jefferson',
    lastName: 'Felipe De Araujo Moraes'
};

//Recupera as chaves do objeto
console.log('Propiedade do objeto user:' , object.keys(user));

// Recupera os valores da chave do objeto
console.log('\nValores das Propiedade do objeto user:', object.values(user));

//Retorna um array de arrays contendo [nome_prop, valor_prop ]
console.log('\nLista de propriedades e valores:' , object.entries(user));

//Margear propriedades de objetos
object.assign(user,{fullName: 'Jefferson Felipe De Araujo Moraes'});

console.log('\nAdiciona a propiedade fullName no objeto user:' , user);
console.log('\nRetorna um novo objeto margeando dois ou mais objeto user:' , Object.assign({},user,{age:28}));

//Previne todas as alterações em um objeto
const newObj = {foo:'bar'};
Object.freeze(newObj); // com essa chamada nao podemos alterar, remover ou criar uma nova propriedade do objeto newObj

newObj.foo = 'changes';
delete newObj.foo;          // Se a chamada do freeze for feita nenhuma dessas chamadas podem ser concretas
newObj.bar = 'foo';

console.log('\nVariavel newObj após as alterações:' , newObj);

// Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Jefferson'};
Object.seal(person); // com a chamada do person nao se pode criar nem remover uma propriedade de um objeto mais ele permite alteração

person.name = 'Jefferson Felipe';  
delete person.name;
person.age = 28 ;

console.log('\nVariável person após as alterações:' , person);