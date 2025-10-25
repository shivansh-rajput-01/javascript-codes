// write a function to simulate a dice roll and give a number (between 1 to 6)

function diceRoll(){
    let dice = Math.floor(Math.random() * 6) + 1;
    return dice;
}

let val = diceRoll();

console.log(`Value at dice face is ${val}`);
