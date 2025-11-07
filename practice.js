// Create an object with 5 elements and print it 
// let student = {
//     name : "Aman",
//     age : 22,
//     course : "B.Tech",
//     city : "Bhopal",
//     grade : "A"
// }
// console.log(Object.values(student));

// Create an empty object with 6 keys and take input from the user with the help of form and print it below the on console
//    let student = {
//       name: "",
//       age: "",
//       course: "",
//       grade: "",
//       city: "",
//       year: ""
//     };
//     function studentData() {
//       student.name = document.querySelector('#name').value;
//       student.age = document.querySelector('#age').value;
//       student.course = document.querySelector('#course').value;
//       student.grade = document.querySelector('#grade').value;
//       student.city = document.querySelector('#city').value;
//       student.year = document.querySelector('#year').value;


//       console.log(student);

    
//       return false;
//     }



    //Create an object name student with 5 elements and also create array inside the object and print it on console
    let student = {
        name : "Rahul",
        age : "22",
        course : "B.Tech",
        city : "Bhopal",
        subject : ["Maths", "Physics", "java", "DBMS", "html"]
    }
    console.log(student);
     console.log(student.subject);
      console.log(student.subject[0])



// Create an object with 5 elements and print only one key    
// let student = {
//   name: "Amit",
//   age: 22,
//   course: "B.Tech",
//   city: "Bhopal",
//   grade: "A"
// };

// console.log(student.name); 


//Create an object with 3 elements and all elements should be function which return addition, subtraction, multiplication with arguments  
let calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  }
};

console.log("Addition:", calculator.add(10, 5));        
console.log("Subtraction:", calculator.subtract(10, 5)); 
console.log("Multiplication:", calculator.multiply(10, 5));



    