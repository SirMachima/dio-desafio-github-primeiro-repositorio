/**Entre o "LET" e o "CONST" usados para declarar função são iguais nesse ponto.
 * 
 * 
 * 
*/

(() =>{                     //Arrow function
    const test = 'Valor da função';
    console.log('Valor da função: ' + test);

    if(true){                                       
        const test = 'Valor if';
        console.log('Valor dentro de if: ' + test);
    }
    
    console.log('Valor após a execução do if: ' + test);
})();