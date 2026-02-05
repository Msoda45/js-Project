// Medoth push
const nameList = ["Msoda","Rihan","Nazanin","Yasamin"];
nameList.push("Ali","Ahamd","Mahmod","Nawid"); 


// Method pop
const student = ["Ali","Fatima","Zahra","Nargis","Msoda","Rihan","Mohammad","Nawid"];
student.pop();


// Method unshift
const classmeds = ["Msoda","Rihan","Nazanin","Yasamin"];
classmeds.unshift("Sitara","Mahtab");


// Method shift
const classmeds1 = ["Msoda","Rihan","Nazanin","Yasamin"];
classmeds1.shift();


// Method slice
const classmeds2 = ["Msoda","Rihan","Nazanin","Yasamin"];
const result1 = classmeds2.slice(1,2);


// Method concat
const oldstu = [" Nazanin "," Sahar "," Nafisa "," Susan "];
const newstu = [" Msoda "," Rihan "," Yasamin "," Nida "," Sitara "];
const others = [" Nargis "," Nazi "," Mahtab "," Freshta "];
const result2 = oldstu.concat(newstu,others);


// Method join
const Shagirdan = [" Nargis "," Nazi "," Mahtab "," Freshta "];
const result3 = Shagirdan.join("_");


// Method forEach
const number = [1,2,3,4,5,6,7,8,9,10];
 let totle = 0;
function getnum(numbers){
    totle += numbers;
}
number.forEach(function (numbers){
    console.log(numbers)
});
