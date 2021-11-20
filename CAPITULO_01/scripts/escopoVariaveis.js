//As variáveis podem ser LOCAIS ou GLOBAIS

var MyVariable = 'global';
var myOtherVariable = 'global';

function myFunction(){
    var MyVariable = 'local'; //criamos uma variável local
    return MyVariable;
}

function myOtherFunction(){
    myOtherVariable = 'local'; //refenciamos a variável global e mudamos para local
    return myOtherVariable;
}

//imprimindo as globais
console.log(MyVariable);
console.log(myOtherVariable);

//agora as locais
console.log(myFunction())
console.log(myOtherFunction())

//myOtherVariable alterada pela myOtherFunction
console.log(myOtherVariable)