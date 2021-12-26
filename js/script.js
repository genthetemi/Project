let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');


window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', () =>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});





let signinButton =document.getElementById('signinButton');
let incorrectEmail = document.getElementById('incorrectEmail'); 
let emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

signinButton.addEventListener('click', function(event){
    
    let email = document.getElementById('email').value;

    if(email == ''){
        incorrectEmail.innerText='Fill the Email field!';
        event.preventDefault();
    }else{
        if(emailRegex.test(email) == true){

        }else{
            incorrectEmail.innerText='Incorrect Email!';
            event.preventDefault();
        }
    }
})
let incorrectPassword = document.getElementById('incorrectPassword');
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

signinButton.addEventListener('click', function(event){

    let password = document.getElementById('password').value;

    if(password == ''){
        incorrectPassword.innerText = 'Fill the Password field!';
        event.preventDefault();
    }else{
        if(passwordRegex.test(password) == true){
            return true;
        }else{
            incorrectPassword.innerText = 'Incorrect Password';
            event.preventDefault();
        }
    }
})