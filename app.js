'use strict';
//Show password feature 
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#id_password');

togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

// Setting the password the login page 
const username = document.getElementById('Uname');
const password1 = document.getElementById('id_password');
const form = document.getElementById('LoginForm')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (username.value === "admin" && password1.value === '1234') {
        location.href = "sections.html";
        alert(`You are logged in ${username}`)
    }
    else {
        document.location.href = document.location.href;
    }
})


