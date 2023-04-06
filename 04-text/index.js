const myName = "Mladen Ivanković";
console.log(myName.lenght);

console.log(myName.charAt(5));
console.log(myName[5]);
const myNameAsWords = myName.split("Mladen Ivanković");
const myFirstName = myNameAsWords[0];
const myLastName =  myNameAsWords[1];
const myLargeFirstName = myFirstName.toLocaleUpperCase();
const mySmallLastName = myLastName.toLocaleLowerCase();

console.log(myFirstName, myLastName, myLargeFirstName, mySmallLastName);

