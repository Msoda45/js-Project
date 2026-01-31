// سوال هشتم
function gam(...a){
    let totle = 0;
    for(let i = 0; i <a.length; i++){
        totle += a[i];
    }
    return totle;
}
const result = gam(3,6,8,2,3,4)



// سوال نهم
function prim(a){
    let isPrime = true;
    if(a<=1){
        isPrime = false;
    }
    else{
        for(let i = 2; i< Math.sqrt(a); i++){
            if(a% i ===0){
                isPrime = false;
                break;
            }
        }
         return isPrime;
    }
} 
const result1 = (prim(12));



// سوال دهم
const anagram = (a,b)=>{
    let s1 = a.replace(/\s/g,'').toLowerCase();
    let s2 = b.replace(/\s/g,'').toLowerCase();
return s1.split("").sort().join() === s2.split("").sort().join();
}
const result2 = anagram("listen","silent")
const result3 = anagram("world","book")
