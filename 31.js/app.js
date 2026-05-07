const List = [
    {
        id: 1,
        name: "Hilma",
        age: 26,
        gender: "female",
    },
        {
        id: 2,
        name: "Noyan",
        age: 10,
        gender: "male",
    },
        {
        id: 3,
        name: "Farhan",
        age: 15,
        gender: "male",
    },
        {
        id: 4,
        name: "Sana",
        age: 24,
        gender: "female",
    },
        {
        id: 5,
        name: "Amira",
        age: 19,
        gender: "female",
    },
        {
        id: 6,
        name: "Lina",
        age: 20,
        gender: "female",
    },
        {
        id: 7,
        name: "Panah",
        age: 23,
        gender: "female",
    },
        {
        id: 8,
        name: "Arsalan",
        age: 21,
        gender: "male",
    },
        {
        id: 9,
        name: "Bahar",
        age: 18,
        gender: "female",
    },
        {
        id: 10,
        name: "Zaren",
        age: 17,
        gender: "female",
    },
]

const result = List.some( (V)=>{
    return V.age <20 
} )


const numresult = List.every( (V)=>{
    return V.age <20 
} )