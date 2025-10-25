// function definition

// function funcName(){
//      // some code to do work
//};

// function call

// funcName();

function greet(){
    console.log('hello');
}

greet();

// parametrised functions in js 

function factorial(n){
    let fact = 1;
    for(let i=1; i<=n; i++){
        fact *= i;
    }
    return fact;
}

console.log(factorial(5));

// default parameters

function printInfo(name = 'Guest', age = 18){
    console.log(`Age of ${name} is ${age}`);
}

printInfo();// Age of Guest is 18
printInfo('Shivansh');// Age of Shivansh is 18
printInfo('Shivansh', 19);// Age of Shivansh is 19
