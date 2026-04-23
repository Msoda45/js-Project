const list1 = [
{
        id: 1,
    name: "Yasamin",
    gender:"female",
    age:23,
},
    {
        id: 2,
    name: "Huma",
    gender:"female",
    age:15,
},
    {
        id: 3,
    name: "Ali",
    gender:"male",
    age:16,
},
    {
        id: 4,
    name: "Mahdi",
    gender:"male",
    age:17,
},
   {
        id: 5,
    name: "Mohmmd",
    gender:"male",
    age:14,
},
];

for(let list of list1){
   const message =  list.gender ==="female"? `She is ${list.name}, She is ${list.age}years old `:`He is ${list.name},and He is ${list.age} years old`
    console.log(message)
}



const numList = [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200];
for(let item of numList){
    if(item%2 ==0? item:""){
        console.log(item )
    }
}




const numList = [12,14,19,13,18,17,];
for(let item of numList){
    if(item%2 ===0){
        console.log(item )
    }
}