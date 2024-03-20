function validate() {
    let name =
        document.getElementById("name").value;
    console.log(name);
    let password =
        document.getElementById("password").value;

    error_message.style.padding = "10px";
    error_message.style.marginBottom = "15px";

    let errors = [];

    if (name.length == 0) {
        errors.push("Please Enter a UserName");
    }

    if (password.length == 0) {
        errors.push("Please Enter a Password");
    }

    if (errors.length > 0) {
        document.getElementById("error_message").style.background = "#fe8b8e";
        error_message.innerHTML =
            errors.join("<br>");
        return false;
    }
    else {
        alert(
            "Login Successfully!");
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