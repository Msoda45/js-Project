// سوال اول
function dobul(number){
    return number ** 2;
}
const result = dobul(6);



// سوال دوم
const sum = (number1,number2)=>{
    if(number1 === number2){
        console.log("عدد با هم مساوی است")
    }
    else if(number1> number2){
        console.log("عدد اولی بزرگتر است")
    }
    else{
        console.log("عدد دومی بزرگتر است")
    }
}
sum(4,9);





// سوال سوم
function ahwalPorsi(name , lastName){
    console.log(`Hi Dear, ${name} ${lastName}`)
}
ahwalPorsi("Msoda" , "Yawari");



// سوال چهارم
const oddEven =(number3)=>{
    if(number3 % 2 === 0 )console.log("The Number Is Even");
    else console.log("The Number Is Odd")
};
oddEven(9);



// سوال پنجم
const degreee = (degre)=>{
    console.log((degre *9/5) +32 +" Faranhit");
}
degreee(-12);




// سوال ششم
function factorial(number4){
    let totle = 1;
    for(let i = 1; i <= number4; i++){
        totle *= i;
    }
    console.log(totle);
}
factorial(9);




//سوال هفتم
const barAx = (text)=>{
    let natija = "";
    for(let o = text.length -1; o>=0;o--){
        natija = natija + text[o];
    }
    return natija;
};
const result1 = barAx("MSODA");