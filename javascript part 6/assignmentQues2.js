// write a js function to extract unique characters from a string

function uniqueString(str){
    let n = str.length;
    let s = "";
    for(let i=0; i<n; i++){
        if(s.indexOf(str[i]) == -1) s+= str[i];
    }
    return s;
}

let uniqueStr = uniqueString("abcdabcdeeffg");

console.log(uniqueStr);


