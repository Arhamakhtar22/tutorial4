console.log("Arham's Output from Tutorial 4 Example 2");

const r = Number(prompt("Enter the circle radius: "));

function calCcircumference(r){
    let cir = 2*Math.PI * r
    console.log(`It's circumference is ${cir}`);
}
function calArea(r){
    let area = Math.PI * Math.pow(r,2)
    console.log(`It's area is ${area}`);
}

calCcircumference(r);
calArea(r);
