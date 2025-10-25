// lexical scope means the function inside other function ca access outer function variables but vice versa is not
// true

function outerFunction(){
    let x = 5;
    let y = 7;
    function innerFunction(){
        console.log(x);
        console.log(y);
        let a = 5;
    }
    innerFunction();
    // console.log(a); // ReferenceError: a is not defined
}


outerFunction();

// here innerFunction() can use x and y due to lexical scope but outerFunction() cannot access a
// innerFunction() is functional scoped to outerFunction() so it cannot be called outside outerFunction()

function outerFunction1() {
    let x = 5;
    return function innerFunction1() {
        console.log(x); //  remembers x
    };
}

const fn = outerFunction1();// function expression
fn(); // 5
// here we have returned the innerfunction1() in fn so we can use it outside outerfunction1() it is called closure in
// js
