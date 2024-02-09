const form = document.getElementById('form');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeat-password');
const terms = document.getElementById('terms');

const errorMessage = document.getElementsByClassName('error');
const successIcon = document.getElementsByClassName('success-icon');
const failureIcon = document.getElementsByClassName('failure-icon');

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', validForm);

function validForm(e){
    e.preventDefault();
    if(fullName.value.trim() === '' || fullName.value.trim() === null){
        errorMessage[0].innerText = 'Name is required';
        successIcon[0].style.opacity = '0';
        failureIcon[0].style.opacity = '1';
    } else{
        errorMessage[0].innerText = '';
        successIcon[0].style.opacity = '1';
        failureIcon[0].style.opacity = '0';
    }

    if(email.value.trim() === '' || email.value.trim() === null){
        errorMessage[1].innerText = 'Email is required';
        successIcon[1].style.opacity = '0';
        failureIcon[1].style.opacity = '1';
    } else if(!isValidEmail(email.value)) {
        errorMessage[1].innerText = 'Provide a valid email address';
        successIcon[1].style.opacity = '0';
        failureIcon[1].style.opacity = '1';
    } else{
        errorMessage[1].innerText = '';
        successIcon[1].style.opacity = '1';
        failureIcon[1].style.opacity = '0';
    }

    if(username.value.trim() === '' || username.value.trim() === null){
        errorMessage[2].innerText = 'Username is required';
        successIcon[2].style.opacity = '0';
        failureIcon[2].style.opacity = '1';
    } else{
        errorMessage[2].innerText = '';
        successIcon[2].style.opacity = '1';
        failureIcon[2].style.opacity = '0';
    }

    if(password.value.trim() === '' || password.value.trim() === null){
        errorMessage[3].innerText = 'Password is required';
        successIcon[3].style.opacity = '0';
        failureIcon[3].style.opacity = '1';
    } else if(password.value.length < 8){
        errorMessage[3].innerText = 'Password must be at least 8 characters';
        successIcon[3].style.opacity = '0';
        failureIcon[3].style.opacity = '1';
    } else{
        errorMessage[3].innerText = '';
        successIcon[3].style.opacity = '1';
        failureIcon[3].style.opacity = '0';
    }

    if(repeatPassword.value.trim() === '' || repeatPassword.value.trim() === null){
        errorMessage[4].innerText = 'Repeat password is required';
        successIcon[4].style.opacity = '0';
        failureIcon[4].style.opacity = '1';
    } else if(password.value !== repeatPassword.value){
        errorMessage[4].innerText = "Password doesn't match";
        successIcon[4].style.opacity = '0';
        failureIcon[4].style.opacity = '1';
    } else{
        errorMessage[4].innerText = '';
        successIcon[4].style.opacity = '1';
        failureIcon[4].style.opacity = '0';
    }

}