console.log("Arham's Output from Tutorial 4 Example 3");

var arr = [];
let sum = 0;
for (var i =0; i < 7; i++) {
    arr.push(parseInt((prompt('Enter some numbers '))))
}
function arraySum(arr){
    for (let i=0; i< arr.length; i++){
        sum += arr[i];
        }
    console.log(`The sum of all array vlaues: ${sum}`);
}

function arrayMin(arr){
    min = Math.min.apply(null,arr);
    console.log(`The minimum value is: ${min}`);
}

function arrayMax(arr){
    max = Math.max.apply(null,arr);
    console.log(`The maximum value is: ${max}`);

}
arraySum(arr);
arrayMin(arr);
arrayMax(arr);
