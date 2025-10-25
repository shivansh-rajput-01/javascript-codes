// functional scope means the variables inside functions can only be accessed from inside the function

let sum = 10;

function scope1(a,b){
    let sum = a + b;
    console.log(sum);
}

function scope2(a,b){
    console.log(sum);
}

function scope3(a,b){
    let s = a + b;
    console.log(s);
}

scope1(1,2);// 3
scope2(1,2);// 10
scope3(1,2);// 3
console.log(sum);// 10
// console.log(s); // ReferenceError: s is not defined

// here in scope1() sum is a functional scope variable and it is used inspite of outer sum = 10(global scoped) in it
// in scope2() sum is not defined but we have sum = 10(global scoped) so it is used
// in scope3() we have s so we can use it but when used outside it gives reference error
