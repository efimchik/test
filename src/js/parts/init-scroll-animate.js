const itemsAnimate = document.querySelectorAll('.js-animate');
const fullSizeEl = document.querySelectorAll('.js-fullSize');






const scrollAnimation = function() {
    itemsAnimate.forEach(function(el) {
        let elementBoundary = el.getBoundingClientRect();

        let top = elementBoundary.top;

        // if((top >= 0) && (bottom <= window.innerHeight)) {
        //     el.classList.add('animation');
        // }
        if(top <= window.innerHeight / 1.5) {
            el.classList.add('animation');
        }
    });


    fullSizeEl.forEach(function(el) {
        let elementBoundary = el.getBoundingClientRect();

        let top = Math.trunc(elementBoundary.top);

        if((top + el.clientHeight <= window.innerHeight) && top >= 0) {
            el.classList.add('animation');
        }
    });
}

window.addEventListener('scroll', function() {
    scrollAnimation();
});
scrollAnimation();