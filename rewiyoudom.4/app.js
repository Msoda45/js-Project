const image = document.querySelector("img");
const btn = document.querySelector("button");
btn.addEventListener("click",change);
const list = [
    "./img/1.jpg","./img/2.jpg","./img/3.jpg","./img/4.jpg",
    "./img/5.jpg","./img/6.jpg","./img/7.jpg"
];
image.setAttribute("src",list[0]);
let counter = 0;
function change(){
    if(counter< list.length-1){
        counter++
    }
else{
    counter = 0;
}
image.setAttribute("src",list[counter]

)};