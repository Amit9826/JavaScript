//    1. Create a form that takes a user’s name as input.
// 👉 When the user submits, display their name in uppercase on the webpage.
// User input (direct variable)

// let name = prompt("Enter Any Name Lowercase")
let name = "Amit"; 
let upperca = n.toUpperCase();  
console.log("Your name in uppercase is:", upperca);



   function Upper() {
      let userName = document.getElementById("Box").value;
      let upperName = userName.toUpperCase();
      document.getElementById("result").textContent ="Your name in UPPERCASE is: " + upperName;
      return false; 
    }


//     2. Create a form that takes a city name as input.
// 👉 When submitted, show it in lowercase and print
// "You live in <cityname>" using template literals.

// let = city = prompt("Enter Any City")
let city = "Bhopal"; 
let lowerca = c.toLowerCase(); 
console.log(`You live in ${lowerca}`);



function show() {
      let cityInput = document.getElementById("Box").value;
      let lowerCity = cityInput.toLowerCase();
      document.getElementById("Result").textContent =`You live in ${lowerCity}`;
      return false;
    }



//     3. Make a form that asks for a string with extra spaces (e.g. " Hello World ").
// 👉 Show output after applying trim(), removing spaces from both sides.
let text = "   Hello World   ";
let trimmed = text.trim();
console.log("After trim(): " + trimmed);


// 4. Make a form with an input having spaces only at the beginning.
// 👉 Show how trimStart() removes only starting spaces.
let tex = "     Amit Suryawanshi";
let tri= tex.trimStart();
console.log("After trimStart():", tri);

// 5. Make another form where input has spaces only at the end.
// 👉 Show how trimEnd() removes only trailing spaces.
// String with spaces only at the end
let t = "Rahul Borban     ";
let trimm= t.trimEnd();
console.log("After trimEnd():", trimm);



// 6. Create a form that takes two inputs — first name and course name.
// 👉 Use template literals to print:
// "My name is <firstname> and I am learning <course>."
    function showMSG() {
      let name = document.getElementById("first").value;
      let course = document.getElementById("course").value;
      let message = `My name is ${name} and I am learning ${course}.`;
      document.getElementById("output").textContent = message;
      return false;
    }



// 7. Create a form that takes any message input.
// Show all versions:
// Uppercase
// Lowercase
// Trimmed
// Using Template Literal:
// "Your final message is: <trimmed version>"

let message =  prompt("Enter any message:");
let upper = message.toUpperCase();
let lower = message.toLowerCase();
let trimme = message.trim();
let template = `Your final message is: ${trimme}`;

console.log("Uppercase:", upper);
console.log("Lowercase:", lower);
console.log("Trimmed:", trimme);
console.log(template);



