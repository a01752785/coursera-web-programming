function checkdata() {
    var username = document.getElementById("name");
    var emailid = document.getElementById("email");
    // Check if username field is empty
    if (username.value=="") {
        alert("Please enter the name");
        username.focus();
        return false;
    }
    // Check if email field is empty
    if (emailid.value == "") {
        alert("Please enter the email");
        emailid.focus();
        return false;
    }
    // If all is well return true
    alert("Form validation is successful");
    return true;
}