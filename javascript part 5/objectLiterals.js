// Object literals are collections of properties (key–value pairs). 
// They are used to store keyed collections and complex entities.
// 
// We generally define them as constants (just like arrays). Even though
// the object reference is constant, its internal properties can still be
// changed, added, or deleted. 
// 
// Declaring the object as const prevents accidentally reassigning it to
// another object or to null, helping protect the reference.
// 
// Note: Keys in object literals must be unique. If a key appears multiple
// times, the last key–value pair overwrites the previous ones.

const student = {
    name:'shivansh',
    age: 18,
    gender:'m',
    marks: 90 
};

console.log(student);// { name: 'shivansh', age: 18, gender: 'm', marks: 90 }

// -----------------------------------------------------------------------------------------------------------------------------
// get values of keys in object literals
// there are two notations used for this purpose
// objName['keyName'] in it the key name must be in string or a valid expression that evaluates to one
// objName.keyName -> keyName must be a valid identifier (no quotes)

console.log(student['name']);// shivansh
console.log(student.name);// shivansh
// we generally use objName.keyName notation but if key value as a string is stored in variable then we must use [] notation

let keyName = 'name';
console.log(student[keyName]);// shivansh
console.log(student.keyName);// undefined
// this occurs because the . notation checks the keyName as a key in student but [] notation first evaluates the expression 
// keyName in this case and then replace it with 'name' -> the value of keyName and then gets its value
// ------------------------------------------------------------------------------------------------------------------------------

// let us see an object literal with some other keys

const randomObj = {
    1:'hello',
    2:'hi',
    true:'yes',
    null:'what',
    undefined:'wow'
};

console.log(randomObj);
// output
// {
//   '1': 'hello',
//   '2': 'hi',
//   true: 'yes',
//   null: 'what',
//   undefined: 'wow'
// }

// here we used 1 and 2 as keys but in output they become '1' and '2' also the keywords used as keys i.e. true, null, undefined 
// works properly
// this is because js internally converts object literals keys into string so 1->'1' & 2->'2'
// when we use them with [] notation like randomObj[1] here also 1->'1' and value is given
// we cannot use randomObj.1 as 1 is not a valid identifier name as we can only use valid identifier with . notation.

console.log(randomObj[1]);// hello
console.log(randomObj['1']);// hello
console.log(randomObj[2]);// hi
console.log(randomObj['2']);// hi
console.log(randomObj[true]);// yes
console.log(randomObj['true']);// yes
// here we can see if if do not use '' with keys they give same result as when used with '' as js internally converts them into 
// string

// console.log(randomObj.1); error
// console.log(randomObj.2); error as 1 and 2 are not valid identifier
console.log(randomObj.true);// yes
console.log(randomObj.null);// what
console.log(randomObj.undefined);// wow they give values as they are keys in randomObj and are valid identifiers

// but what if we do not write '' with student[name] will it work?

// console.log(student[name]);// error name is not defined, this occurs because js tried to evaluate name first which is not 
// defined so error occured before conversion to string 
// When we use literals(A literal is a fixed value written directly into the code, like numbers, booleans, null, etc.) inside 
// brackets, JavaScript evaluates them directly (no variable 
// lookup needed), then converts the result to a string key.
// But name (unquoted) is not a literal
// It’s an identifier, so JS assumes it’s a variable -> must exist in scope -> if not, error.
//-------------------------------------------------------------------------------------------------------------------------

// traversing over an object

// we can use for in loop for this purpose

for(let key in student){
    console.log(`${key} : ${student[key]}`);
}
// output
// name : shivansh
// age : 18
// gender : m
// marks : 90

// here key takes the value of each key in student which is a string internally and in student[key] it evaluates to the value
// corresponding to the key

//--------------------------------------------------------------------------------------------------------------------------

// adding a property to and object

// we can add a property by ---> onjName.newPropertyName = newValue;

student.grades = 'A+';

console.log(student);// { name: 'shivansh', age: 18, gender: 'm', marks: 90, grades: 'A+' }

//---------------------------------------------------------------------------------------------------------------------------

// updating a value in object literals

// we can do so by ---> student.oldProperty = newValue;

student.age = 19;
console.log(student);// { name: 'shivansh', age: 19, gender: 'm', marks: 90, grades: 'A+' }

//-------------------------------------------------------------------------------------------------------------------------

// deleting a property from object literals

// we can do so by using delete operator

// delete objName.propertyName;

delete student.age;

console.log(student);// { name: 'shivansh', gender: 'm', marks: 90, grades: 'A+' }

//------------------------------------------------------------------------------------------------------------------------

