document.getElementById("btn-log").addEventListener('click', function () {
    // get email 
    const emailField = document.getElementById('field-email');
    const email = emailField.value;
    // get password
    const passField = document.getElementById('field-pass');
    const pass = passField.value;
    // console.log(email, pass);

    //  chack password and email 

    if (email === 'mamun@gmail.com' && pass === 'mamun') {
        console.log('valid user');
        location.href = 'bank.html'
    }
    else {
        console.log('invalid user');
    }
})