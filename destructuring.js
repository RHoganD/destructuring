/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays

let ages =[30, 26, 27];

// the below method is not using destructuring
// let john = ages[0];    
// let mary = ages[1];  
// let joe = ages[2];

let [john, mary, joe] = ages;  // using desctructuring acomplish the same result as avobe

console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    Mike: "designer",
    Jill: " developer",
    Alicia: "accountant",
    };
    
    let {Mike, Jill, Alicia} = jobs;
    console.log(Mike, Jill, Alicia);




// Destructuring subsets

let languages = ["english", "french", "spanish", "german", "japanease"];

let [johnNative, johnSeondary] = languages;

console.log(johnNative, johnSeondary);  // the value inglish and french will be asigne as spected


// if i want to asign spanish and german to mary i will use commas to skeep the fist two values one comma per value
let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

// creating a new ojbect and destructuing only what is needed
let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanease",
    };
    
    let {firstLanguage, thirdLanguage} = languages2;
    console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax

let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favourite, secondFavorite, ... others] = fruits  // using the rest paramenter syntax in the others

console.log(favourite);
console.log(secondFavorite);
console.log(others);

// creating a new variable using the same method as above


let favotieFood = {
    brian: "pizza",
    anna:  "pasta",
    sarah:  "vegetarian",
    amdrea: "steak"
    };
    

    let {brian, anna, ...rest} = favotieFood;

    console.log(brian);
    console.log(anna);
    console.log(rest);
    