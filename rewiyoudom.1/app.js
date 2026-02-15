const btn = document.getElementById("btn");
const text = document.getElementById("h1");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const h11 = document.getElementById("h11");
function message(){
text.textContent = "Hi There Good aftarnon";
}
btn.addEventListener("click",message);
let number = 0;
function incermant(){
    h11.textContent = number;
    number++
}
function decremant(){
    h11.textContent = number;
    number--;
}
btn1.addEventListener("click",incermant);
btn2.addEventListener("click",decremant);