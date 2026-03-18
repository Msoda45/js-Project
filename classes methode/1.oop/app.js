class human{
    // name
   setName(name){
    if(isNaN(name) && name.length >=3){
        this.name = name;
    }
    else{
        console.log("The Name Is Unvalid")
    }
   }
   getName(){
    return this.name;
   }
//    Age
   setAge(Age){
    if(!isNaN(Age) && Age >= 1){
        this.Age = Age;
    }
    else{
        console.log("The Age Should be A Number and Greater Than 0...")
    }
   }
   getAge(){
    return this.Age;
   }
//    Email
   setEmail(Email){
    if(Email.includes('@') && isNaN(Email)){
        this.Email = Email;
    }
    else{
        console.log("The Email Is Unvalid")
    }
   }
   getEmail(){
    return this.Email;
   }
}
const user1 = new human();
user1.setName("M.soda")
user1.setAge(17);
user1.setEmail("Msoda@gamil.com");
console.log(user1.getName());
console.log(user1.getAge());
console.log(user1.getEmail());