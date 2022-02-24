console.log("Arham's Output from Tutorial 4 Example 4");

var arr =[];
var a =[];
while ( word != "stop"){
    var word = prompt('Enter your choice of words ').toLowerCase();
    arr.push(word);
}
function print_arr(arr){
    for (i=0; i < arr.length - 1; i++){
        a.push(arr[i])
    }
    console.log(`You entered the following: ${a}`)
}
print_arr(arr);
