// and,or,not
// &&,||,!
const enteredEmail = prompt("Please Enter Your Email")
const enteredPassword = prompt("Please Enter Your Password")
const email = "Msoda@gamil.com"
const password = "M.soda123"
if(enteredEmail === correctEmail && enteredPassword === correctPassword ){
    console.log("Welcome You Have Logged In Successfully")
}
else if(enteredEmail === correctEmail && enteredPassword !== correctPassword){
     console.log("You Have Entered Wrong Password")
}
else if(enteredEmail !== correctEmail && enteredPassword === correctPassword){
     console.log("You Have Entered Wrong Email")
}
else{
     console.log("You Have Entered Both The Email And Password Incorrect")
}
const name = "Ali";
const lastName = "Ahmadi";
if(name ==="Ali" && lastName ==="Ahmadwi"){
    console.log("Hi dear Ali Ahmadi");
}
else{
   console.log("We Don't Know You");
}
const name1 = "Nazanin";
const lastName1 = "Hussani";
if(name1 ==="msoda" && lastName1 ==="Hussani"){
    console.log("Hi dear Nazanin Hussani");
}
else if(name1 ==="Rihan" &&lastName ==="Qasomi"){
    console.log("Hi Rihan Qasomi");
}
else if(name1 ==="Nazanin" || lastName ==="Qasomi"){
    console.log("Hi Nazanin Hussani");
}
else{
   console.log("We Don't Know You");
}
