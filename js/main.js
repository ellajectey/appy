// var name ="Ella";
var firstName = "Ella"; // first nsme is a word or string
var lastName = "Jectey-Asare";
var age = 29;

//interpolation
//let fullName = firstName + '' lastName;
let fullName =`${firstName} ${lastName}`;
let a = 56;
let b = 43;
let result = `${a} + ${b} = ${a+b}`;
console.log(fullName);
console.log(result);

const pi= 3.142;
const boilingWaterTemperature = 100;

let areYouHappy = true;
let phone = {color: "black", makeCall: null, phone_number: "0205239784"};

//if statements
if(age == 18) {
    console.log("Welcome to Jeopardy");
}

else{
    console.log("GO AWAY");
}

// loops- when you have something to be done multiple times
// for and while loops
 for(let i=1; i<=8; i++)
 {
    console.log("the value of i is", i);
 }

//  defining functions
isElligible()
    if(age>=18){
        console.log("welcome to jeopardy");
    }else{
        console.log("GO AWAY");
    }

    // invoking a function
    isElligible();

    // returning functions
    // isElligible();
    //     if(age>=18)
    //     {
    //         return"welcome to jeopardy";
    //     }else
    //     {
    //         return "GO AWAY";
    // console.log(isElligible());
    // displaying code on webpage
// document.body.innerHTML = isElligible();

console.log("we are usimg GIT!");