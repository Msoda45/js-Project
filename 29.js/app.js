// 
const number = 981.89;
const tostr = number.toString();
const [sabit, ashriya] = tostr.split(".");

// some()
const number1 = [1,2,3,4,5,6,7,8,9,10];
function getnum1(number){
    return number>9;
}
const result1 = number1.some(getnum1);

// evrey()
const number2 = [14,16,13,42,86,90,82,32];
function getnum2(num1){
    return num1%2 ===0;
}
const result2 = number2.every(getnum2);

// reduce()
const number3 = ["M","S","O","D","A"," ","Y","A","W","A","R","I"];
function getName(falie, item){
    return falie+item;
}
const result3 = number3.reduce(getName)

// reduce right()
const number4 = [2,4,7,20,93,980];
const result4 = number4.reduceRight((curent, item,)=>{
    return curent+item;
},0);

// includes()
const number5 = [1,4,6,2,9,13,90,120];
const result5 = number5.includes(13);

// index of()
const number6 = [1,45,78,23,74,24,74,32,15,11,90,10983];
const result6 = number6.indexOf(90);

// lastIndexOf()
const number7 = [12,67,54,90,54,32,14,78,76,9,897,453,67,900];
const result7 = number7.lastIndexOf(67);

// sort()
const number8 = [1,4,5,6,10,7,9,3,2,8,0];
function getnum(x,y){
    return x-y;
}
const result8 = number8.sort(getnum)

// revars()
const names = ["M.soda","Rihan","Yasamin","Arifa","Nargis","Nazanin"];
const result9 = names.reverse();