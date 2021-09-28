/** A imutabilidade é algo que todo dev vai ver constantemente na sua jornada de trabalho
 * e vendo este exemplo vemos que o array de students não foi alterado porem colocammos 
 * uma função que filtra por notas  maiores ou igual a 7 e  retornou somente os alunos 
 * que foram aprovados sem alterar o array bem util para nao ter os side effects
 * ou seja alteração indesejada nos nossos atributos.
 */

const students = [                      // array de alunos com 2 atributos     
{
    name: 'Grace',                       //nomes
    grade: 3                            // notas
},
{
    name:'Jennifer',
    grade: 4
},
{
    name: 'Paul' ,
    grade: 10
}
];

function getApprovedStudents(studentslist){                    // foi criada uma função que recebe essa lista de alunos   
    return studentslist.filter (student => student.grade >=7); // e nessa linha vai retornar só os aprovados.
}

console.log('Alunos aprovados: ');              
console.log(getApprovedStudents(students));     // ao dar o console.log nessa função vai retornar só os alunos aprovados

console.log('\nLista de alunos: ');             // a barra invertida para pular uma linha
console.log(students);