const names = {
    name: "M.soda",
    lastName: "Yawari",
    Age: 17,
    score: 99,
    names1: function(){
       console.log(`You Are ${this.name} Your LastName Is ${this.lastName}
         And You Are ${this.Age} Years Old. And Yor Score Is ${this.score}.`)
    }
};
// اضافه کردن
// names.name = "Nazanin";
// names["lastName"] = "Hussani";
// names.Age = 19;
// names["score"] = 98;
// console.log(names);

// حذف کردن
// delete names.lastName;
console.log(names);