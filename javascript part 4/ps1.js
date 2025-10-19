// Write a JavaScript program to delete all occurrences of an element num in a given array.
// if
// arr = [1, 2, 3, 4, 5, 6, 2, 3]
// num = 2
// then the result should be
// arr = [1, 3, 4, 5, 6, 3]

let arr = [1,2,3,4,5,6,2,3];
let num = 2;

while(arr.indexOf(num) != -1){
    arr.splice(arr.indexOf(num),1);
}

for(number of arr){
    console.log(number);
}
