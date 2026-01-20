// سوال اول
for(let number = 1; i<=10 && i>=1; i++){
    console.log(i);
};


// سوال دوم
for(let number1 = 2 ; number1 <= 20; number1+=2){
    console.log(number1);
};

// سوال دوم
for(let number2 = 1;number2<=20;number2++){
    if(number2%2 ===0) {
        console.log(number2);
    }
}

// سوال سوم
let totle = 0;
for(let i = 1;i<=100;i++) {
    totle = totle+i;
}
console.log(totle);

// سوال چهارم
const number3 = 7;
for(let i = 1;i<=10;i++) {
 console.log( i+"* 7 =" + i * 7 )
}


// سوال پنجم
for(let number4 = 20; number4 >=1; number4--){
    console.log(number4)
};


// سوال ششم
for(let number5 = 1; number5 <=50; number5++){
    if(number5% 5 ===0){
        console.log(number5)
    }
};



// سوال هفتم
const zarb = (...a) =>{
let = totle = 1;
    for(let i = 0 ; i <8; i ++){
        totle = totle * a [i]
    }
    console.log(totle)
}
zarb(1,2,3,4,5,6,7,8)


// سوال هفتم
let number6 = 1;
for(let j = 1; j<=8;j++){
    number6 *=  j;
}
console.log(number6)


// سوال هشتم
let star = "";
for(let a = 1; a <=6; a++) {
    console.log("*".repeat(ass))
};



// سوال هفتم
for (let e = 1; e <= 6 ;e++){
    for(let f=0; f < e; f++){
        console.log("*");
    }
    console.log("")
}



// سوال نهم
for(let o = 6; o >=1; o--) {
    console.log("*".repeat(o))
};


// سوال دهم
const number7 = 13;
let isprim = true;
if(number7 <=1) {
    isprim = false;
}
else{
    for(let r = 2 ; r < Math.sqrt(number7); r++){
        if(number7%r ===0){
            isprim = false;
            break;
        }
    }
}
if(isprim){
    console.log("The Number Is Prime");
}
else{
    console.log("The Number Is Not Prime");
};



// سوال یازدهم
let o = 9;
for(let p=5; p<=90; p++){
    if(o%9 ===0){
        console.log("عدد پوره قابل تقصیم بروی 9 است")
    }
    else{
        console.log("عدد بروی 9 پوره قابل تقسیم نیست")
    }
}