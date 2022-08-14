let btn = document.querySelector('.btn-mob');
let menu = document.querySelector('.main-menu__list');
let body = document.querySelector('body');
let svgBtn = document.querySelector('.ham1');

btn.addEventListener('click', function() {
    menu.classList.toggle('show');
    body.classList.toggle('fixed');
});



//close mob menu on click to outside block
document.addEventListener('click', function(event) {

    let positionTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if(!menu.contains(event.target) && !btn.contains(event.target)) {
        if(menu.classList.contains('show')) {
            menu.classList.remove('show');
            body.classList.remove('fixed');
            svgBtn.classList.remove('active');
        }

    }
});