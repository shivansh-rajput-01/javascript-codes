// write a js function to count number of vowels in a string

function countVowel(str){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i].toLowerCase() == "a"||str[i].toLowerCase() == "e"||str[i].toLowerCase() == "i"||str[i].toLowerCase() == "o"||str[i].toLowerCase() == "u") count++;
    }
    return count;
}

console.log(countVowel("abcdefghijklmnopqrstuvwxyz"));
