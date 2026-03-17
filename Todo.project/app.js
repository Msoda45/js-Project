const parent = document.querySelector("#parent");
const coninputs = document.getElementById("coninputs");
const btn = document.getElementById("btn")
const savebtn = document.getElementById("savebtn");
const todoList = [];
btn.addEventListener("click",()=>{
   if(!coninputs.classList.contains("toggle")){
         coninputs.classList.add("toggle")
         btn.textContent = "Hide Form"
   }
   else{
    coninputs.classList.remove("toggle")
    btn.textContent = "Add Form"
   }
});
savebtn.addEventListener("click",(e)=>{
   e.preventDefault();
         parent.innerHTML = ""
   storetodo();
   showtodo();
});
function storetodo(){
const todo = document.getElementById("todo").value;
const importance = document.getElementById("importance").value;
todoList.push({
      todo,
      importance,
      completed: false,
});
document.getElementById("todo").value = "";
document.getElementById("importance").value = "";
if(coninputs.classList.contains("toggle")){
      coninputs.classList.remove("toggle");
       btn.textContent = "Add Form";
}
}
function showtodo(){
const sorted = todoList.sort((a,b)=>a.completed-b.completed);    
for(let todo of sorted){
const div = document.createElement("div");
div.addEventListener("click",()=>{
    todo.completed = !todo.completed;
    parent.innerHTML = "";
    showtodo();
})
div.classList.add("box");
const h1 = document.createElement("h1");
h1.textContent = todo.todo;
const smalbox = document.createElement("div");
smalbox.classList.add("smallbox");
if(todo.importance === "important"){
      smalbox.classList.add("red");
}
else if(todo.importance === "optional"){
      smalbox.classList.add("yellow")
}
else{
    smalbox.classList.add("green")
}
if(todo.completed){
      h1.style.textDecoration = "line-through";
}
div.append(h1,smalbox);
parent.append(div);
}
}