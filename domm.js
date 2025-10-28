  let num = 0;
  function increase() {
    num = num + 1;  // increase by 1
    document.getElementById("count").textContent = num;
  }
  function decrease() {
    if (num > 0) {  // stop at 0
      num = num - 1;  // decrease by 1
      document.getElementById("count").textContent = num;
    }
}