   // Initialize an array
    let myArray = [1, 2, 3, 4, 5];
    displayArray();

    // Display array in the HTML page
    function displayArray() {
      document.getElementById("output").innerHTML = "Current Array: [" + myArray.join(", ") + "]";
    }

    // Add item to array
    function addItem() {
      let input = document.getElementById("itemInput").value;
      if (input === "") return alert("Please enter a value!");
      // If the input is a number, convert it
      let value = isNaN(input) ? input : Number(input);
      myArray.push(value);
      displayArray();
      document.getElementById("itemInput").value = "";
    }

    // Remove last item
    function removeItem() {
      myArray.pop();
      displayArray();
    }

    // Double all numbers using map()
    function doubleNumbers() {
      myArray = myArray.map(x => (typeof x === "number" ? x * 2 : x));
      displayArray();
    }

    // Filter only even numbers
    function filterEven() {
      myArray = myArray.filter(x => typeof x === "number" && x % 2 === 0);
      displayArray();
    }

    // Reset to original array
    function resetArray() {
      myArray = [1, 2, 3, 4, 5];
      displayArray();
    }