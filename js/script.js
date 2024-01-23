document.addEventListener("DOMContentLoaded", function () {
    let formBtn = document.querySelector('#login-btn');
    let formClose = document.querySelector('#form-close');
    let menu = document.querySelector('#menu-bar');
    let navbar = document.querySelector('.navbar');
    let videoBtn = document.querySelectorAll('.vid-btn');

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
            document.querySelector('#video-slider').src = src;
        });
    });

    window.addEventListener('DOMContentLoaded', (event) => {
        let videoSlider = document.querySelector('#video-slider');

        if (videoSlider && !videoSlider.paused) {
            videoSlider.play();
        }

        document.body.addEventListener('click', () => {
            videoSlider?.play();
        });
    });
});