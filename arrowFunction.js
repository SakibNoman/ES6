const myFunction = (x,y,z=2) => x+y+z; //default value of z is 2

let myVar = myFunction(3,2);

console.log(myVar);

const myFunction2 = () => {
    console.log("Hello Arrow Function!!!");
    console.log("I will vic you!");
}

myFunction2();