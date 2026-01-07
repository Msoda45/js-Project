const names = ["Msoda", "Nazanin", "Rihan"];
names.splice(2, 1, 5, 9, 10);
names.map((item, index) => {
    console.log(index, item);
})
// forEach
const maywa = ["Oreange", "peach", "Pear", "Banana"];
maywa.forEach((item) => {
    console.log(item);
})
const scores = [5, 7, 8, 9, 10, 20, 19, 18];
const natija =scores.every((score) => {
    return score>7;
});
const myInfo = {name:"Msoda",lastName:"Yawari",score:99};
