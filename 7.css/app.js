const carName = "Corlla";
if (carName === "BMW") {
    console.log('This Is a Fast🚓!');
}
else if (carName === "Corlla") {
    console.log("This Is a Medium Car🛺!");
}
else if (carName === "Tectar") {
    console.log('This Is a Slow Car🚜!');
}
else {
    console.log('This Is an Unknown Car!')
}
const patName = "Cat";
switch (patName) {
    case "Cat":
        console.log('The Cat Is Slow Then The Dog')
        break;
    case "Dog":
        console.log('The Dog Is Faster Then The Cat')
        break;
    case "Tiger":
        console.log('The Tiger Is Faster Then The Dog')
    default:
        console.log("We don't know you")
        break;
}
const countryName="Asturlia";
const result = countryName ==="Asturlia"? "Asturlia Is The WonderFull Country": 
countryName ==="Amrica"? "Amrica IS The Good Country":
 countryName === "Canada"? "Canda Is The Best Country":
 "We Don't Know This Country"
 console.log(result);
 const score = 5;
 const natija = score<=20 && score >=15 ? "You Are In Group A":
 score>=7 ? "You Are In Group B":
 "You Are In Group C"
 console.log(natija);