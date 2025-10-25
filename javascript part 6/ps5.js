// write a function to return the sum of integers from 1 to n

function sum(n){
    let s = 0;
    for(let i=1; i<=n; i++){
        s += i;
    }
    return s;
}

console.log(sum(5));
