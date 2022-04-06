//uso do var
var framework = 'bootstrap'; //atribui 'bootstrap' a variável framework
var framework = 'Ionic'; //sobrescreve 'Ionic' na variável já criada

//uso do let
let language = 'JavaScript';
let language = 'Python'; //lança um erro (variável language já foi declarada)

//uso do const
const PI = 3.141593;
PI = 3.0; //lança um erro (PI agora é somente pra leitura)

const jsFramework = {
    name: 'React'
}

//não lança erro
jsFramework.name = 'Angular'  

//lança erro
jsFramework = {
    name: 'Vue'
}