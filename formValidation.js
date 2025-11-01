
function validate() {
    let name = document.querySelector('#name').value;
    let address = document.querySelector('#address').value
    let age = document.querySelector('#age').value
    let contact = document.querySelector('#contect').value
    let city = document.querySelector('#city').value
      let email = document.querySelector('#email').value
         let pass = document.querySelector('#pass').value
          let cpass = document.querySelector('#cpass').value

    if (name === "") {
        document.querySelector('#error').innerHTML = "Please fill this field";
        document.querySelector('#name').focus();
        return false;
    }
    else if (address === "") {
        alert("Please fill your Address");
        document.querySelector('#address').focus();
        return false;
    }
    else if (age === "") {
        alert("Please fill your Age");
        document.querySelector('#age').focus();
        return false;
    }
    else if (isNaN(age)) {
        alert("Please enter Age in numbers only");
        document.querySelector('#age').focus();
        return false;
    }
    else if (age.length > 3) {
        alert("Age should not be more than 3 digits");
        document.querySelector('#age').focus();
        return false;
    }
    else if (contact === "") {
        alert("Please fill your Contact number");
        document.querySelector('#contect').focus();
        return false;
    }
    else if (isNaN(contact)) {
        alert("Contact number should contain digits only");
        document.querySelector('#contect').focus();
        return false;
    }
    else if (contact.length !== 10) {
        alert("Contact number must be exactly 10 digits");
        document.querySelector('#contect').focus();
        return false;
    }
      else if (contact.length < 10 || contact.length > 10) {
        alert("Contact number must be exactly 10 digits");
        document.querySelector('#contect').focus();
        return false;
    }
    else if (city === "") {
        alert("Please fill your City");
        document.querySelector('#city').focus();
        return false;
    }
     else if (email === "") {
        alert("Please Enter your Email");
        document.querySelector('#email').focus();
        return false;
    }
       else if (!(email.includes ('@gmail.com')) ){
        alert("Please Enter @gmail.com in email");
        document.querySelector('#email').focus();
        return false;
    }
        else if (pass == ""){
        alert("Please Enter Your Password");
        document.querySelector('#pass').focus();
        return false;
    }
         else if (cpass == ""){
        alert("Please Re Enter Password");
        document.querySelector('#cpass').focus();
        return false;
    }
    else if (pass!=cpass) {
        alert("Please Password Mis Match");
        document.querySelector('#cpass').focus();
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}