let numbers = document.querySelectorAll(".number");
let display = document.querySelector(".display");
let clear = document.querySelector(".clear");
let operator = document.querySelectorAll(".operators");
let equal = document.querySelector(".equal");
let cross = document.querySelector(".cross");
let bracket = document.querySelectorAll(".bracket");
let decimal = document.querySelector(".decimal");
display.innerText = "";

function numbersDisplay(){
    let n = this.innerText;
    display.innerText = `${display.innerText}${n}`;
}

function operatorDisplay(){
    let val = this.innerText;
    let d = display.innerText;
    if(d.length == 0) return;
    if(d[d.length-1] == ".") return;
    if("÷-+×".indexOf(d[d.length - 1]) != -1){
        d = d.slice(0,d.length-1) + val;
        display.innerText = d;
    }else{
        display.innerText = `${display.innerText}${val}`;
    }
}

for(num of numbers){
    num.addEventListener("click",numbersDisplay);
}

for(ops of operator){
    ops.addEventListener("click",operatorDisplay);
}

clear.addEventListener("click", () => {
    display.innerText = "";
});

// equal.addEventListener("click",() => {
//     console.log("clicked");
//     let d = display.innerText;
//     console.log
//     let newD = "";
//     for(let i=0; i<d.length; i++){
//         if(d[i] != "(" && d[i] != ")"){
//             newD += d[i];
//         }
//     }
//     console.log(newD);
//     d = newD;
//     console.log(d);
//     let arr = [];
//     let previous = -1;
//     for(let i=0; i<d.length; i++){
//         if("÷-+×".indexOf(d[i]) != -1){
//             arr.push(d.slice(previous+1, i));
//             arr.push(d[i]);
//             previous = i;
//         }
//     }
//     if(previous != d.length - 1){
//         arr.push(d.slice(previous+1));
//     }
//     let result = arr[0];
//     result = Number(result);
//     console.log(result);
//     console.log(arr);
//     for(let i=1; i<arr.length; i++){
//         console.log("loop entered");
//         if("÷-+×".indexOf(arr[i]) != -1) continue;
//         let val1 = result;
//         let val2 = Number(arr[i]);
//         console.log(val1,val2);
//         if(arr[i-1] == "÷"){
//             result = val1 / val2;
//             console.log(result);
//         }else if(arr[i-1] == "-"){
//             result = val1 - val2;
//             console.log(result);
//         }else if(arr[i-1] == "+"){
//             result = val1 + val2;
//             console.log(result);
//         }else if(arr[i-1] == "×"){
//             result = val1 * val2;
//             console.log(result);
//         }
//     }
//     display.innerText = result;
// });

equal.addEventListener("click", () => {
    let d = display.innerText;
    let newD = "";
    for(let i=0; i<d.length; i++){
        if(d[i] == "÷") newD += "/";
        else if(d[i] == "×") newD += "*";
        else newD += d[i];
    }
    console.log(newD);
    display.innerText = eval(newD);
});

cross.addEventListener("click", () => {
    display.innerText = display.innerText.slice(0, display.innerText.length-1);
});

for(b of bracket){
    b.addEventListener("click", function(){
        console.log("bracket clicked");
        display.innerText = display.innerText + this.innerText;
    });
}

decimal.addEventListener("click", function dotPut(){
    let len = display.innerText.length;
    let d = display.innerText;
    let i;
    for(i=len-1; i>=0; i--){
        if("÷-+×".indexOf(d[i]) != -1) break;
    }
    i++;
    for(let j=i; j<d.length; j++){
        if(d[j] == ".") return;
    }
    if(display.innerText[display.innerText.length - 1] != ".") display.innerText = display.innerText + ".";
});
