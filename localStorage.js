
// // setItem()
// localStorage.setItem("username","nikhil")
// localStorage.setItem("userage", 90)
// localStorage.setItem("usercity","Bhopal")
// localStorage.setItem("useremail","nikhil@gmail.com")
// localStorage.setItem("usernumber",785421256554)


// // getItem()
// let name = localStorage.getItem("username");
// console.log(name)

// //removeItem()
// localStorage.removeItem("userage");


// //clear()
// localStorage.clear();


let person = {
    name:"raj",age:45,city:"Bhopal" 
}
localStorage.setItem("userdata",JSON.stringify(person))

let p = JSON.parse(localStorage.getItem("userdata"))
console.log(p.name)

let a = localStorage.getItem("userdata", "age")
console.log(a)