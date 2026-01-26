// function declration
// hosting
name(" hamida" , " yawari");
function name(a,b) {
    console.log("Hello dear" + a + b)
}
// name(" hamida" , " yawari");

// defult argument
function sam(number1 ,number2  = 8) {
       console.log(number1+number2)
}
sam(5);


// function expration
const math = function(number3,number4){
    console.log(number3 *number4)
}
// hosting not work
math(5 ,9);


// arrow function and defult argument
const gam =(number5,number6 = 90)=>{
    console.log(number5 +number6)
}
// hosting not work
gam(330);