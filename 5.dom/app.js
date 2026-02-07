const alldivs = document.querySelectorAll("div");
const firstdiv = alldivs[0];
const newdiv = document.createElement("div");
newdiv.classList.add("boxNew");
firstdiv.firstElementChild.after(newdiv);
alldivs.forEach((div,index)=>{
     if(index===1 || index===2){
        div.remove();
     }
})