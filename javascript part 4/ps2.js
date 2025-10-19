// write a js program to find number of digits in a number

let num = 189;
let digit = 0;
while(num !== 0){
    digit++;
    num = Math.floor(num/10);
}

console.log(`number of digits is: ${digit}`);
