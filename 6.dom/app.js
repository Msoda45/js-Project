const form = document.getElementById("form");
const btn = document.getElementById("btn");
const abtn = document.getElementById("abtn");
const bookCon = document.querySelector("div#bookCon");
const booklist = [];
abtn.addEventListener("click", (event)=>{
    event.preventDefault();

    const bookName = document.getElementById("name").value;
   const bookImage = document.getElementById("image").value;
    const bookDes = document.getElementById("des").value;
    const bookInfo = {
        name: bookName,
        image: bookImage,
        des: bookDes,
    };
    booklist.push(bookInfo);

      form.classList.remove("flex");
        form.classList.add("hidden");
        bookCon.innerHTML = "";

        booklist.forEach((book, index) =>{
               const div = document.createElement("div");
div.classList.add(
    "w-11/12","mx-auto","my-4","grid","p-4","border",
"rounded-md","border-green-200","shadow-lg","shadow-green-300","bg-white","grid-cols-2",
);


const h1 = document.createElement("h1");
h1.textContent = book.name;
h1.classList.add("text-3xl","font-bold","text-center",
);
const p = document.createElement("p");
p.textContent = book.des;
p.classList.add("text-base","text-justify");
const textCon = document.createElement("div");
const deBtn = document.createElement("button");
deBtn.textContent = "Delete";
deBtn.classList.add("py-2");
deBtn.classList.add("px-4");
deBtn.classList.add("bg-red-300");
deBtn.classList.add("text-white");
textCon.appendChild(h1 , p , deBtn);
deBtn.addEventListener("click",()=>{
    booklist.splice(index,1);
        bookCon.innerHTML = "";

        booklist.forEach((book, index) =>{
               const div = document.createElement("div");
div.classList.add(
    "w-11/12","mx-auto","my-4","grid","p-4","border",
"rounded-md","border-green-200","shadow-lg","shadow-green-300","bg-white","grid-cols-2",
);


const h1 = document.createElement("h1");
h1.textContent = book.name;
h1.classList.add("text-3xl","font-bold","text-center",
);
const p = document.createElement("p");
p.textContent = book.des;
p.classList.add("text-base","text-justify");
const textCon = document.createElement("div");
const deBtn = document.createElement("button");
deBtn.textContent = "Delete";
deBtn.classList.add("py-2");
deBtn.classList.add("px-4");
deBtn.classList.add("bg-red-300");
deBtn.classList.add("text-white");
textCon.appendChild(h1 , p , deBtn);
deBtn.addEventListener("click",()=>{
    booklist.splice(index,1);
});
const img=document.createElement("img");
img.src = book.image;
img.style.height = "250px";
img.style.width = "100%";
img.style.borderRadius = "12px";
div.append(textCon , img);
bookCon.appendChild(div);
});
});
const img=document.createElement("img");
img.src = book.image;
img.style.height = "250px";
img.style.width = "100%";
img.style.borderRadius = "12px";
div.append(textCon , img);
bookCon.appendChild(div);
});
});

btn.addEventListener("click", ()=>{
    if(form.classList.contains("hidden")){
        form.classList.remove("hidden");
        form.classList.add("flex");
    }
    else{
        form.classList.remove("flex");
        form.classList.add("hidden");
    }
});

