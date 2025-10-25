// the functions in objects are called methods

const student = {
    name: "shivansh",
    age: 19,
    marks: 100,
    gender: "m",
    work: function(){
        console.log(`${this.name} studies`);
    },
    eat: function(){
        console.log(`${this.name} eats`);
    }
};

// accessing methods

student.work();
student.eat();

student["work"]();
student["eat"]();


// method shorthand

const randomObj = {
    work(){
        console.log("does work");
    },
    sleep(){
        console.log("sleeps");
    }
};

randomObj.work();
randomObj.sleep();
// console.log(randomObj.work);
// console.log(randomObj.sleep);

// updating methods
randomObj.work = function(){
    console.log("new work");
};

randomObj.work();

// adding method
randomObj.eat = function(){
    console.log("eats");
};

randomObj.eat();

console.log(randomObj);

// output
// {
//   work: [Function (anonymous)],
//   sleep: [Function: sleep],
//   eat: [Function (anonymous)]
// }

delete randomObj.eat;