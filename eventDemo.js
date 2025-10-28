// CLICK event
document.querySelector('#clickBtn').addEventListener('click', function() {
  document.querySelector('#output').innerHTML = "👉 Button clicked!";
});

// DOUBLE-CLICK event
document.querySelector('#dblBtn').addEventListener('dblclick', function() {
  document.querySelector('#output').innerHTML = "🔥 Double click detected!";
});

// MOUSEOVER event
document.querySelector('#box').addEventListener('mouseover', function() {
  this.style.backgroundColor = 'lightgreen';
  this.innerHTML = "Mouse Over!";
});

// MOUSEOUT event
document.querySelector('#box').addEventListener('mouseout', function() {
  this.style.backgroundColor = 'lightblue';
  this.innerHTML = "Hover Me";
});

// KEYDOWN event
document.querySelector('#keyInput').addEventListener('keydown', function() {
  document.querySelector('#output').innerHTML = "⌨️ Key pressed down!";
});

// KEYUP event
document.querySelector('#keyInput').addEventListener('keyup', function() {
  document.querySelector('#output').innerHTML = "🔼 Key released!";
});

// SUBMIT event
document.querySelector('#myForm').addEventListener('submit', function(e) {
  e.preventDefault(); // stop form from refreshing page
  let name = document.querySelector('#name').value;
  document.querySelector('#output').innerHTML = "✅ Form submitted by: " + name;
});
