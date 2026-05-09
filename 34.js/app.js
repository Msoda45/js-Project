const box = document.getElementById("box");
const btn = document.querySelector("button");
const button2 = document.getElementById("#btn2")
btn.addEventListener("mouseleave", ()=>{
    box.className = "box differnt-class"
} )
btn.addEventListener("mouseenter", ()=>{
    box.className = "box"
});
button2.addEventListener("Click", ()=>{
    box.classList.add("b");
})