//   // Step 1: Access the form
//   const form = document.querySelector('#myForm');

//   // Step 2: Add an event listener for 'submit'
//   form.addEventListener('submit', function(event) {
//     event.preventDefault(); // prevents page reload

//     // Step 3: Get input values
//     let name = document.querySelector('#name').value;
//     let email = document.querySelector('#email').value;

//     // Step 4: Simple validation
//     if (name === '' || email === '') {
//       document.querySelector('#output').innerHTML = "❌ Please fill all fields!";
//     } else {
//       document.querySelector('#output').innerHTML = `✅ Form submitted by: ${name} (${email})`;
//     }
//   });



    // Step 1: Target the form
  let form = document.querySelector('#userForm');

  // Step 2: Add event listener
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // stop page reload

    // Step 3: Get user input
    let name = document.querySelector('#name').value;
    let age = document.querySelector('#age').value;

    // Step 4: Show result
    document.querySelector('#result').innerHTML =
      "Hello " + name + "! You are " + age + " years old.";
  });