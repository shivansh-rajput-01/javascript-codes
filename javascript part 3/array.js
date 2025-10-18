let arr = ["hello","hi","how","are"];

let marks = [100,98,90,97,98,97];

let names = ["shivansh","yogesh","divyansh","lakshya"];

let info = ["shivansh",19,90];

let empty = [];

console.log(empty.length);//0
console.log(names[0].length);//8
console.log(names[0][0]);//s
console.log(names[0][1]);//h


//inserting values in array

names.push("ansh");//inserts at end of array and returns new length of array
console.log(names);//[ 'shivansh', 'yogesh', 'divyansh', 'lakshya', 'ansh' ]

names.unshift("divya");//inserts at start of array and returns new length of array
console.log(names);//[ 'divya', 'shivansh', 'yogesh', 'divyansh', 'lakshya', 'ansh' ]

//deleting values from array
let deletedElement = names.pop(); // deletes element from end of array and returns deleted element
console.log(`deleted element is: ${deletedElement}`);//deleted element is: ansh
console.log(names);//[ 'divya', 'shivansh', 'yogesh', 'divyansh', 'lakshya' ]

deletedElement = names.shift(); // deletes element from start of array and returns the deleted element
console.log(`deleted element is: ${deletedElement}`);//deleted element is: divya
console.log(names);//[ 'shivansh', 'yogesh', 'divyansh', 'lakshya' ]

// if we delete elements from empty array it returns undefined and not give any error
console.log(empty.pop());//undefined
console.log(empty.shift());//undefined

//indexOf() method returns the index at which an array element is present if not found returns -1
console.log(names.indexOf("shivansh"));//0
console.log(names.indexOf("Shivansh"));//-1

//includes() method returns true if element is present in array else false
console.log(names.includes("shivansh"));//true
console.log(names.includes("Shivansh"));//false

//concat() method 
// array1Name.concat(array2Name) this will return a new array with elements od array1Name followed by array2Name the order is
// maintained in which we use them in method
console.log(names.concat(marks));
// [
//   'shivansh', 'yogesh',
//   'divyansh', 'lakshya',
//   100,        98,
//   90,         97,
//   98,         97
// ]
console.log(marks.concat(names));
// [
//   100,        98,
//   90,         97,
//   98,         97,
//   'shivansh', 'yogesh',
//   'divyansh', 'lakshya'
// ]

console.log(names);//[ 'shivansh', 'yogesh', 'divyansh', 'lakshya' ]
console.log(marks);//[ 100, 98, 90, 97, 98, 97 ]

// reverse() method reverses the order of element in array
// it changes the original array
names.reverse();
console.log(names);//[ 'lakshya', 'divyansh', 'yogesh', 'shivansh' ]
names.reverse();
console.log(names);//[ 'shivansh', 'yogesh', 'divyansh', 'lakshya' ]

//slice() method gives a copy of array or a portion of array
//slice(start,end) where start is inclusive and end is exclusive
//slice() will return complete array copy as start and end are optional
//slice(start) will give a copy from start index till end
//slice(negativeNumber) = slice(array.length - negativeNumber)
console.log(names.slice());//[ 'shivansh', 'yogesh', 'divyansh', 'lakshya' ]
console.log(names.slice(1));//[ 'yogesh', 'divyansh', 'lakshya' ]
console.log(names.slice(1,4));//[ 'yogesh', 'divyansh', 'lakshya' ]
console.log(names.slice(-2));//[ 'divyansh', 'lakshya' ]

// splice() method made change in array in place and returns the deleted elements array
// splice(start, deleteCount, item1,item2---,itemn)
// we give a start index at which we want to perform operation
// deleteCount specifies number of items to be deleted from start index
// after these two we can pass number of elements which are to be added at start index
// it can be used to replace values in array like splice(start, 0 , item)
let d = ['a','b','c','d','e'];
d.splice(4);
console.log(d);//[ 'a', 'b', 'c', 'd' ]
d.splice(0,1);
console.log(d);//[ 'b', 'c', 'd' ]
d.splice(0,2,'g','h');
console.log(d);//[ 'g', 'h', 'd' ]

// sort() method sorts array and in ascending order but first convert array elements in string so not fine for sortinf number 
// arrays

d.sort();
console.log(d);//[ 'd', 'g', 'h' ]

// array references
// in js array variable stores the address of first array element not the array
// so when we compare two different arrays containing same values they give false on equality comparison

let a1 = [1,2,3];

let a2 = [1,2,3];

let a3 = a1;// a3 reference to same array as a1

console.log(a1==a2);//flase
console.log(a1===a2);//flase

console.log(a1==a3);//true
console.log(a1===a3);//true

// constant arrays
// if we use const for array it means that the array variable cannot change its values but the array it points to can be changed 
// due to array references
// ex const arr = [1,2,3]
// arr will hold address of array so we cannot change that address however if we push or pop elements it will not give any error

const new1 = [1];
new1.pop();
console.log(new1);//[]
new1.push(1);
console.log(new1);//[1]

// new1 = [1];// error: TypeError: Assignment to constant variable.

// nested arrays

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(matrix);//[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
console.log(matrix[0]);//[ 1, 2, 3 ]
console.log(matrix[1]);//[ 4, 5, 6 ]
console.log(matrix[2]);//[ 7, 8, 9 ]
console.log(matrix[0][1]);//2

