// abstract abstraction  یا کلی سازی
class Weather{
    constructor(degree){
        this.degree = degree;
    }
    celsiusToFaranhit(){
        const convert = this.degree * 9/5 +32;
        return convert
    }
}
const Weathers = new Weather(34);
const result = Weathers.celsiusToFaranhit();
// polymorphism  
class Cars{
    name;
    color;
    price;
    constructor(name,color,price){
        this.name = name;
        this.color = color;
        this.price = price;
    }    
    move(){
        return this.name + " Can Move";
    }
}
class BMW extends Cars{
      constructor(name,color,price){
        super(Cars);
        this.name = name;
        this.color = color;
        this.price = price;
      }
      move(){
        return `${this.name} Can Move With 4 Tire`
      }
};
const car1 = new BMW("BMW","black","$1279000");
const result1 = car1.move();

class Toyota extends Cars{
      constructor(name,color,price){
        super(Cars);
        this.name = name;
        this.color = color;
        this.price = price;
      }
      move(){
        return `${this.name} Can Move With 4 Tire`
      }
};
const car2 = new Toyota("TOYOTA","silvar","$789000");
const result2 = car2.move();

class Motore extends Cars{
      constructor(name,color,price){
        super(Cars);
        this.name = name;
        this.color = color;
        this.price = price;
      }
      move(){
        return `${this.name} Can Move With 2 Tire`
      }
};
const car3 = new BMW("HONDA","blue,red","$9000");
const result3 = car3.move();

// class Animal{
//     name;
//     age;
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     move(){
//         return this.name + " Can walk";
//     }
// }
// class Cat extends Animal{
//     isPet;
//     constructor(name,age,isPet){
//         super(Animal);
//         this.name = name;
//         this.age = age;
//         this.isPet = isPet;
//     }
//     move(){
//         return `${this.name} walk With 4 legs`
//     }
// };
// const cat = new Cat("Cat",1,true);
// const cat1 = cat.move();
// class Dog extends Animal{
//     isPet;
//     constructor(name,age,isPet){
//         super(Animal);
//         this.name = name;
//         this.age = age;
//         this.isPet = isPet;
//     }
//     move(){
//         return `${this.name} walk With 4 legs`
//     }
// };
// const dog = new Dog("Dog",3,false);
// const dog1 = dog.move();
// class Human extends Animal{
//     lastName;
//     constructor(name,age,lastName){
//         super(Animal);
//         this.name = name;
//         this.age = age;
//         this.lastName = lastName;
//     }
//     move(){
//         return `${this.name} Can walk With 2 legs`
//     }
// };
// const human = new Human("Nargis",43,"Mohammadi");
// const human1 = human.move();
