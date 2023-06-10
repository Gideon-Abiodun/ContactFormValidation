const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');

// validate name.
function validateName() {
    const name = document.getElementById('contact-name').value;

    if(name.length == 0) {
        nameError.innerHTML = 'Please enter your name';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

// valide phone number
function validatePhone() {
    const phone = document.getElementById('contact-phone').value;

    if(phone.length === 0) {
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }
    if(phone.length !== 11){
        phoneError.innerHTML = 'Phone number should be 11 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = 'Only digit';
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

// validate email

function validateEmail() {
    const email = document.getElementById('contact-email').value;

    if(email.length === 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}

// Message validation

function validateMessage() {
    const message = document.getElementById('contact-message').value;
    const required = 40;
    const left = required - message.length;

    if(left > 0) {
        messageError.innerHTML = left + ' More character';
        return false;
    }
    if(message.length <= 10 || message.length >= 40) {
        messageError.innerHTML = 'Message should be between 10 and 40 letters.';
        return false;
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}


// submit validation
function validateForm() {
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return true;
    }
}



// alternative.
// if(phone.length <= 3 || phone.length >= 12) {
//     phoneError.innerHTML = 'Please enter a valid phone number';
//     return false;
// } 
// if(!phone.match(0-9)){
//     phoneError.innerHTML = "Write a valid phone number";
// }
// phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
// return true;