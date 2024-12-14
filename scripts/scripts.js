function multiplyThree(number){
    return number * 3;
}

console.log(multiplyThree(4));

let name = "Blue";
let place = "school";
let time = 8;
let anotherTime = 6;

const familyMember = "mom";

function Story(name, place, time, anotherTime){
    const familyMember = "mom";
    console.log(name + " was late to " + place + " because he awoke at " + anotherTime + " but class started at  " + time + " and his " + familyMember + " had to drive him there");

}

Story("Blue", "school",8, 6,);


function combineNames(firstName, secondName) {
  return firstName + secondName;
}

console.log(combineNames("Luis", " Alan"));

// Prompt user for numbers
let num1 = (prompt("Enter first number: "));
let num2 = (prompt("Enter second number: "));

// Subtraction function
function subtraction(num1, num2) {
  return num1 - num2;
}

// Calculate result
let result = subtraction(num1, num2);

// Display result
console.log("The result is: " + result);
document.write("<p>The result is: " + result + "</p>");



function addProduct(){
let prodName = prompt("Enter the product name:")
document.getElementById("list").innerHTML +=`<p>${prodName}`
}
