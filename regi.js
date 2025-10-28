  // Step 1: Select the form
  const form = document.querySelector('#regForm');

  // Step 2: Add event listener for submit
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // stop page reload

    // Step 3: Get values
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirm = document.querySelector('#confirm').value;
    const msg = document.querySelector('#message');

    // Step 4: Basic validation
    if (name === '' || email === '' || password === '' || confirm === '') {
      msg.innerHTML = '❌ Please fill all fields!';
      msg.style.color = 'red';
    } 
    else if (password !== confirm) {
      msg.innerHTML = '⚠️ Passwords do not match!';
      msg.style.color = 'orange';
    } 
    else {
      msg.innerHTML = `✅ Registration successful!<br>Welcome, ${name}!`;
      msg.style.color = 'green';
    }
  });