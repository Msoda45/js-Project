const number = (number1,number2,number3)=>{
    return number1*number2*number3;
}
const natija =number(4,9,8,6);
const sum = (a,b)=> a+b;
const result = sum(4,9);
console.log(result);

function ahwalPorsi(name,lastName="yawari"){
    console.log(`Hi Dear ${name} ${lastName}`);
}
ahwalPorsi("Msoda");
const divide =(a,b=9)=>{
    console.log(a/b);
}
 divide(30);
 const gam=(...a)=>{
    let totle =0;
    for(let i=0; i<a.length; i++){
       totle = totle+ a[i];
    }
    console.log(totle)
 }
gam(5,90);