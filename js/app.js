'use strict'

const loginForm = document.querySelector('#login-form')
const firstnameError = document.querySelector('#firstname-error')
const lastnameError = document.querySelector('#lastname-error')
const emailError = document.querySelector('#email-error')
const passwordError = document.querySelector('#password-error')

function displayError(input, el, message) {
    input.innerHTML = message
    el.focus()
    el.placeholder = ''
    el.style.background =
        'url("./images/icon-error.svg") no-repeat right 5% center'
    el.style.textIndent = '5px'
    el.style.outlineColor = 'hsl(0, 100%, 74%)'
    el.style.borderColor = 'hsl(0, 100%, 74%)'
}

function clearError(input, el) {
    input.innerHTML = ''
    el.style.background = 'none'
    el.style.textIndent = '0px'
    el.style.outlineColor = 'hsl(220, 50%, 80%)'
    el.style.borderColor = 'hsl(246, 25%, 77%)'
}

function validate(e) {
    e.preventDefault()

    if (loginForm.firstname.value == '') {
        displayError(
            firstnameError,
            loginForm.firstname,
            'First Name Cannot be empty'
        )
        return false
    } else {
        clearError(firstnameError, loginForm.firstname)
    }

    if (loginForm.lastname.value == '') {
        displayError(
            lastnameError,
            loginForm.lastname,
            'Last Name Cannot be empty'
        )
        return false
    } else {
        clearError(lastnameError, loginForm.lastname)
    }

    if (loginForm.email.value == '') {
        displayError(emailError, loginForm.email, 'E-mail Cannot be empty')
        return false
    } else {
        clearError(emailError, loginForm.email)
    }

    if (loginForm.password.value == '') {
        displayError(
            passwordError,
            loginForm.password,
            'Password Cannot be empty'
        )
        return false
    }
    if (loginForm.password.value.length < 8) {
        displayError(
            passwordError,
            loginForm.password,
            'Minimum Password Length is 8 characters'
        )
        return false
    } else {
        clearError(passwordError, loginForm.password)
    }
    return true
}

loginForm.addEventListener('submit', validate)
