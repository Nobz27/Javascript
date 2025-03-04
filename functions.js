//  Function - is a reusable block of code {} . Functions create their own scope for variables.

// defining a function --- regular functions vs arrow functions

function doSomething() {
  console.log("Block of code to be executed");
  console.log("Regular function");
}

const doSomethingElse = () => {
  console.log("Block of code to be executed");
  console.log("Arrow function");
};

// using/calling/invoking functions --- as many times as we want

// doSomething();
// doSomethingElse();
// doSomethingElse();
// doSomethingElse();
// doSomething();

//  write a function to convert money to different currencies depending on the country provided

function convertCurrency(amount, country) {
  // amount and country are parameters /arguments for this cunftion - they are variables only accessible inside this functions block/scope
  // any other variable created within this block of code is only accessible here.

  console.log("Hello my friend from " + country);
  if (country == "USA") {
    console.log("Amount is:" + amount / 129 + "USD");
  } else if (country == "Uganda") {
    console.log("Amount is:" + amount * 28 + "UGSH");
  } else if (country == "Japan") {
    console.log("Amount is:" + amount * 1.17 + "YEN");
  } else {
    console.log("Amount is:" + amount + "KSH");
  }
}
// calling the function
convertCurrency(2000, "USA");
convertCurrency(2000, "Uganda");
convertCurrency(2000, "Japan");
convertCurrency(543, "Japan");

// global scope vs block scope

// write a function that takes a number as an argument and checks if the number is even or odd
function checkIfEvenOrOdd(number) {
  if (number % 2 == 0) {
    console.log("The number" + number + "is Even");
  } else {
    console.log("The number" + number + "is odd");
  }
}
checkIfEvenOrOdd(90);
checkIfEvenOrOdd(901);
checkIfEvenOrOdd(875);
checkIfEvenOrOdd(876);

// write a function that takes in an array of names, loops through the names changing them to all uppercase
function changeNamesToUppercase(names) {
  // ["albert" , "norbert"]
  let finalArray = [];
  for (let index = 0; index < names.length; index + 1) {
    finalArray.push(names[index].toUpperCase());
  }
  console.log(finalArray);
}
changeNamesToUppercase(["albert", "norbert"]);
changeNamesToUppercase(["joy", "jane", "jack", "japhet", "jones", "june"]);

// strings and numbers and arrays
// almost everything in javascript is an object
