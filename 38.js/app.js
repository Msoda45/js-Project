const showFormBtn = document.getElementById("showFormBtn")
const container = document.getElementById("container");
const parent = document.getElementById("todo-container");
const Todolist = [];
const saveBtn = document.querySelector("button#saveBtn");
saveBtn.addEventListener("click", ()=>{
const todo = document.getElementById("todo").value;
const time = document.getElementById("time").value;
const newTodo = {
  name:todo,
  completed:false,
  time:time
}
Todolist.push("newTodo")
document.getElementById("todo").value = "";
document.getElementById("time").value = "";
for(let todo of Todolist){
  const box = document.createElement("div")
  box.classList.add("todo-box");
  const h1ForName = document.createElement("h1")
  h1ForName.textContent = todo-name
  const child = document.createElement("div")
  child.classList.add("child")
  const time = document.createElement("span")
  time.textContent = todo.time
  const circle = document.createElement("div")
  child.append("time,circle")
  box.append(h1ForName,child)
  parent.append("box")
}
})
    showFormBtn.addEventListener("click", ()=>{
      if(container.classList.contains("hideForm")){
        container.classList.remove("hideForm");
        container.classList.add("showForm");
        showFormBtn.textContent = "Hide Form"
      }
      else{
        container.classList.remove("showForm")
        container.classList.add("hideForm")
        showFormBtn.textContent ="show Form"
      }
});
