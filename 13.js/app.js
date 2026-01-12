// truthy and falsy values
const sentense1 = 19;
const sentense2 = 21;
if(sentense1){
    console.log("Salam🫲");
}
else{
    console.log("Khoda Hafiz👋");
}
const sentense3 = "";
if(sentense3){
    console.log("Salam🫲");
}
else{
    console.log("Khoda Hafiz👋");
}
const sentense4 = "j";
if(sentense4){
    console.log("Salam🫲");
}
else{
    console.log("Khoda Hafiz👋");
}
// const sentense5 = prompt("Please Enter Your Name");
// const result5 = sentense5.trim()? "You Have Inserted
//  a Name":"You Have Not Inserted a Name";
// console.log(result5);
const sentense6 = prompt("Please Enter Your Name");
const name = sentense6.trim();
if(name.length>2 && name.length<20){
    console.log("You Entered a True Name");
}
else{
    console.log("You Entered a Fales Name")
}
function add(...a){
   return a.reduce((totle, sam)=>{
        return totle+sam
    },0);
}
add(1,2,3,4,5,6,7,8,9,10);
