// write a js program to find sum of digits in a number

let num = 189;
let sum = 0;
while(num !== 0){
    sum += num % 10;
    num = Math.floor(num/10);
}

console.log(`sum of digits is: ${sum}`);
