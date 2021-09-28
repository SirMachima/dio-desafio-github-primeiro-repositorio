/** Aqui vemos a variavel declarada por var não aceita escopo de bloco
 *  e ao declarar uma arrow function damos um console.log e vemos
 *  que a variavel test declarada dentro do if não sobe  como nós vimos  
 * no conceito de hoistying isso se dar porque a var só aceita escopo global  
 *  ou de função, como tem um escopo de bloco e ela está sendo declarada dentro
 * ela nao respeita/Não aceita.
 */

var test = 'example';

(() =>{                     //Arrow function
    console.log('Valor dentro da função: ' + test);

    if(true){
        var test = 'example';
        console.log('Valor dentro de if: ' + test);
    }
    
    console.log('Valor após a execução do if: ' + test);
})();