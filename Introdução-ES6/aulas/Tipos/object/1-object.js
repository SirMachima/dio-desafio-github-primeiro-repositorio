let user = {        // aqui se atribui uma propriedade a o objeto USER 
    name: 'Jefferson'
};

//Alterando a propriedade de um objeto
user.name = 'Outro nome1';   // conseguimos acessar o objeto dessa forma 
console.log(user);

user['name'] = 'Outro nome2'; // outra forma de acessar é como se fosse uma estrutura de array 
console.log(user);

const prop = 'Name';         // construindo outra variavel e valoando ela com a propriedade do objeto ja existente
user [prop] = 'Outro nome3'; // Redefinindo o valor da propriedade name do objeto user
console.log(user);


//Criando uma propiedade do objeto user criado anteriormente e agora passa a ter 2 atributos
user.lastname = 'Felipe De Araujo Moraes';
console.log(user);

//Deletando uma propiedade do objeto user
delete user.name;
console.log(user);
