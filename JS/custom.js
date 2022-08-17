console.log('Login to js file');

document.getElementById('btn-submit').addEventListener('click', function(){
    const emailFind = document.getElementById('user-email');
    const email = emailFind.value;

    const passFind = document.getElementById('user-pass');
    const pass = passFind.value;

    if(email === 'kawser@gmail.com' && pass === 'kawser'){
        window.location.href= 'dashboard.html';
    }
    else{
        alert('You dont have any account. Register Please.!!') 
    }
} )