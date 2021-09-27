function soma (a){          //declarando a função soma onde a função soma retorna uma função b
    return function(b){     //e depois retorna a soma das funções; 
        return a + b;       // é a mesma coisa que eu escrever uma unica função com 2 parametros.
                            // só que desta forma que foi escrito eu consigo fixar um dos parametros.
                            // modificando só o segundo
    }
}

const soma2 = soma(2);   // aqui passsei a função para dentro de uma variavel chamada soma2
                        // onde nela declaro o parametro da função soma, o parametro que eu quero
                        // deixar fixo e coloquei 2 como parametro fixo ao fazer isso.
                    
console.log(soma2(2));  //aqui mostro na tela retorno da variavel soma2 que me retorna 2 e entre aspas
console.log(soma2(3));  // o paramentro da função que esta dentro da função a, fazendo com o que o que
console.log(soma2(4));  // houver dentro dos parenteses sobreponha o (b), e retorne os valores somados.
console.log(soma2(5));