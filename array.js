// Array -> indexing  ->  address of element 

// let parson = "Amit", 28 -> X

// let person = []


// let student = ["Amit", 22, "bhopal", "sam",5.9 , true];
// console.log(student[4]);

// loop in indexing



// let a = prompt("Enter your name:");
// let b = prompt("Enter your Age:");
// let c = prompt("Enter your DateOfBirth:");

// let emp = []
// for(let a=0; a<5; a++)
// {
//     emp[a] = prompt("Enter a number");
// }
// console.log(emp)


// 10 input from user in store in Array then print the sum of all element

// let user = []
// let sum = 0
// for(let b=0; b<10; b++)
// {
//     user[b] = parseInt(prompt("enter a number"))
//     sum=user+[b];
// }
// console.log(user)
// console.log(sum)



let a = [];
for(let i=0; i<10; i++)
{
    a[i] = parseInt(prompt("Enter a num"))
    if(a[i]%2 != 0)
    {
        console.log("Odd Number Are" + a[i])
    }
}