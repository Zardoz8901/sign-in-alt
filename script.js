const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const emailConfirm = document.getElementById('email-confirm');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = []
    if (firstName.value.length == 0) {
        firstName.setAttribute('required','');
        e.preventDefault()
    }
    if (lastName.value.length == 0) {
        lastName.setAttribute('required','')
        e.preventDefault()
    }
    if (email.value.length >= 0) {
        email.setAttribute('required','')
    }
    if (emailConfirm.value.length >= 0) {
        emailConfirm.setAttribute('required','')
    }
    if (emailConfirm.value != email.value) {
        emailConfirm.setAttribute('required','')
        messages.push('Match email')
        e.preventDefault()
        
    }
    if (password.value.length >= 0) {
        password.setAttribute('required','')
    }
    if (passwordConfirm.value.length >= 0) {
        passwordConfirm.setAttribute('required','')
    }
    if (passwordConfirm.value != password.value) {
        passwordConfirm.setAttribute('required','')
        messages.push('Match password')
        e.preventDefault()    
    }
    if (messages.length > 0)
    e.preventDefault()
    errorElement.innerText = messages.join('. ')
});

