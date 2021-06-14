/**
 * Add a class to DOM element.
 * Remove the class after <lifetime> ms.
 * @param {Node}    element
 * @param {String}  className
 * @param {Number}  lifetime
 */
 const classSheduler = (
        element:HTMLElement,
        className:string,
        lifetime:number,
    ) => {
    element.classList.add(className);
    setTimeout(
        () => { element.classList.remove(className) },
        lifetime
    );
}


/*
    ==============
        SLIDER
    ==============
*/
let currentGap:number = 0;
let gapDirection = -1; // To right

const setTranslation = (element:HTMLElement, value:number) => {
    element.style.transform = `translateX(${value * 20}%)`;
}

const gap = (max:number) => {
    currentGap += gapDirection;
    if (Math.abs(currentGap) >= max - 1 || currentGap == 0 ) {
        gapDirection = -gapDirection;
    }
}




// const toggleMenu = () {
//     menu.classList.toggle('visible');
//     callMenuIcon.classList.toggle('black');
//     event.stopPropagation();
// }

// function toggleSubMenu() {
//     subMenu.classList.toggle('submenu-on');
//     servicesMenuItem.classList.toggle('on');
//     event.stopPropagation();
// }

// if ( getComputedStyle(callMenuButton, null).display === 'block' ) {
//     callMenuButton.addEventListener('touchend', toggleMenu.bind(event));
//     servicesMenuItem.addEventListener('touchend', toggleSubMenu.bind(event));
// }










/*
    =============================================
        GENERAL: STUFF TO DO WHEN DOM'S READY
    =============================================
*/
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM entièrement chargé et analysé");

    const burger:HTMLElement = document.getElementById('burger');
    const menu = document.querySelector('nav');

    document.addEventListener('click', (event) => {
        const element = event.target as HTMLElement;
        if (element.id === "burger") {
            console.log('burger fired!');
            menu.classList.toggle('visible');
        }
    });

    // document.addEventListener('touchend', (event) => {

    //     const element = event.target as HTMLElement;

    //     if (element.id === "burger") {
    //         console.log('burger fired! (touchend)');
    //     }
    // });

    if (document.body.classList.contains('home')) {

        const testimonialsSlider:HTMLElement = document.querySelector('.testimonials .slider .wp-block-group__inner-container');
        const testimonials = Array.from(testimonialsSlider.querySelectorAll('p'));
        console.log(testimonialsSlider);

        let roll = setInterval( () => {
            gap(testimonials.length);
            setTranslation(testimonialsSlider, currentGap);
        }, 3000);
    }



});
