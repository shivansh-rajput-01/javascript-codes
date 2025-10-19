// find largest element in an array

let arr = [1,6,2,3,8,4,5];

let max = arr[0];

for(let i=1; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}


console.log(`maximum element in ${arr} is : ${max}`);
