// Higher order functions have two main characteristics
// 1. They can take other functions as arguments
// 2. They could return a function

function removeDuplicates(listOfWords) {
  //loop through words
  // add unique words to new array
}
function calculateIntrest(amount, rate) {
  //return interest = rate/100 * amount
}
function contactPerson(userDetails, sendEmail, sendMessage) {
  // userDetails {name: Albert, phone: "072434", email: "albert@eldohub.co.ke", age:39, isKenyan: true}
  //validate phone format
  // other tasks---- conditional statements
  //sendEmail - a function to be called woth email
  sendEmail(userDetails.email);
  //sendMessage - a function to be called with phone number
  sendMessage(userDetails.phone);
}
function mailerFunction(email) {
  //sending email logic here
  console.log("Sending drafted email to:" + email);
}
0;
function smsSender(phone) {
  // sending messages logic here + api interaction
  console.log("Sending drafted sms to:" + phone);
}

function validatePassword(password) {
  //more than 8 characters , contains numbers
  if (password.length < 8) {
    console.log("Weak Password ! Must contain more than 8 characters");
    return "Not allowed";
  }
  console.log("Done Checking");
}

const result = validatePassword("hedtd");
console.log(result);
