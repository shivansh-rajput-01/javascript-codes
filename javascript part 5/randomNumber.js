// as we know that Math.random() gives values in range[0,1)
// if we want a range of integers we have to apply some steps

// step 1 -> first identify the range in which you want numbers
// step 2 -> multiply the generated value by maximum number in range
// explanation suppose range is 1 to 10 so use Math.random() * 10 this will give numbers between 0 to 10 , excluding 10
// the number generated is not integer so use floor value
// step 3 -> floor the generated value at step 2 by Math.floor(Math.random() * maxNumberOfLimit) this will give value
// from 0 to maxNumberOfLimit - 1 but we have to generate 1 to 10 so we can add 1 in generated number
// step 4 -> -----------'Math.floor(Math.random() * maxNumberOfLimit) + 1'----------- this is a general formula

// note above formula is for [1,maxNumberOfLimit] but if want other range we can change it accordingly

let random1 = Math.floor(Math.random() * 10) + 1; // generates between 1 to 10
let random2 = Math.floor(Math.random() * 5) + 1; // generates between 1 to 5
console.log(random1);
console.log(random2);

// how would we generate a range between 21 to 25?
// for such ranges we should first calculate the difference i.e. 25-21 = 4 so just write the code for 0 to 4 generator 
// this will give numbers 0,1,2,3,4 and we can add in them the lower limit i.e. 21 in this case 
// so 0->21, 1->22, 2->23, 3->24 and 4->25

let random3 = Math.floor(Math.random() * 5) + 21;
console.log(random3);

// ------------------------------------------------------------------------------------------------------------------------
// Summary:
// - Math.random() → [0, 1)
// - Math.floor(Math.random() * N) → [0, N-1]
// - Math.floor(Math.random() * N) + 1 → [1, N]
// - Math.floor(Math.random() * (max - min + 1)) + min → [min, max]
// ------------------------------------------------------------------------------------------------------------------------
