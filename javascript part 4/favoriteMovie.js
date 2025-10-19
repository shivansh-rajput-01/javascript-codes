let fav = 'avatar';
let guess = prompt('Guess the favourite movie name: ');
guess = guess.toLowerCase();
let i=1;
while(fav != guess && guess != "quit"){
    console.log('wrong guess');
    guess = prompt('Enter another name: ');
    guess = guess.toLowerCase();
    i++;
}

if(guess === fav){
    console.log('correct guess');
    console.log(`answered in ${i} attempts`);
}else{
    console.log(`better luck next time ${fav} is the answer`);
}
