// Write a JavaScript function that accepts a list of country names as input and returns the longest country name as
//  output.

function largest(arr){
    let n = arr.length;
    let maxIdx = 0;
    for(let i=1; i<n ;i++){
        if(arr[i].length > arr[maxIdx].length) maxIdx = i;
    }
    return arr[maxIdx];
}

let arr = ["china","uae","russia","united state of america"];

console.log(largest(arr));

