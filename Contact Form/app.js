function validate() {
    let name =
        document.getElementById("name").value;
    let phone =
        document.getElementById("phone").value;
    let email =
        document.getElementById("email").value;
    let message =
        document.getElementById("message").value;
    let error_message =
        document.getElementById("error_message");

    error_message.style.padding = "10px";

    let errors = [];

    if (name.length == 0) {
        errors.push("Please Enter a Name");
    }
    if (isNaN(phone) || phone.length != 10) {
        errors.push("Please Enter a valid Phone Number");
    }
    if (email.indexOf("@") == -1) {
        errors.push(
            "Please Enter a valid Email");
    }
    if (message.length ==0) {
        errors.push(
            "Please Enter message");
    }
    if (message.length > 0 && message.length <= 5) {
        errors.push(
            "Please Enter More Than 5 Characters");
    }

    if (errors.length > 0) {
        document.getElementById("error_message").style.background ="#fe8b8e";
        error_message.innerHTML =
            errors.join("<br>");
        return false;
    }
    else {
        alert(
            "Form Submitted Successfully!");
        return true;
    }

}

function functionToDisappearInnerHTML() {
    setTimeout(() => {
        console.log("Delayed for 1 second.");
        document.getElementById("error_message").innerHTML = "";
        document.getElementById("error_message").style.background ="#fff";
        document.getElementById("error_message").style.padding = "0";
      }, "3000");
}