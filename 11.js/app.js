const sentens ="     Hello Everyone My Name Is Msoda    ";
const result =sentens.trim();
const sentens1 ="     Hello Everyone My Name Is Msoda    ";
const result1 =sentens1.trimStart();
const sentens2= "     Hello Everyone My Name Is Msoda     ";
const result2 = sentens2.trimEnd();
const sentens3 ="Hello    Everyone    My    Name    Is    Msoda ";
const result3 = sentens3.replaceAll('    ',' ');
const sentens4 ="Hello Everyone My Name Is Msoda Khawari, I'm In Sharifi Programing Acadimy, And My LastName Is Khawari.";
const result4 = sentens4.replaceAll('Khawari','Yawari');
const sentens5 ="msoda";
const result5 = sentens5.substring(0,1).toUpperCase()+ sentens5.substring(1);
const sentens6 ="Hello Everyone My Name Is Msoda Khawari, I'm In Sharifi Programing Acadimy, And My LastName Is Khawari.";
const result6 = sentens6.split(" ");
const sentens7 ="Salam, My Name Is Msoda And I'm Student.";
if(sentens7.toLowerCase().startsWith('salam')){
    console.log('Hello Dear Wellcom');
}
else{
    console.log("Don't Masseg Me Agin");
}
const sentens8 ="Salam, My Name Is Msoda And I'm Student, Best regards.";
if(sentens8.toLowerCase().endsWith('Best regards.')){
    console.log('Hello Dear Wellcom');
}
else{
    console.log("Don't Masseg Me Agin");
}