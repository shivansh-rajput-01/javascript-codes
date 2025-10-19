let fruits = ['mango','apple','banana','litchi','guava','pineapple','watermelon'];

// loop over simple array
for(let i=0; i<fruits.length; i++){
    console.log(i, fruits[i]);
}

// loop over nested array

let study = [
    ['c','maths','physics'],
    ['electronics','mechanics','soft skills'],
    ['dsa','coa','dstl'],
    ['tafl','maths 4','os','oops','human values','python']
];

// nested loop for nested array study.length will give number of subarrays i.e. 4
// study[0].length = 3 ; study[1].length = 3 ; study[2].length = 3 ; study[3].length = 6
// so for these changing size we will use study[i].length

console.log();

for(let i=0; i<study.length; i++){
    console.log(`subarray ${i}`);
    for(let j=0; j<study[i].length; j++){
        console.log(study[i][j]);
    }
    console.log();
}


// for of loop
// used to traverse collections like arrays and strings

for(let fruit of fruits){
    console.log(fruit);
}
console.log();

for(let char of "apna college"){
    console.log(char);
}
console.log();

// for of loop for nested arrays

for(let sem of study){
    for(let sub of sem){
        console.log(sub);
    }
    console.log();
}
