// tipo                ---             resultado
// Boolean             ---     true (verdadeiro) e false (falso)
// Number              ---     só é false para +0, -0 ou NaN; o resto é true
// String              ---     se for vazia é false
// Object              ---     sempre true
// null                ---     false
// undefined           ---     false

function testeTruthy(valor){
    return valor ? console.log('truthy') : console.log('falsy');
} 

testeTruthy(true);
testeTruthy(false);
testeTruthy(new Boolean(false));
testeTruthy('');
testeTruthy('Michel');
testeTruthy(new String(''));
testeTruthy(1);
testeTruthy(-1);
testeTruthy(NaN);
testeTruthy(new Number(NaN));
testeTruthy({});
var obj = {name:'michel'}
testeTruthy(obj);
testeTruthy(obj.name);
testeTruthy(obj.age);