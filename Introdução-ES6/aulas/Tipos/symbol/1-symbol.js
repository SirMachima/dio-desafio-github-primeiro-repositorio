 const symbol1 = symbol();
 const symbol2 = symbol();

 // Symbols são unicos 
 console.log('Symbol1 e igual a symbol2' , symbol == symbol2);

 // Previnir conflito entre nomes de propriedades
 const nameSymbol1 = symbol ('Nome');
 const nameSymbol2 = symbol ('Nome');

 const user = {
     [nameSymbol1]: 'Jefferson',
     [nameSymbol2]: 'Outro nome',
     lastName: 'Felipe De Araujo Moraes'
 }

 console.log(user);

 // Symbols criam propriedades que nao são enumberables
 for( const key in user){
     if(user.hasOwnProperty(key)){
         console.log('\nValor da chave' + key + user[key]);   
        }
 }

 console.log('Propriedades do objeto user:' ,object.keys(user));
 console.log('Valores das propriedades do objeto user' , object.values(user));

 // exibir symbols de um objeto
 console.log('Symnbols registrados no objeto user' ,Object.getOwnPropertySymbols(user));

 // Acessando todas as propriedades do objeto
 console.log ('Todas propriedades do objeto user:', Reflect.ownKeys(user));

 // Criar um enum
 const direction ={
     UP : symbol('UP'),
     DOWN : symbol('DOWN'),
     LEFT : symbol('LEFT'),
     RIGHT :symbol('RIGHT')
 };