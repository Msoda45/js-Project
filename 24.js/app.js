const text = "Hi My Name Is Msoda Yawari";
console.log(text.length);
const text1 = "Hi My Name Is Msoda Yawari";
function textCon(string) {
    let count = 0;
    for(let i = 0; i< text.length; i ++){
        count ++;
    }
    console.log(count);
}
textCon(text1);


const text2 = "HI MY NAME IS MSODA YAWARI";console.log(text2.toLowerCase());

const text3 = "hi my name is msoda yawari";console.log(text3.toUpperCase());

const text4 = "         Hi My Name Is Msoda Yawari       ";console.log(text4.trim());


const text5 = "Hi My Name Is Msoda Yawari";console.log(text5.charAt(9));

const text6 = "Hi My Name Is Msoda Yawari";console.log(text6.charCodeAt(0));

const text7 = "Hi My Name Is Msoda Yawari".toLowerCase();console.log(text7.indexOf("n"));

const text8 = "Hi My Name Is Msoda Yawari";console.log(text8.lastIndexOf("i"));

const text9 = "Hi My Name Is Msoda Yawari";console.log(text9.includes("o"));

const text10 = "Hi My Name Is Msoda Yawari".toLowerCase();console.log(text10.startsWith("in the name of allah"));

const text11 = prompt("write a text".toLowerCase());console.log(text11.endsWith("good bay"));

const text12 = "Hi My Name Is Msoda Yawari";console.log(text12.slice(11,19));

const text13 = "Hi My Name Is Msoda Yawari";console.log(text13.substring(20,26));

const text14 = " Hi My Name Is Msoda Yawari";console.log(text14.repeat(2));

const text15 = "Hi My Name Is Msoda Yawari";console.log(text15.split(""));

const text16 = "In The Name Of Allah";console.log(text16.concat(" Hi My Name Is Msoda Yawari"));

const text17 = "Hi My Name Is Msoda Yawari".toLowerCase();console.log(text17.localeCompare("o"));