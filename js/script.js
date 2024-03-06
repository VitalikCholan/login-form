const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll('input');
    const errorMessages = document.querySelectorAll('.error');
    const successIcons = document.querySelectorAll('.success-icon');
    const failureIcons = document.querySelectorAll('.failure-icon');

    const fullNameRegex = /^[a-zA-z]+(?:['’][a-zA-Z]+)*(?:[-][a-zA-Z]+)* [a-zA-Z]+(?:['’][a-zA-Z]+)*(?:[-][a-zA-Z]+)* [a-zA-Z]+(?:['’][a-zA-Z]+)*(?:[-][a-zA-Z]+)*$/;
    const emailRegex = /^([a-z0-9\.-]+)@([a-z0-9-]+)\.([a-z]{3,8})$/;

    //For password validation
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const symbolRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    if(inputs[0].value.trim() === '' || inputs[0].value.trim() === null){
        errorMessages[0].innerText = 'Full name is required';
        successIcons[0].style.opacity = '0';
        failureIcons[0].style.opacity = '1';
    } else if(!fullNameRegex.test(inputs[0].value)){
        errorMessages[0].innerText = 'Provide a full name';
        successIcons[0].style.opacity = '0';
        failureIcons[0].style.opacity = '1';
    } else{
        errorMessages[0].innerText = '';
        successIcons[0].style.opacity = '1';
        failureIcons[0].style.opacity = '0';
    }

    if(inputs[1].value.trim() === '' || inputs[1].value.trim() === null){
        errorMessages[1].innerText = 'Email is required';
        successIcons[1].style.opacity = '0';
        failureIcons[1].style.opacity = '1';
    } else if(!emailRegex.test(inputs[1].value)){
        errorMessages[1].innerText = 'Provide a valid email address';
        successIcons[1].style.opacity = '0';
        failureIcons[1].style.opacity = '1';
    } else{
        errorMessages[1].innerText = '';
        successIcons[1].style.opacity = '1';
        failureIcons[1].style.opacity = '0';
    }

    if(inputs[2].value.trim() === '' || inputs[2].value.trim() === null){
        errorMessages[2].innerText = 'Username is required';
        successIcons[2].style.opacity = '0';
        failureIcons[2].style.opacity = '1';
    } else{
        errorMessages[2].innerText = '';
        successIcons[2].style.opacity = '1';
        failureIcons[2].style.opacity = '0';
    }

    if(inputs[3].value.trim() === '' || inputs[3].value.trim() === null){
        errorMessages[3].innerText = 'Password is required';
        successIcons[3].style.opacity = '0';
        failureIcons[3].style.opacity = '1';
    } else if(inputs[3].value.length < 8){
        errorMessages[3].innerText = 'Password must be at least 8 characters long';
        successIcons[3].style.opacity = '0';
        failureIcons[3].style.opacity = '1';
    } else if(!lowercaseRegex.test(inputs[3].value)){
        errorMessages[3].innerText = 'Password must contain at least 1 lowercase letter';
        successIcons[3].style.opacity = '0';
        failureIcons[3].style.opacity = '1';
    } else if(!uppercaseRegex.test(inputs[3].value)){
        errorMessages[3].innerText = 'Password must contain at least 1 uppercase letter';
        successIcons[3].style.opacity = '0';
        failureIcons[3].style.opacity = '1';
    } else if(!numberRegex.test(password.value)){
        errorMessages[3].innerText = 'Password must contain at least one number';
        successIcons[3].style.opacity = '0';
        failureIcons[3].style.opacity = '1';
    } else if(!symbolRegex.test(inputs[3].value)){
        errorMessages[3].innerText = 'Password must contain at least one symbol';
        successIcons[3].style.opacity = '0';
        failureIcons[3].style.opacity = '1';
    } else{
        errorMessages[3].innerText = '';
        successIcons[3].style.opacity = '1';
        failureIcons[3].style.opacity = '0';
    }

    if(inputs[4].value.trim() === '' || inputs[4].value.trim() === null){
        errorMessages[4].innerText = 'Repeat password is required';
        successIcons[4].style.opacity = '0';
        failureIcons[4].style.opacity = '1';
    } else if(inputs[3].value !== inputs[4].value){
        errorMessages[4].innerText = "Password doesn't match";
        successIcons[4].style.opacity = '0';
        failureIcons[4].style.opacity = '1';
    } else{
        errorMessages[4].innerText = '';
        successIcons[4].style.opacity = '1';
        failureIcons[4].style.opacity = '0';
    }

    if(inputs[5].checked){
        successIcons[5].style.opacity = '1';
        failureIcons[5].style.opacity = '0';
    } else {
        successIcons[5].style.opacity = '0';
        failureIcons[5].style.opacity = '1';
    }
});

