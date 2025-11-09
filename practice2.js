// 1. Use filter() to get only students who passed (marks >= 50).
// 2. Print the names of passed students using map() after filter.

const students = [
  { name: "Aman", marks: 85 },
  { name: "Preet", marks: 45 },
  { name: "Karan", marks: 60 },
  { name: "Meena", marks: 35 }
];
const passedStudents = students.filter(student => student.marks >= 50);

const passedNames = passedStudents.map(student => student.name);

console.log("Students who passed:", passedNames);








// 1. Create two arrays of fruits and vegetables
const fruits = ["Apple", "Banana", "Mango"];
const vegetables = ["Carrot", "Potato", "Tomato"]


// 2. Merge them using the spread operator
const mergedArray = [...fruits, ...vegetables];
console.log("Merged Array:", mergedArray);



// 3. Make a copy of the merged array and add one more item ("Milk")
const finalArray = [...mergedArray, "Milk"];
console.log("Final Array:", finalArray);









const colors = ["red", "green", "blue", "yellow"];

// 1. Use array destructuring to store first and second colors
const [firstColor, secondColor] = colors;

// 2. Print both colors
console.log("First Color:", firstColor);
console.log("Second Color:", secondColor);

// 3. Skip the third element and store the fourth color
const [ , , , fourthColor] = colors;
console.log("Fourth Color:", fourthColor);









const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mobile", price: 20000 },
  { name: "Tablet", price: 30000 }
];

// 1 & 2. Use map() to increase price by 10% and return a new array
const updatedProducts = products.map(product => {
  return {
    name: product.name,
    price: product.price * 1.10  // increase by 10%
  };
});

console.log("Updated Products:", updatedProducts);