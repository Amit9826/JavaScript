function fun()
{
    let wrapper = document.querySelector('#container');
    wrapper.classList.add('wrapper');
}
function remove()
{
    let container=document.querySelector('#container');
    container.classList.remove('wrapper');
}

function both()
{
    let cn = document.querySelector('#container');
    cn.classList.toggle('wrapper')
}


function con()
{
  let a =  document.body.classList.toggle('hello');
}


function amt()
{
  let a =  document.body.classList.toggle('hello');
  console.log(a);
  if(a==true)
  {
    document.querySelector('#btn').textContent = "Light";
  }else{
    document.querySelector('#btn').textContent = "Dark";

  }
  
  

}