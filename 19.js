var a = 0;
document.querySelector('#start').addEventListener('click', function(){
    document.querySelector('#count').innerHTML= ++a;
})

document.querySelector('#stop').addEventListener('click', function(){
    let g = document.querySelector('#count')
    if(a>0)
    g.innerHTML= --a;
})

document.querySelector('#btn').addEventListener('click',function(){ 
    a=0;
    document.querySelector('#count').innerHTML= a;
})