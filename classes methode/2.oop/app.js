// Access modifier تغیر دهنده دسترسی  پذیر :
// public private 
class UserInfo{
    #name;
    email;
    constructor(name,email){
        this.#name = name;
        this.email = email;
    };
};
const user1 = new UserInfo("Nargis","nargis@example.com");
 class employ{
    constructor(){

    };
    setName(name){
        if(isNaN(name)){
            this.name = name;
        }
    }
    getName(){
        return (this.name).toUpperCase();
    }
 };
 const emp1 = new employ();
 emp1.setName("Arifa");
 const user2 = emp1.getName();

//  Inheritance => ویراست
class animal{
    name;
    age;
    weight;
    constructor(name,age,weight){
         this.name = name;
         this.age = age;
         this.weight = weight;
    }
    eat(){
        console.log(`${this.name} Can Eat`)
    }
    sound(){
        console.log(`${this.name} Can Make Sound`)
    }
};
class human extends animal{
    lastName;
    constructor(name,age,weight,lastName){
        super(animal);
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.lastName = lastName;
    }
    think(){
        console.log(`${this.name} Can Think`)
    }
};
const user3 = new human("Mahdia",22,67,"Nowrozi");
user3.eat();
// methode static
class Info{
    name;
    lastName;
    age;
    score;
    constructor(name,lastName,age,score){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.score = score;
    }
    static readBook(){
        console.log(`Someone Can Read Books`)
    }
}
Info.readBook();