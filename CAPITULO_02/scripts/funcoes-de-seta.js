function circleArea(r){
    var PI=3.14;
    var area = PI * r * r;
    return area;
};

var area1 = circleArea(2);
console.log(area1)

//função de seta ou arrow function
const setaCircleArea = (r) => {
    var PI=3.14;
    var area = PI * r * r;
    return area;
}

var area2 = setaCircleArea(2);
console.log(area2)