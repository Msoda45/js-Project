// سوال اول
let l= 1 ;
while (l< 100) {
    console.log(l ** 2)
    l++
};



// سوال دوم
const list = [];
while (true) {
    const number = Number(prompt("Enter A Number"));
    if(number === 0){
        break;
    }
    list.push(number);
;}