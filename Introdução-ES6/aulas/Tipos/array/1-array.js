// Arrays tambem são objetos permite que nos criemos varias outras estruturas de dados
// tipos primitivos , outros arrays ou até mesmo objetos.
const users = ['Jefferson' , 'Guilherme', 'Chay'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')   
};

const persons = [
    {
        name:'Jefferson',
        age: 28,
        gender: gender.MAN
    },
    {
        name:'Guilherme',
        age: 43,
        gender: gender.MAN
    },
    {
        name:'Chay',
        age: 29,
        gender: gender.WOMAN
    }
];

// Retorna a quantidade de intens de um array
console.log('Quantidade de items', persons.length);

// Verificar se é array
console.log('A variavel persons é um array' , Array.isArray(persons)); // Retorna um booleano informando se 
// se é um array

// Iterar os itens do array
persons.forEach((person, index, arr) =>{
    console.log('Nome: ' + person.name +" "+ 'index: ' + index, arr)
})

// filtrar array
const mens = persons.filter(person.gender ===gender.MAN);
console,log('\nNova lista apenas com Homens: ',mens);

// retornar um novo
const personWithCourse = person.map (person =>{
    person.course = 'Introdução ao JavaScript';
    return person;
});

console,log('\nPessoas com a adição do course', personWithCourse);

// Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) =>{
    age += person.age;
    return age;
}, 0);

console.log('Soma de idade das pessoas' ,totalAge);

// Juntando Operações
const totalEvenAges = persons       
                            .filter(person => person.age % 2 === 0)
                            .reduce((age, person) => {
                                age += person.age;
                                return age;
                            }, 0);

console.log('\nSoma de idades das pessoas que possuem idade par' ,totalEvenAges);