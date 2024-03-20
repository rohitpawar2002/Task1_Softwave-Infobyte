// Selecting form and input elements
const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const confirmpasswordInput = document.getElementById("confirmpassword");
const passToggleBtn = document.getElementById("pass-toggle-btn");

// Function to display error messages
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

// Function to handle form submission
const handleFormData = (e) => {
    e.preventDefault();

    // Retrieving input elements
    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const genderInput = document.getElementById("gender");

    // Getting trimmed values from input fields
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmpassword = confirmpasswordInput.value.trim();
    const gender = genderInput.value;

    // Regular expression pattern for email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Clearing previous error messages
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    // Performing validation checks
    if (fullname === "") {
        showError(fullnameInput, "Enter your full name");
    }
    if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address");
    }
    if (password === "") {
        showError(passwordInput, "Enter your password");
    }
    if (confirmpassword === "") {
        showError(confirmpasswordInput, "Enter your password");
    }
    if (confirmpassword != password) {
        showError(confirmpasswordInput, "Please Enter same password");
    }
    if (gender === "") {
        showError(genderInput, "Select your gender");
    }

    // Checking for any remaining errors before form submission
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    // Submitting the form
    form.submit();
}

// Toggling password visibility
passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});


let line = document.querySelector(".line");
    let text = document.querySelector(".text");
    let password_strength_box = document.querySelector(".password_strength_box");

    if (passwordInput.value.length == 0) {
        password_strength_box.style.display = "none";
    }

    passwordInput.oninput = function () {
        if (passwordInput.value.length == 0) {
            password_strength_box.style.display = "none";
        }

		// Further code form here
        if (passwordInput.value.length >= 1) {
            password_strength_box.style.display = "flex";
            line.style.width = "5%";
            line.style.backgroundColor = "red";
            text.style.color = "red";
            text.innerHTML = "Weak";

        }
        if (passwordInput.value.length >= 2) {
            password_strength_box.style.display = "flex";
            line.style.width = "10%";
            line.style.backgroundColor = "red";
            text.style.color = "red";
            text.innerHTML = "Weak";
        }
        if (passwordInput.value.length >= 3) {
            password_strength_box.style.display = "flex";
            line.style.width = "20%";
            line.style.backgroundColor = "red";
            text.style.color = "red";
            text.innerHTML = "Weak";
        }

        if (passwordInput.value.length >= 4) {
            password_strength_box.style.display = "flex";
            line.style.width = "35%";
            line.style.backgroundColor = "red";
            text.style.color = "red";
            text.innerHTML = "Weak";

            if ((passwordInput.value.match(/[!@#$%^&*]/))) {
                password_strength_box.style.display = "flex";
                line.style.width = "45%";
                line.style.backgroundColor = "#e9ee30";
                text.style.color = "#e9ee30";
                text.innerHTML = "Medium";
            }

        }

        if (passwordInput.value.length >= 5 &&
            (passwordInput.value.match(/[A-Z]/)) &&
            (passwordInput.value.match(/[a-z]/))) {
            password_strength_box.style.display = "flex";
            line.style.width = "50%";
            line.style.backgroundColor = "#e9ee30";
            text.style.color = "#e9ee30";
            text.innerHTML = "Medium";
        }

        if (passwordInput.value.length >= 6 &&
            (passwordInput.value.match(/[0-9]/))) {
            password_strength_box.style.display = "flex";
            line.style.width = "70%";
            line.style.backgroundColor = "#e9ee30";
            text.style.color = "#e9ee30";
            text.innerHTML = "Medium";
        }
        if (passwordInput.value.length >= 7 &&
            (passwordInput.value.match(/[A-Z]/)) &&
            (passwordInput.value.match(/[a-z]/)) &&
            (passwordInput.value.match(/[0-9]/))) {
            password_strength_box.style.display = "flex";
            line.style.width = "80%";
            line.style.backgroundColor = "#e9ee30";
            text.style.color = "#e9ee30";
            text.innerHTML = "Medium";
        }

        if (passwordInput.value.length >= 8 &&
            (passwordInput.value.match(/[A-Z]/)) &&
            (passwordInput.value.match(/[a-z]/)) &&
            (passwordInput.value.match(/[0-9]/)) &&
            (passwordInput.value.match(/[!@#$%^&*]/))) {
            password_strength_box.style.display = "flex";
            line.style.width = "100%";
            line.style.backgroundColor = "#2ccc2c";
            text.style.color = "#2ccc2c";
            text.innerHTML = "Strong";
        }
	
	}

// Handling form submission event
form.addEventListener("submit", handleFormData);