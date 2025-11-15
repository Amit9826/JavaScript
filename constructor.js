let today = new Date()
console.log(today)

console.log(today.getFullYear())

console.log(today.getMonth())

console.log(today.getMonth() + 1) 

console.log(today.getDate())

console.log(today.toLocaleString())

console.log(today.toTimeString())



//Month name & Day name print
let month = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let day= [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

let monthName = month[today.getMonth()];
let dayName = day[today.getDay()];

console.log("Month Name:", monthName);
console.log("Day Name:", dayName);

// Optional: ek hi line me print karne ke liye
console.log(`Today is ${dayName}, ${today.getDate()} ${monthName} ${today.getFullYear()}`);



