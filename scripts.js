function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    if (password != confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return false;
    }
    if (password.length < 6) {
        errorMessage.textContent = "Password must be atleast 6 characters long.";
        return false;
    }
    alert("Registration successful!");
    return true;
}