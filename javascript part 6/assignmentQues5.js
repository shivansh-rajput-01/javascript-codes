// write a js function to generate a random number in range(start,end)

function randomNumber(start,end){
    return (Math.floor(Math.random() * (end - start + 1)) + start);
}

console.log(randomNumber(21,89));
