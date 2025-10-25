// a function in js is a higher order function if it does one or both of following:
// 1. takes one or more function as parameters
// 2. return a function

// ex of a higher order function taking another function as parameter

let greet = function(){
    console.log("namaste");
};

function multipleGreet(func,n){
    for(let i=1; i<=n; i++){
        func();
    }
}

multipleGreet(greet,10);


// ex of higher order function returning a function

function oddOrEvenFactory(request){
    if(request == "odd"){
        return function(n){
            if(n % 2 == 1) console.log(true);
            else console.log(false);
        }
    }else if(request == "even"){
        return function(n){
            if(n % 2 == 0) console.log(true);
            else console.log(false);
        }
    }else{
        console.log("Wrong request");
    }
}

let func = oddOrEvenFactory("even");

func(5);// false
func(8);// true

func = oddOrEvenFactory("odd");

func(5);// true
func(8);// false
