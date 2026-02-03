function find (...a){
    let count = 0;
    let totle = 0;
    for (let i = 0;i <a.length; i++){
        if (a[i]>0){
            count++;
            totle+=a[i];
        }
    }
    return totle/count;
}
const result = find(3,6,7,8,9,-7,0,2);


function gitText(text){
    let a = "";
     for(let i = 0;i<text.length; i++){
        if(text[i]>="a" && text[i]<="z" || text[i]>="A" && text[i]<="Z"){
            a += text[i];
        }
     }
     return a
}
const result1 = gitText("Hel0lo How1 a3re 2you");


const snakCase=(text)=>{
    let result = "";
    for(let i = 0; i< text.length; i++){
        if(text[i]>="A" && text[i]<="Z"){
            result+= "_" + text[i].toLowerCase();
        }
        else{
            result+= text[i];
        }
    }
    return result;
}
const result2 = snakCase("Hello My Name Is Msoda Yawari");


const remove=(a)=>{
    let text = "";
    for(let i = 0; i< a.length; i++){
        if(a[i]!== a[i -1]){
            text +=a[i];
        }
    }
    return text;
}
const result3 = remove("Hoomeee woork")