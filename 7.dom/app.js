const adBtn = document.getElementById("adBtn");
const con = document.getElementById("con");
const error = document.getElementById("error");
const sevebtn = document.getElementById("sevebtn"); 
const todocontiner1 = document.getElementById("todocon");

const todoList = [];
let masseg = "";
adBtn.addEventListener("click",()=>{
   if(con.classList.contains("hidden")){
    con.classList.remove("hidden");
    con.classList.add("flex");
   }
   else{
    con.classList.remove("flex");
    con.classList.add("hidden");
   }
});


sevebtn.addEventListener("click",(event)=>{
   event.preventDefault();
     sevebtn1();

     todoList.map(todo=>{
      showTodo(todo);
      con.classList.remove("flex")
     con.classList.add("hidden")
     
     })
  
     if(masseg.length>0){
const h1 = document.createElement("h1");
   h1.textContent = masseg;
   h1.classList.add("w-full");
   h1.classList.add("h-fit");
   h1.classList.add("text-red-600");
   h1.classList.add("flex")
   error.appendChild(h1);
}
});

// function
function sevebtn1(){
   if(!error.classList.contains("hidden")){
   error.classList.add("hidden");
   }
   error.innerHTML = "";
    let todo = document.getElementById("todo").value;
   let order = document.getElementById("order").value;
    if(todo !==""){
   const sevetodo = {
      myTodo: todo,
      importance: order,
      completed: false
   }
   todoList.push(sevetodo);
   masseg = "";
   }
   else{
      error.classList.remove("hidden")
      masseg = "لطفا یک چیزی بنویسید و دوباره تلاش نمایید!!!";
   };
};
function showTodo(todo){
const div1  = document.createElement("div");
todocontiner1.appendChild(div1);
div1.classList.add("aldivs")
// div1.addEventListener("click",()=>{

// })
const h1 = document.createElement("h1");
h1.textContent = todo.myTodo;
h1.classList.add("h1")
const circle = document.createElement("div");
div1.append(circle , h1);
if(todo.importance === "importent"){
   circle.classList.add("im");
}
else if(todo.importance === "optional"){
   circle.classList.add("optional");
}
else{
   circle.classList.add("normal");
}
}
