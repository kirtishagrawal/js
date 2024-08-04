let string = "Kirtish"
let stringToNumber = Number(string)         // N in Number should be capital, convert in number
let stringToBoolean = Boolean(string)       // B in boolean should be capital, convert in boolean

console.log("string conversion")
console.log(typeof string);
console.log(typeof stringToNumber);
console.log(typeof stringToBoolean);

console.log(stringToNumber);                // NaN is for not a number
console.log(stringToBoolean);               // any value is true, no value or 0 is false

let un

console.log(un);                            // undefined value
console.log(typeof un);                     // type id also undefined

let n = null

console.log(n);                             // value is null
console.log(typeof n);                      // type is object