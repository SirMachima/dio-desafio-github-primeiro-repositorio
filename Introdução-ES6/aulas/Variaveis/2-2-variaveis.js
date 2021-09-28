/** A variavel criada por "let" ela respeita o escopo de bloco diferente da "var"
 *  no exeplo a seguir vemos que é criada dentro de um arrow function uma variavel
 *  test criada por "teste" e atribuimos um "VALOR DA FUNÇÃO" a ela demos um  
 *  console.log e ja temos o seu resultado ao entra no if demos outro valor a variavel
 *  "teste" e colocamos um console.log para ver-mos qual a saída e por respeitar o 
 *  escopo de bloco a saída é o valor que mudamos dentro a variavel "teste" nesse caso
 *  o "VALOR IF" note que quando o escopo de bloco do if acaba e entra dentro do escopo
 *  da função o valor da variavel teste voltar a ser o primeiro que inserimos o "VALOR 
 *  DA FUNÇÃO" 
 */

(() =>{                     //Arrow function
    let test = 'Valor da função';
    console.log('Valor da função: ' + test);

    if(true){                                       
        let test = 'Valor if';
        console.log('Valor dentro de if: ' + test);
    }
    
    console.log('Valor após a execução do if: ' + test);
})();