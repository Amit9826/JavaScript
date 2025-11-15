let favSub = "";

function getSubject() {
  favSub = prompt("Enter your favorite subject:");
}

function showSubject() {
  document.getElementById("sub").innerHTML = "Your favorite subject is: " + favSub;
}