// API is any method use => fatch function

 async function access( ) {

    let data = await fetch('https://jsonplaceholder.typicode.com/posts')

    let res = await data.json()
    
    // console.log(res);

    let result = res.map((e)=>` 
    <tr>
    <td> ${e.userId} </td>
     <td> ${e.id} </td>
      <td> ${e.title} </td>
      </tr>
    `
 ).join("")

 document.querySelector('#showdata').innerHTML = result

 access()