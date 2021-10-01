function fn(){
    return 'code here';
}

// O Arrow Function tem seu retorno implicito então não precisaria ter um return da linha 10 a não ser que dentro
//  da arrow function tivesse mais comandos de blocos por exemplo 'if', 'for' ou declaração de variavel
// aí seria nescessario o return ou seja se for chamar só uma expressão nao precisa de return ou abrir o bloco;
const arrowFn = () => 'Code here'; // Aqui é a mesma coisa que está sendo executado na linha 1  
const arrowFn2 = () => {            
    // Mais de uma expressão
    return 'Code here';
}

// Funções tambem são objetos
fn.prop = 'Posso criar propriedades' ;

console.log(fn());  // chamando a função da linha 1 
console.log (fn.prop); // Chamando a propriedade criada na linha 15 da função da linha 1 não é muito comum
//fazer esse tipo de pratica. 

// Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// Receber e retornar funções
const controlFnExec => fnParam => allowed => {
    if(allowed){
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); // Executa a função fn
handleFnExecution();    // Não executará a função fn

/* controlFnExec como função
function controlFnExec(fnParam){            // isso aqui é o mesmo comando da linha 28 a 30
    return function(allowed){
        if(allowed){
            fnParam();
        }
    }
}