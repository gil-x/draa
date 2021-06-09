const classSheduler = (element, className, lifetime) => {
    element.classList.add(className);
    setTimeout(() => { element.classList.remove(className); }, lifetime);
};
let currentGap = 0;
let gapDirection = -1;
const setTranslation = (element, value) => {
    element.style.transform = `translateX(${value * 20}%)`;
};
const gap = (max) => {
    currentGap += gapDirection;
    if (Math.abs(currentGap) >= max - 1 || currentGap == 0) {
        gapDirection = -gapDirection;
    }
};
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM entièrement chargé et analysé");
    if (document.body.classList.contains('home')) {
        const testimonialsSlider = document.querySelector('.testimonials .slider .wp-block-group__inner-container');
        const testimonials = Array.from(testimonialsSlider.querySelectorAll('p'));
        console.log(testimonialsSlider);
        console.log(`length is ${testimonials.length}`);
        let roll = setInterval(() => {
            gap(testimonials.length);
            setTranslation(testimonialsSlider, currentGap);
        }, 3000);
    }
});
