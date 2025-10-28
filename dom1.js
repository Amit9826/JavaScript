document.getElementById('head').textContent="from js";
document.getElementById('head1').textContent="from js 2 2";
document.getElementById('head2').textContent="from js 3 ";



let a = document.getElementById('am');
a.textContent = "Another way";

let b = document.getElementById('lily')
b.innerHTML = "<i>LILY BROOOOO   </i>"

let c = document.getElementById('sam')
c.innerHTML = "<i><u>a am aaaaa</i></u>"
c.setAttribute('align','center')


document.body.setAttribute('bgcolor', 'red')


document.getElementById('head').removeAttribute('style')

let d = document.getElementById('abc');
d.setAttribute('src', 'man.jpg')

