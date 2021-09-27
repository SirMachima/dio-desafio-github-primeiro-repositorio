/**     A grande diferença entre o Hoisting de função e o hoisting de variaveis é que 
 *      mesmo que uma funçao seja definida depois da chamada dela ela executa é como se
 *      o Hoisting puxasse pra cima a declaração antes de chama-la. geralmente em projetos
 *      tem algumas praticas a serem feitas para evitar esse tipo de situação pois nao é 
 *      saudavel chamar uma função antes de cria-la.
 */
function fn(){
    log("Holsting de função");

    function log(value){
        console.log(value);
    }
}
fn();

/**
function fn(){
    function log(value){
        console.log(value);     //Sequencia de passos no qual o hoisting faz para função
    }
    
    log("Holsting de função");
}
 fn(); 
*/