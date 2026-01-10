const sentence1 ="76";
const result1 = Number(sentence1);
const sentence2 = 44.44;
const result2 = parseInt(sentence2);
const sentence3 =22.9;
const result3 = parseFloat(sentence3);
const sentence4 = 56.7;
const result4 =Math.ceil(sentence4);
isNaN(sentence4);
const sentence5 = "";
const result5 = Math.random()*100;
function sum (number1,number2){
    if(isNaN(number1)){
        number1=1
    }
    console.log(number1*number2);
}
sum(2,8);
// game
const userChois =prompt("CHOIS ROCK PAPER OR SCISSORS");
const randomnum= Math.random()*100;
let computerChois ="";
if(randomnum>66){
    computerChois= "SCISSORS"
}
else if(randomnum>33){
    computerChois = "PAPER"
}
else{
    computerChois = "Rock"
}
if((computerChois === "PAPER" &&userChois ==="ROCK")
     ||(computerChois ==="ROCK" && userChois ==="SCISSORS")||
(computerChois === "SCISSORS" &&userChois==="PAPER")){
    alert("COMPUTER WIN👑")
}
else{
    alert("USER WIN👑")
}