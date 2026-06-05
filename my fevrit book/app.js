const btnshowform = document.getElementById("showform");
const form = document.querySelector("div#form");
const bookcantainer = document.querySelector("div#bookcantainer");


let booklist = [];
btnshowform.addEventListener("click", () => {
    if (form.classList.contains("hideform")) {
        form.classList.remove("hideform");
        form.classList.add("showform")
    }
    else {
        form.classList.remove("showform");
        form.classList.add("hideform")
    }

})

const savebutton = document.getElementById("savebtn");
savebutton.addEventListener("click", () => {
    savebook();
    bookcantainer.innerHTML = ""
    showbooks();


});




function savebook() {
    const book$name = document.getElementById("bookname").value
    const bookinfo = {
        name: book$name,
        completed: false
    }
    booklist.push(bookinfo)
    document.getElementById("bookname").value = ""

}
// یک فنکشن برای نمایش کتاب های ذخیره شده
function showbooks() {
    const sortedlist = booklist.sort((a, b) => a.completed - b.completed)
    for (let book of sortedlist) {
        const bookBox = document.createElement("div");
        bookBox.className = "bookbox";
        bookBox.addEventListener("click", () => {
            book.completed = !book.completed
            bookcantainer.innerHTML = "";
            showbooks();
        })
        const bookname = document.createElement("h1");
        bookname.innerHTML = book.name



        const i = document.createElement("i");
        i.className = "fas fa-trash"
        i.addEventListener("click",()=>{
        booklist = booklist.filter((b)=> b.name !== book.name)
        bookcantainer.innerHTML = "";
        showbooks();
        })
      bookBox.append(bookname,i)
      if(book.completed){
        bookname.style.textDecoration = "underline";
        bookname.style.color = "purple";
      }
      bookcantainer.appendChild(bookBox);
    }
}
