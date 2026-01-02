const enterNumber = prompt("Dear Student Please Enter Your Score");

if ( enterNumber>= 90 && enterNumber<= 100){
    console.log ("Great!You are In GroupA")
} 
else if(enterNumber>= 80){
    console.log("You are In Group B")
}
else if(enterNumber>= 70){
    console.log("You are In Group C")
}
else if(enterNumber>=60){
    console.log(" You are In Group D")
}
else{
    console.log("Unfortunately, You Failed😔")
}