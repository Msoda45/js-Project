let name = "Hi MY Name Is Msoda Yawari Hi".toLowerCase();
console.log(name.lastIndexOf("hi"))

function gitnumbers(...a){
    let max = [0];
    let min = [0];
for (let i = 0; i<a.length;i++){
    if(a[i]>max){
        max = a[i]
    }
    else if(a[i]<min){
        min = a[i]
    }
}
return {minimum: min,maximum:max}
}
const result = gitnumbers(9,5,4,3,2,1,90)

const text = (text1)=>{
    let counter = {};
    for(let i = 0; i < text1.length; i++){
        const sum = text1[i];
        if(counter[sum]){
            counter[sum]++;
        }
        else{
            counter[sum]=1
        }
    }
    return counter;
}
const result1 = text("Hello World")