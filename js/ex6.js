console.log("Arham's Output from Tutorial 4 Example 6");

let random = Math.floor(Math.random() * 101);
console.log(random);

function Guess(){
    var count = 1;
    while(count != 0){
        userGuess = prompt("Guess the number: ");
        if (userGuess == random){
            count ++;
            console.log(`Correct! It took you ${count - 1} attempts to guess the correct number`);
            break;
    } else if (userGuess < random/2){
        count ++;
        console.log('Too low, guess again');
    } else if (userGuess > random /2 && userGuess < random){
        count ++;
        console.log('Low, guess again');
    } else if (userGuess > random*2){
        count++;
        console.log('Too high, guess again');
    } else if (userGuess < random*2 && userGuess > random){
        count++;
        console.log('High, guess again');
    }
}
}

Guess();
