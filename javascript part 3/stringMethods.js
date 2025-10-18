// stringName.methodName();
// strings are immutable in js
let msg = "   Hello   ";

console.log(msg.trim());//trims spaces form start and end and return it not change existing one

console.log(msg);//message remains same no spaces removed

// let pass = prompt("Enter a password");

// let newPass = pass.trim();


// console.log(newPass);

let name1 = "Shivansh Rajput";

console.log(`Uppercase name ${name1.toUpperCase()}`);
console.log(`Lowercase name ${name1.toLowerCase()}`);
console.log(`Original name ${name1}`);


//methods with arguments
let str = "ILOVECODING";

console.log(str.indexOf("LOVE"));
console.log(str.indexOf("love"));
console.log(str.indexOf("O"));
console.log(str.indexOf("k"));

//method chaining
//computed left to right
let newMsg = "     hello    ";
console.log(newMsg.trim().toUpperCase());


//slice method
//str.slice(start,end)
//start->included and end->not included
console.log(name1.slice(1,2));
console.log(name1.slice(1));//in single parameter end is taken str.length
//str.slice(-num) = str.slice(str.length-num)
console.log(name1.slice(-15,-1));
console.log(name1.slice(-15));

//replace method

let demoReplace = "hello";
console.log(demoReplace.replace("e","a")); // hallo
console.log(demoReplace.replace("e","")); // hllo
console.log(demoReplace.replace("","a")); // ahello
console.log(demoReplace.replace("t","a")); // hello

// repeat method

let demoRepeat = "mango";
console.log(demoRepeat.repeat(5)); // mangomangomangomangomango