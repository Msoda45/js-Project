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

// سوال اول
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

// سوال دوم
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

// سوال سوم
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


// سوال چهارم
const delate = (text)=>{
    let str = 0;
    let end = text.length;
    for(let i = 0; i<text.length; i++){
        if(text[i] !==' '){
            str = i;
            break;
        }
    }
    for(let i = text.length-1; i>=0 ;i--){
        if(text[i]!==' '){
            end = i;
             break;
        }
    }
    return text.slice(str,end+1);
}
const result4 = delate("  Hi My Name Is Msoda  ");


// سوال پنجم
function revars(text){
    let result5 = text.split(' ').map(word=>{
        let revars1 = '';
        for(let i = word.length-1; i>=0; i--){
            revars1 += word[i];
        }
        return revars1;
    }).join(" ");
       return result5;
}
const result5 = revars("Hi My Name Is Msoda");


// سوال ششم
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
const result6 = text("Hi My Nmae Is Msoda Yawari");



// سوال هفتم
const text1 = "Hi   My   Name   Is   Msoda   Yawari";
const result7 =  text1.replaceAll("   "," ");



// سوال هشتم
    let name = "msoda yawari";
    name = name.split(" ");
let Myname = name[0].slice(0,1).toUpperCase()+ name[0].slice(1);
let lastName = name[1].slice(0,1).toUpperCase() + name[1].slice(1);
const result8 =`${Myname} ${lastName}`;


// سوال نهم
let join = ["I","Love","Apple"];
const result9 = join.join().replaceAll(","," ");