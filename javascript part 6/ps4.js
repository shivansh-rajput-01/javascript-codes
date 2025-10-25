// write a function to display table of a given number

function displayTable(n){
    console.log(`Table of ${n}`);
    for(let i=n; i<=n*10; i+=n){
        console.log(`${n} * ${i/n} = ${i}`);
    }
    console.log();
}

displayTable(7);
displayTable(19);


