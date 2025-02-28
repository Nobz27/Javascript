// Conditional statements - allow execution of a code block {} depending on some state/condition/result/comparison

// if else, switch

// const birthYear = 2013;
// const birthYear = 2003;
const birthYear = 1986;
if (2025 - birthYear > 55) {
  console.log("you are too old for this !!!!!!!");
} else if (2025 - birthYear > 18) {
  console.log("Old enough to access site!!!!");
  console.log("Hi, Welcome!");
} else {
  console.log("you are not allowed here !!!!!");
}
// grading marks --- >80 A, >65 B , >50 C , >40 D , <40 E ----

const marks = 80;
// let marks = 180;

if (marks < 0 || marks > 100 || typeof marks !== "number") {
  console.log("Error:- Invalid marks!!");
} else if (marks >= 80) {
  console.log(" Grade A");
} else if (marks >= 65) {
  console.log(" Grade B");
} else if (marks >= 50) {
  console.log(" Grade C");
} else if (marks >= 40) {
  console.log(" Grade D");
} else {
  console.log(" Grade E");
}

// Rewrite this (grading) code using a switch statement
