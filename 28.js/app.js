const numbers = [1,2,3,4,5,6,7,8,9,10];
function getNum(num){
    return num%2 ===0 ;
}
const result1 = numbers.filter(getNum);

const number1 = ["Msoda","Yasamin","Rihan","Sitara","Homira","Mahtab"];
function getName(name){
    return name.toLowerCase().includes("s");
};
const result2 = number1.find(getName);

const number2 = [1,2,3,4,5,6,7,8,9,10];
function get (number){
    return number>2;
}
const result3 = number2.findIndex(get);


const qimad = [140,120, 480, 945,320,420,780];
function getItems(item){
    return item<=130;
}
const result4 = qimad.some(getItems);
if(result4){
    console.log("We Have Something You Can Buy");
}
else{
    console.log("Unfortunately");
}