// write a function which takes array of strings as input and returns a string which is concatenation of all strings 
// in array

function concatenation(arr){
    let n = arr.length;
    let str = '';
    for(let i=0; i<n; i++){
        str += arr[i];
    }
    return str;
}

let a = ["a","b","c","d","e","f","g"];

console.log(`concatenation of ${a} is : ${concatenation(a)}`);

