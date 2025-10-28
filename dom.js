document.getElementById('head').style.backgroundColor="yellow";

let head = document.getElementById('abc');
head.style.backgroundColor="lightblue";
head.style.padding="40px"

let h = document.getElementById('aaa');
h.style.backgroundColor="blue";
head.style.margin="40px"

let e = document.getElementById('bbb');
e.style.backgroundColor="red";
e.style.padding="150px";
e.style.margin="100px";

let d = document.getElementById('nnn');
d.style.backgroundColor="pink";
d.style.padding="10px"



let s = document.getElementById('sss')
s.style.cssText = "backround-color:red;color:white;padding:20px"


let tag = document.createElement('h1')
    tag.textContent = "new element from js ";
    console.log(tag);


    document.getElementById('parent').append(tag)

