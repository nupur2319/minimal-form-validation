// Get form
const form = document.getElementById("myForm");

// Submit Event
form.addEventListener("submit", function (event) {

    event.preventDefault(); // stop refresh

    let isValid = true;

    if (!validateName()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validatePhone()) isValid = false;
    if (!validatePassword()) isValid = false;
    if (!validateConfirmPassword()) isValid = false;

    if (isValid) {
        alert("Registration Successful 🤎");
        form.reset();
    }
});

// Real-time validation
document.getElementById("fullName").addEventListener("change", validateName);
document.getElementById("email").addEventListener("change", validateEmail);
document.getElementById("phone").addEventListener("change", validatePhone);
document.getElementById("password").addEventListener("change", validatePassword);
document.getElementById("confirmPassword").addEventListener("change", validateConfirmPassword);


// Validate Name
function validateName() {
    let name = document.getElementById("fullName").value.trim();
    let error = document.getElementById("nameError");

    if (name.length < 5) {
        error.innerText = "Name must be at least 5 characters";
        return false;
    }

    error.innerText = "";
    return true;
}


// Validate Email
function validateEmail() {
    let email = document.getElementById("email").value.trim();
    let error = document.getElementById("emailError");

    if (!email.includes("@")) {
        error.innerText = "Enter correct email";
        return false;
    }

    error.innerText = "";
    return true;
}


// Validate Phone
function validatePhone() {
    let phone = document.getElementById("phone").value.trim();
    let error = document.getElementById("phoneError");

    if (phone.length !== 10 || phone === "1234567890" || isNaN(phone)) {
        error.innerText = "Enter valid 10-digit phone number";
        return false;
    }

    error.innerText = "";
    return true;
}


// Validate Password
function validatePassword() {
    let password = document.getElementById("password").value;
    let name = document.getElementById("fullName").value.toLowerCase();
    let error = document.getElementById("passwordError");

    if (password.length < 8) {
        error.innerText = "Password must be 8+ characters";
        return false;
    }

    if (password.toLowerCase() === "password") {
        error.innerText = "Password cannot be 'password'";
        return false;
    }

    if (password.toLowerCase() === name) {
        error.innerText = "Password cannot be your name";
        return false;
    }

    error.innerText = "";
    return true;
}


// Validate Confirm Password
function validateConfirmPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let error = document.getElementById("confirmPasswordError");

    if (password !== confirmPassword) {
        error.innerText = "Passwords do not match";
        return false;
    }

    error.innerText = "";
    return true;
}