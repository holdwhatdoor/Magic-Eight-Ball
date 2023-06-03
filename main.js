// Practice problem to Magic Eightball

// Variables
const userName = "Scott";
var userQuestion = "Will the Dev30 program make me a successful coder?";
// random number generator between 0 and 7
var randomNumber = Math.floor(Math.random() * 8);
//empty string variable for eightball answer
var eightBall = "";

// Code to greet user depending on whether a name was given or not
if(userName !== ""){
    console.log(`Hello, ${userName}!`);
}
else{
    console.log(`Hello!`);
}

// eight ball reiterates question and evaluates response
console.log(`${userName}, you asked - "${userQuestion}" - (your random number is: ${randomNumber}).`);

if(randomNumber === 0){
    eightBall = 'It is certain';
}
else if(randomNumber === 1){
    eightBall =`It is decidedly so`;
}
else if(randomNumber === 2){
    eightBall = `Reply hazy try again`;
}
else if(randomNumber === 3){
    eightBall = `Cannot predict now`;
}
else if(randomNumber === 4){
    eightBall = `Do not count on it`;
}
else if(randomNumber === 5){
    eightBall = `My sources say no`;
}
else if(randomNumber === 6){
    eightBall = `Outlook is not good`;
}
else if(randomNumber === 7){
    eightBall = `Signs point to yes`;
}

// log of eightball program response
console.log(eightBall);


