  function showMobile() {
      document.getElementById('displayArea').innerHTML ='Mobile <img src="download.jpeg" alt="Mobile">';
    }

    function showLaptop() {
      document.getElementById('displayArea').innerHTML ='Laptop <img src="laptop.jpg" alt="Laptop">';
    }

    function showTablet() {
      document.getElementById('displayArea').innerHTML ='Tablet <img src="tablet.jpg" alt="Tablet">';
    }


    let h = document.getElementsByTagName('h1');
    console.log(h[0]);
    h[0].style.color="red";


    let a = document.getElementsByTagName('h2');
    console.log(a[0])
    a[0].style.color="blue";
    a[1].style.color="yellow";
    a[2].style.color="black";
    a[3].style.color="green";
    a[4].style.color="pink";
    a[5].style.color="skyblue";

    let b = document.getElementsByClassName('head');
    b[0].style.color="red";
    
    b[1].style.color="yellow";
    b[2].style.color="green";
    b[3].style.color="pink";


    let s = document.querySelector('.sam');
    s.style.color="pink"
    s.style.backgroundColor="green"

    let li = document.querySelectorAll('.tv')
    li[1].style.color="red";

  
    function img() {
      document.querySelector('display').innerHTML ='Mobile <img src="download.jpeg" alt="Mobile">';
    }

    function sam() {
      document.querySelector('display').innerHTML ='Laptop <img src="laptop.jpg" alt="Laptop">';
    }

    function demo() {
      document.querySelector('display').innerHTML ='Tablet <img src="tablet.jpg" alt="Tablet">';
    }