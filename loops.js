// A loop is used to execute a block of code{}repeatedly for a number of times.

// while loop, for loop

let startingPoint = 40;

while (startingPoint < 400) {
  console.log("loop number" + startingPoint);
  startingPoint = startingPoint + 3; // increase starting point by three after every loop
}

//  lists of Variables
let studentMarks = [23, 56, 60, 65, 75, 80, 90, 55, 62];
console.log(studentMarks[1]);

let index = 0;
while (index < studentMarks.length) {
  //grading
  let currentMarks = studentMarks[index];
  if (
    currentMarks < 0 ||
    currentMarks > 100 ||
    typeof currentMarks !== "number"
  ) {
    console.log("Error:- Invalid mark");
  } else if (currentMarks >= 80) {
    console.log("Mark" + currentMarks + "is Grade: A");
  } else if (currentMarks >= 65) {
    console.log("Mark" + currentMarks + "is Grade: B");
  } else if (currentMarks >= 50) {
    console.log("Mark" + currentMarks + "is Grade: C");
  } else if (currentMarks >= 40) {
    console.log("Mark" + currentMarks + "is Grade: D");
  } else {
    console.log("Mark" + currentMarks + "is Grade: E");
  }
  //increment index
  index = index + 1;
}

//Rewrite this loop using a for loop
