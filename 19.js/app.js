// return
function number(number1 ,number2) {
    const totle = number1+number2;
    return totle;
}
const result1 = number(9,4);


// arrow function
const a = (a,b)=> a*b;
const result2 = a(6,5);



// rested prameter
const sum = (...a)=>{
    let totle = 0;
    for(let i = 0; i <a.length; i++){
        totle = totle +a[i];
    }
    return totle;
}
const result3 = sum(9,7);


// while() 
let i = 1 ;
while(i<=10){
    if(i %2 === 0 ) console.log(i);
    i++;
};



// do while()
let e = 1 ;
do{
    if(e %3 ==0 ) console.log(e);
    e++
}while(e <=30);



// do while()
const password = prompt("Please Enter Your Password");
let haslet = false;
let hasnum = false;
if(password.length<8){
    console.log("the password lenthe is not valid")
}
else{
    let i = 0;
    do{
        if(password[i]>="a" && password[i]<="z" || password[i]>="A" && password[i]<= "Z"){
            haslet = true;
        }
        else if(password[i]>="0" && password[i]<="9"){
            hasnum = true;
        };
        i++
    }while(i < password.length)
        if(haslet && hasnum){
            console.log("the password is valid")
        }
        else{
            console.log("the password is not valid")
        }
}
