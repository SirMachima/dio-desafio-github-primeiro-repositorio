/**     Imutabilidade, linguagens funcionais os dados que a gente vai criando nunca mudam ou seja se você precisar
 *      se você precisar mudar o valor de uma variavel você vai ter que criar outra por exemplo, assim como
 *  */ 

const user = {                                              // aqui estamos criando um objeto onde nele temos               
    name: 'Jefferson',                                      // 2 atributos  chamados name e last name
    lastname:  'Felipe De Araujo Moraes'
};

function getUserWithFullName(user) {                // os trez pontos antes do o objeto user quer dizer
    return {                                        // que para cada propriedade do objeto user ele vai
        ...user,                                    // colocar dentro do objeto user 
        fullname: '${user.name} ${user.lastname}'   // o comando abaixo é a mesma coisa que colocar 
                                                    // fullname = name+ " " +lastname      

    }
}

const userwhithfullname = getUserWithFullName(user);    // Aqui criou-se uma variavel que recebeu uma  retorno 
                                                        // da função implementada acima
console.log(userwhithfullname);