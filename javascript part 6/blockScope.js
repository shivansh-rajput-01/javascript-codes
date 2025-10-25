// introduces with ES6
// let and const has block scope
// var does not support block scope
// block scope means variable inside {}(block) cannot be accessed outside the block

{
    let var1 = 10;
    const var2 = 10;
    var var3 = 10;
}

// console.log(var1); // ReferenceError: var1 is not defined
// console.log(var2); // ReferenceError: var2 is not defined
console.log(var3);


// here we cannot use var1 and var2 outside block because let and const have block scope but var3 can be accessed 
// outside block as it is not block scoped
