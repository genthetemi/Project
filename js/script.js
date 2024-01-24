document.addEventListener("DOMContentLoaded", function () {
    let formBtn = document.querySelector('#login-btn');
    let formClose = document.querySelector('#form-close');
    let menu = document.querySelector('#menu-bar');
    let navbar = document.querySelector('.navbar');
    let videoBtn = document.querySelectorAll('.vid-btn');
    let registerLink = document.querySelector('.register-link a');
    let registerForm = document.querySelector('#registerForm');
    let loginForm = document.querySelector('#loginForm');
    let videoSlider = document.querySelector('#video-slider');

    window.onscroll = () => {
        menu?.classList.remove('fa-times');
        navbar?.classList.remove('active');
    }

    if (menu) {
        menu.addEventListener('click', () => {
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        });
    }

    videoBtn?.forEach(btn => {
        btn?.addEventListener('click', () => {
            document.querySelector('.controls .active')?.classList.remove('active');
            btn.classList.add('active');
            let src = btn.getAttribute('data-src');
            videoSlider.src = src;
        });
    });

    window.addEventListener('DOMContentLoaded', (event) => {
        if (videoSlider && !videoSlider.paused) {
            videoSlider.play();
        }

        document.body.addEventListener('click', () => {
            videoSlider?.play();
        });
    });

    function showRegisterForm() {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    }

    function showLoginForm() {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    }

    if (registerLink) {
        registerLink.addEventListener('click', function (event) {
            event.preventDefault();
            showRegisterForm();
        });
    }

    // Assuming there is a login link that triggers showLoginForm() similarly...
});
