const name1 = ["Msoda", "Nazanin", "Rihan"];
name1.splice(2, 1, 5, 9, 10);
name1.map((item, index) => {
    console.log(index, item);
})
// forEach
const maywa = ["Apple", "barry", "Pear", "Banana"];
maywa.forEach((item) => {
    console.log(item);
})
const scores = [5, 7, 8, 9, 10, 20, 19, 18];
const natija =scores.every((score) => {
    return score>7;
});
const myInfo = {name:"Msoda",lastName:"Yawari",score:99};
