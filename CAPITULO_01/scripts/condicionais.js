// if
var num = 1;
if(num === 1){//se true
    console.log('num is equal to 1');
}

//if...else
var num = 0;
if(num === 1){
    console.log('num is iqual to 1');
}else{
    console.log('num is not equal to 1, the value of num is '+num)
}

//if...else (operador ternário)
if( num === 1){
    num--;
}else{
    num++;
}

// pode ser escrito assim:
(num === 10) ? num-- : num++;

//vários if...else
var month = 5;
if(month === 1){
    console.log('January');
}else if(month === 2){
    console.log('February');
}else if(month === 3){
    console.log('March');
}else{
    console.log('Month is not January, February or March');
}

//switch
month = 2;
switch(month){
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break
    case 3:
        console.log('March');
        break;
    default:
        console.log('Month is not January, February or March')
}