const numbers: number[] = [1,2,3,4,5,6,7,8,9];
const number1:[number,string,string,number,boolean] = [1,"msoda","yawari",99,false];
type Human = {
id:number;
name: string;
lastName: string;
age?: number;
score: number;
isPassed: boolean|string;
};
const person1:Human = {
    id: 1,
    name: "Msoda",
    lastName:"Yawari",
    age: 17,
    score: 99,
    isPassed: true,
};
const person2:Human = {
    id: 2,
    name: "Nazanin",
    lastName:"Hussani",
    age: 18,
    score: 98,
    isPassed: true,
};
type Marritalstatus = boolean;
const isPassed:Marritalstatus = true;
interface Cat{
    id: number;
    name: string;
    age: number;
    ispat: boolean;
};
const Cat1:Cat = {
    id: 1,
    name:"Kank",
    age: 2,
    ispat: true, 
}
const Cat2:Cat = {
    id: 2,
    name: "",
    age: 3,
    ispat: false, 
}
