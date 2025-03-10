const age = "nine" / 80;

console.log(Number.isNaN(age));
console.log(age);

//NaN
console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleTimeString());
console.log(new Date().toUTCString());

// Knowing users/clients timezone
const date = new Date();

// Use Intl.DateTimeFormat to get the time zone
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

console.log("Time Zone", timezone); //africa /Kampala

//Formatting dates and time using Date object.
// 12-03-2025

const recievedDate = new Date("12/03/2025");

console.log(recievedDate.getFullYear());
console.log(recievedDate.getMonth()); // 0 january - 11 December
console.log(recievedDate.getDate());
console.log(recievedDate.getDay()); // Day of the week from 0 sunday to 6 saturday

//Intl Object formatting dates, currencies.... (Intl - International)

console.log(new Intl.DateTimeFormat("en-GB").format(recievedDate));

// web scrapping
