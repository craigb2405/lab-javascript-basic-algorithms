// Iteration 1: Names and Input

let hacker1 = "Craig"
let hacker2 = "Max"

console.log(`the drive's name is ${hacker1}`)
console.log(`the navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log  ("Wow, you both have equally long names, XX characters!")
}

// Iteration 3: Loops
// Iteration 3.1

let driverName = ""
for (let i = 0; i < hacker1.length; i++) {
    driverName += hacker1.charAt(i).toUpperCase() + " ";
}

console.log (driverName)

// Iteration 3.2

let nameReverse =""
for (let i = hacker2.length - 1; i >= 0; i--){
    nameReverse += hacker2[i];
}

console.log (nameReverse)

// Iteration 3.3

let array = [hacker1, hacker2]

array.sort();

if (hacker1 == hacker2){
    console.log ("What?! You both have the same name")
} else if (array[0] == hacker2){
    console.log ("Yo, the navigator goes first definitely.")
} else if(array[0] == hacker1){
    console.log("The drivers name goes first")
}

