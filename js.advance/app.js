// OOP => Object Oriented Programming
// برنامه نویسی شیگرایی
// Reusable,قابل استفاده مجدد
// Maintable,قابل نیگهداری می شود
class User{
    name = "M.soda";
    email = "Msoda@gemil.com"
    addFriend(){
        return this.name+"has added a friend"
    }
    post(){
        return this.name+"has posted something"
    }
}
// instance, نمونه برداری
const user1 = new User();
const user2 = new User();
class User1{
    name;
    email;
    age;
    constructor(name,email,age){
        this.name = name;
        this.email = email;
        this.age = age;
    }
    addFriend(){
        return this.name+"has added a friend"
    }
    post(){
        return this.name+"has posted something"
    }
}
const user3 = new User1('M.soda','msoda@gmail.com',17);
const user4 = new User1('Rihan','rihana@gmail.com',40);
const user5 = new User1('Yasamin','yasamin@gmail.com',23);
const user6 = {
    name:"Hamid",
    email: "hamid@example.com",
    age:26
}
const user7 = new User1('Namsima','nasima@gmail.com',21);
const user8 = new User1('Sitara','sitara@gmail.com',19);