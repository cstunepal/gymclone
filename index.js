// Javascript goes here
function formvalidation(){
    const firstname = document.getElementById('fname').value;
    const lastname = document.getElementById('lname').value;
    const mail = document.getElementById('email').value;
    if(firstname == ""){
        alert("Name must be filled out");
        return false;
    }
    if(lastname ==""){
        alert('Name must not be left out');
        return false;
    }
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(mail)){
        alert("Plesase enter a valid email address");
        return false;
    }
}

