let num1 = 5;
num1 = 10; // let can be updated
// let num1 = 11; Error let is local sope variable cannot be redeclared


const variable = 1;
// variable = 5; Error const is constant variable value cannot be changed
// const variable = 1; Error local scope can't be redeclared

var var1 = 5;// used mainly in older version
var1 = 10; // no error can be updated
var var1 = 1;// global scoped can be redeclared

console.log(num1,variable,var1);

