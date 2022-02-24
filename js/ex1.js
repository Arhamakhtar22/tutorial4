/* Tutorial 4
    Example 1
*/

console.log("Arham's Output from Tutorial 4 Example 1")

let num1 = parseInt(prompt("Please enter a number"));
let num2 = parseInt(prompt("Please enter another number"));
let oop = prompt("Enter the Mathematical Operation you would like to perform");

function myCalc(num1, num2, oop) {
    if (oop == "+") {
        console.log(num1 + num2)
    } else if (oop == "-") {
        console.log(num1 - num2)
    } else if (oop == "*") {
        console.log(num1 * num2)
    } else if (oop == "/") {
        console.log(num1 / num2)
    } else {
        console.log("Invalid operation")
    }
}

myCalc(num1,num2,oop);

