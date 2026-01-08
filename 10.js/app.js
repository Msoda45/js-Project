const number =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const result = number.reduce((natija,number)=>{
    return natija+number;
});
const friend =["Nazanin","Rihan","Yasamin","Msoda","Kubra","Rihan","Msoda"];
const result1 = friend.reduce((acc,friends)=>{
    acc[friends]= (acc[friends] || 0)+ 1;
    return acc
},{});
const jomla=["Hi","Everyone","My","Name","Is","Msoda","And","Iam","Stuend","At","Sharifi","Proggraming","Acadimy."];
const result2 = jomla.join(" ");
const shift= [1,2,3,4,5,6,7,8,9,10];
let stuend =["Maqsuda","Arifa","Shagol"];
const result3 = stuend.some((stuends)=>{
    return stuends.includes("a");
});
const Shagirdan= [
    {
        id:1,
        name:"Msoda",
        lastName:"Yawari",
    },
    {
        id:2,
        name:"Nazanin",
        lastName:"Hassani",
    },
    {
        id:3,
        name:"Rihan",
        lastName:"Qourbani",
    }
];
const result4 =Shagirdan.find((stuend1)=> stuend1.name.toLocaleLowerCase().includes("msoda"));
