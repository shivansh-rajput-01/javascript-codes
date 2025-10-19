// for loop is used to perform a task specified numbers of time

//ex-1 print numbers from 1 to 10

for(let i=1; i<=10; i++){
    console.log(i);
}

console.log();

//ex-2 print numbers from 5 to 1

for(let i=5; i>=1; i--){
    console.log(i);
}

console.log();

// print all odd numbers from 1 to 15

for(let i=1; i<=15; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

console.log();

// another form for printing odd numbers from 1 to 15

for(let i=1; i<=15; i+=2){
    console.log(i);
}

console.log();

// print all even numbers from 2 to 10

for(let i=2; i<=10; i+=2){
    console.log(i);
}

console.log();

// write a for loop to print multiplication table of 5

for(let i=1; i<=10; i++){
    console.log(`5 * ${i} = ${5*i}`);
}

console.log();

// another way

for(let i=5; i<=5*10; i+=5){
    console.log(`5 * ${i/5} = ${i}`);
}

console.log();

// nested for loops

for(let i=1; i<=3; i++){
    console.log(`Outer loop: ${i}`);
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}


console.log();

// while loops in js

let i = 1;

while(i <= 5){
    console.log(i);
    i++;
}

// break keyword
// break keyword brings the control outside the loop when encountered

console.log();

i = 1;

while(i <= 5){
    if(i === 3){
        break;
    }
    console.log(i);
    i++;
}
