/*  hoisting significa levantar , puxar pra cima ou içar. em muitas linguagens esse
    COMANDO1 iria retornar um reference error mas no JS tem o conceito hoisting caso
    vc chame a variavel antes de  declara-la ele nao vai der reference error ele dara
    undefined pois ele identifica que a variavel existe mais nao definada ainda e no
    COMANDO2 ele executa o que se pede pois a variavel ja foi declarada             */
function fn(){
    
    console.log(text);      //  <- comando 1
    
    var text = "exemplo";   //  <- variavel sendo declarada.   

    console.log(text);      //  <- comando 2
}
fn();                       //  <- chamando a função
/*
function fn(){
    var text;
    console.log(text);

    text = "exemplo";           //Sequencia de passos no qual o hoisting faz para variaveis
    
    console.log(text);   
}
fn();
*/ 