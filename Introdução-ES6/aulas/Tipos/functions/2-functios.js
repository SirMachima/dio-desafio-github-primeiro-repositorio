// a principal Diferença entre function e arrow function é o contexto de criação ao definir um arrow function e atribuir
//propriedade this.name que tem seu valor 'arrow function' ela não muda e o outro tipo de função ao pedir esse
// retorno ele aponta para o objeto criado perceba que na linha 14 foi dado um novo valor a name; é  justamente 
// isso que a função "normal" retorna como vemos na execução do codigo.
(() =>{
this.name = 'Arrow Function';
const getNameArrowFn = () => this.name;

function getName() {
    return this.name;
}

const user = {
    name: 'Nome Do Objeto Da Execução',
    getNameArrowFn, // forma mais simples de você atribuir propriedades , quando a chave e o valor são o mesmo
    getName
}

console.log(user.getNameArrowFn());
console.log(user.getName());
})();