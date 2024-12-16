// console.log("if-statement");


// if(6<=99){
//     console.log("We are different");
// }


// let student1=60
// let student2=60


// if(student1==student2){
//     console.log("They're both old");
// }


// let age = 16;

// if(age>=21){
//     console.log("You are an adult")

// }else{
//     console.log("You are underage");
// }


// age = 16;

// if(age<13){
//     console.log("Child");
// }else if(age<20){
//     console.log("Teenager");
// }else if(age<64){
//     console.log("Adult");
// }else{
//     console.log("Senior")
// }


// function ticketCalculator(){
// let age = prompt("Enter your age:");
//     if(age<12){
//     console.log("Your ticekt price is $5")
//     }else if(age<19){
//         console.log("Your ticket price is $8")
//     }else{
//         console.log("Your ticket price is $10")
//     }
// }



function weatherOutfit() {
  let temp = prompt("Enter the temperature:");
  let outfit;
  if (temp<15) {
    outfit="It's cold, you should have on a jacket!"
  } else if (temp<26) {
    outfit="It's a bit chilly, you should wear a sweater."
  } else {
    outfit="It's warm out, why don't you wear a t-shirt?"
  }
  document.getElementById(".weather").innerhtml= outfit;
  console.log(outfit)
}
