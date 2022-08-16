// step-1: add click event handler with the submit button
document.getElementById('btn-submit') .addEventListener('click', function(){
    // console.log('submit button clicked');
    // step 2: get the email address inside the email input field
    // always remember to use  .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);

    // step3: get password
    // step 3.a:set id on the html Element
    // step:3.b:get the element
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(password);
    // do not verify email password on the client site
    // step4:verify email and password and check valid and invalid user
    if(email === 'sontan@baap.com' && password === 'secret'){
        console.log('valid user')
    }
    else{
        console.log('invalid user')
    }
})