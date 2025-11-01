function validate()
{
    let name = document.querySelector('#name').value
    let address = document.querySelector('#address').value
     let age = document.querySelector('#age').value
      let contect = document.querySelector('#contect').value
       let city = document.querySelector('#city').value

      if(name == "" ){
        document.querySelector('#error').innerHTML = "please fill this field";
        document.querySelector('#name').focus()
        return false;
    }
    else if(address == "")
    {
        alert("Please fill you Address")
          document.querySelector('#address').focus()
        return false;
    }
    else if(age == "" ){
         alert("Please fill you Age")
          document.querySelector('#age').focus()
        return false;
    }
    else if(isNaN(age))
    {
       alert("Please fill you Age in number")
          document.querySelector('#age').focus()
        return false;  
    }

    else if(contect == "" )
        {
         alert("Please fill you Contect")
          document.querySelector('#contect').focus()
        return false;
    }
    else if(city == "" ){
         alert("Please fill you City")
          document.querySelector('#city').focus()
        return false;

}
}