const btn = document.querySelector("#btn");
const div = document.querySelector(".con");
const box = document.querySelector(".box");
const h1 = document.querySelector(".h1");
const i = document.querySelector("i");
btn.addEventListener("click",()=>{
    i.classList.toggle("a");
    h1.classList.toggle("b")
});
