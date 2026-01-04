function meeting(name, lastname, gender){
    switch(gender){

        case "male":
            return "Hi your name is"+ name+"And your last name is"+ lastname+"And your are male"
            break;

    
            return "Hi your name is"+ name+"And your last name is"+ lastname+"And your are female "
            break;
    }
}
const result = meeting( " Ali ", " Yawari "  , " male ");
const result1 = meeting(" Msoda "," Yawari ", " female ");
const name = "Msoda";
const lastName ="Yawari";
const age = 17;
const natija =`youre name is ${name} and your last name is ${lastName} and your ${age} years old`
// const scores =70;
// if(scores >50){
//     console.log("you passed")
// }
// else{
//     console.log("you filiet")
// }
const nomra = 70;
const number =nomra> 50? "you passed":"you filet"

