let num  = 0;
function grreting(){
    console.log("Hi My Name Is Msoda");
    num++;
    if(num==8){
        return;
    }
    // coroghsr or recorsive
    grreting();
}
grreting();

function sumgen(){
    let memory = {};
    return function add(number){
        let sum = 0;
        if(memory[num]){
            return memory[num];
        }
    for (let i = 0; i < number; i++){
        for (let u = 0 ; u < number; u ++){
            for ( let m = 0;m< number; m ++){
                sum = i + u + m
            }
        }
    }
     memory[num] = sum;
    return sum;
}
}

let sum = sumgen();

console.time("timer");
console.log(sum(1000));
console.timeEnd("timer");

console.time("timer");
console.log(sum(1000));
console.timeEnd("timer");

console.time("timer");
console.log(sum(1000));
console.timeEnd("timer");

console.time("timer");
console.log(sum(1000));
console.timeEnd("timer");

console.time("timer");
console.log(sum(1000));
console.timeEnd("timer");

console.time("timer");
console.log(sum(1000));
console.timeEnd("timer");

console.time("timer");
console.log(sum(1000));
console.timeEnd("timer");

console.time("timer");
console.log(sum(1000));
console.timeEnd("timer");

console.time("timer");
console.log(sum(1000));
console.timeEnd("timer");

console.time("timer");
console.log(sum(1000));
console.timeEnd("timer");

console.time("timer");
console.log(sum(1000));
console.timeEnd("timer");

console.time("timer");
console.log(sum(1000));
console.timeEnd("timer");

console.time("timer");
console.log(sum(1000));
console.timeEnd("timer");

console.time("timer");
console.log(sum(1000));
console.timeEnd("timer");

console.time("timer");
console.log(sum(1000));
console.timeEnd("timer");