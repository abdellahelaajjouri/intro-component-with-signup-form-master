let form = document.getElementById('form');
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let button = document.getElementById('btn');

function showError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    const errorIcon = formControl.querySelector('svg');
    formControl.className = 'form-control error';
    small.innerText = message;

    errorIcon.style.opacity = 1;


}


function showSuccess(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    const errorIcon = formControl.querySelector('svg');

    formControl.className = 'form-control success';
    small.innerText = message;
    errorIcon.style.opacity = 0;

}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('submit');
    firstname.value === '' ? showError(firstname, 'First Name cannot be empty') : showSuccess(firstname, '');
    lastname.value === '' ? showError(lastname, 'Last Name cannot be empty') : showSuccess(lastname, '');
    email.value === '' ? showError(email, 'Email Address cannot be empty') : showSuccess(email, '');
    password.value === '' ? showError(password, 'Password cannot be empty') : showSuccess(password, '');



})