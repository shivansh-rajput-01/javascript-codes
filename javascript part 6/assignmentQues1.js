// write a js function that returns array elements greater than a number

function greaterArray(arr,n){
    let len = arr.length;
    let sub = [];
    for(let i=0; i<len; i++){
        if(arr[i] > n) sub.push(arr[i]);
    }
    return sub;
}

let a = [1,2,3,4,5,6,6,7];
let n = 2;
let s = greaterArray(a,n);
console.log(`array of elements greater than ${n} in ${a} is : ${s}`);

