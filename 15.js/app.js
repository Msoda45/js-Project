const number = -5;
if(number>0){
    console.log("این عدد مثبت است");
}
else if(number<0){
    console.log("این عدد منفی است");
}
else{
     console.log("این عدد صفر است")
};
const sin = 17;
if(sin >=18){
    console.log("فرد می تواند ری دهد");
}
else{
    console.log("!فرد نمی تواند ری دهد")
};
const vowoleLetters = "E";
const vowoles = ["a","e","i","o","u"];
if(vowoles.includes(vowoleLetters.toLowerCase())){
    console.log("این حرف صدا دار است")
}
else{
    console.log(" این حرف صدا دار نیست")
};
const hour = 14;
if(hour>=0 && hour <=12){
    console.log("صبح شما بخیر")
}
else if(hour >=12 && hour <=17){
    console.log("بعد از ظهر شما بخیر")
}
else if(hour >=17 && hour<=20){
    console.log("عصر شما بخیر")
}
else{
    console.log("شب شما بخیر")
};
const even = 42;
if(even % 2 ===0){
    console.log("عدد جفت است")
}
else{
    console.log("عدد تاق است")
}
const info = 84;
if(info >=90){
    console.log("you are in group A")
}
else if(info >=80){
    console.log("you are in group B")
}
else if(info >=70){
    console.log("you are in group C")
}
else if(info>= 60){
    console.log("you are in group D")
}
else if(info >=50){
    console.log("you are in group F")
}
else{
    console.log("you filed")
};
const lamp = "red";
if(lamp == "yellow"){
    console.log("لطفاَ آهسته بروید")
}
else if(lamp == "green"){
    console.log("می توانید بروید")
}
else{
    console.log("لطفاَ بیستید")
};
const dama = 8;
if(dama >=35){
    console.log("خیلی گرمه")
}
else if(dama >=34 || dama >=20){
    console.log("خوب است")
}
else if(dama >=10){
    console.log("کمی سرد")
}
else{
    console.log("سرد")
}
