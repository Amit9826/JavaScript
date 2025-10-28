// element
let tag = document.createElement('h1')
    tag.textContent = "new element from js ";
    console.log(tag);


    document.getElementById('parent').append(tag)


    let a = document.createElement('p')
    a.textContent = "target is p tag ";
    console.log(a);


    document.getElementById('amit').append(a)


    let ul = document.getElementById('list').append(li)
    for(let i=1; i<=10; i++)
    {
      let li = document.createElement('li');
      li.textContent = "List number " + i;
      if(i%2==0){
        li.style.backgroundColor = "green";
        li.style.color = "white";
        li.style.padding = "12px";
      }
    }


     function red()
    {
      document.body.style.backgroundColor = "red"
        alert("Running")
        
    }


    function color(c1){
      document.body.style.backgroundColor = c1;
    }

  
