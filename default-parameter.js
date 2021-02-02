
//this is a function with two parameter
function defaultPara(x,y=0){ //setting y=0 is the default value of y
    return x+y;
}

let para = defaultPara(5,7);
console.log(para);

let para2 = defaultPara(5); // y will be set 0 by default
console.log(para2);