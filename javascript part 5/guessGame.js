let max = prompt('Enter maximum number of range: ');
while(max <= 1){
    max = prompt('Enter a maximum number greater than 1');
}
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt('Enter your guess: ');
guess = guess.toLowerCase();
let numberOfGuesses = 1;
let hintNumber = 2;

while(true){
    if(guess === 'quit'){
        console.log('You quitted');
        break;
    }else if(guess == random){
        console.log(`Congrats you guessed right ${random} is random number`);
        console.log(`you took ${numberOfGuesses} attempts to guess it`);
        break;
    }else if(guess > random){
        guess = prompt(`you entered a larger number please enter smaller number: `);
        guess = guess.toLowerCase();
    }else if(guess < random){
        guess = prompt(`you entered a smaller number please enter larger number: `);
        guess = guess.toLowerCase();
    }else if(guess === 'hint'){
        let newRandom = Math.floor(Math.random() * 5) + 5;
        if(hintNumber == 0){
            guess = prompt('Enter a guess number your hints are completed: ');
        }else{
            guess = prompt(`Enter a number between ${random - newRandom} and ${random + newRandom}`);
            hintNumber--;
        }
        numberOfGuesses--;
        guess = guess.toLowerCase();
    }
    numberOfGuesses++;
}
