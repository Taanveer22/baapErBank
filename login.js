// step 1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    console.log('clicked');

    // step2: get the email address inside the email inputfield

    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // always remember to to use .value to get the text from an input field

    // step3 : get the password inside the password inputfield

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    console.log(email, password);

    // verify email and password

    if (email === 'beta@baap.com' && password === 'secret') {
        //link to another bank html file
        window.location.href = 'bank.html';
    }
    else {
        alert('invalid user');
    }
    // don't verify password on client side..it's just a learning purpose


    // addeventlistener parenthesis
})