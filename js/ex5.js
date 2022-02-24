console.log("Arham's Output from Tutorial 4 Example 5");

let userInput = prompt("Enter a word:").toLowerCase();

function countVowel(userInput){
    const vowels = ["a", "e", "i", "o", "u", "y"]
    let count = 0
    for (let i=0; i < userInput.length; i++){
        if(vowels.includes(userInput[i])){
            count++;
        }
    }
    return count;
}

function checkPalindrome(userInput){
    for (let i=0; i < userInput.length / 2; i++){
        if(userInput[i] !== userInput[userInput.length - 1 - i]){
            return 'and is not a palindrome';
        }
    }
    return 'and is a palindrome';
}

console.log(`${userInput} contains ${countVowel(userInput)} vowels ${checkPalindrome(userInput)}`);
