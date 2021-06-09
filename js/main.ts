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
// const testimonialsList = document.getElementById('testimonials__list');
// const testimonialPrev = document.getElementById('testimonial__prev');
// const testimonialNext = document.getElementById('testimonial__next');

// const steps = ['0', '-25%', '-50%', '-75%', '-100%'];
// let testimonialIndex = 0;
// let testimonialDirection = 'right';


// const rolltestimonials = () => {
//     if (testimonialDirection == 'right') {
        
//         if (testimonialIndex == steps.length) {
//             testimonialDirection = 'left';
//             return;
//         }
//         testimonialIndex++;

//     } else if (testimonialDirection == 'left') {
        
//         if (testimonialIndex == 0) {
//             testimonialDirection = 'right';
//             return;
//         }
//         testimonialIndex--;

//     }
//     testimonialsList.style.transform = `translateX(${steps[testimonialIndex]})`;
// }

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

/*
    =============================================
        GENERAL: STUFF TO DO WHEN DOM'S READY
    =============================================
*/
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM entièrement chargé et analysé");

    if (document.body.classList.contains('home')) {
        // console.log('Whe are at home! •');
        // const bulletControl = document.createElement('ul');

        const testimonialsSlider:HTMLElement = document.querySelector('.testimonials .slider .wp-block-group__inner-container');
        const testimonials = Array.from(testimonialsSlider.querySelectorAll('p'));
        console.log(testimonialsSlider);
        

        console.log(`length is ${testimonials.length}`);

        

        let roll = setInterval( () => {
            gap(testimonials.length);
            setTranslation(testimonialsSlider, currentGap);
        }, 3000);
    }

    // const chirs = Array.from( document.querySelectorAll('.surgeries .wp-block-column'));

    // if (chirs.length > 0) {
    //     document.addEventListener('mouseover', (event) => {
    //         const element = event.target as HTMLElement;

    //         if ( chirs.indexOf(element.parentElement) > -1 && !element.parentElement.classList.contains('hovered') ) {

    //             element.parentElement.classList.add('hovered');
    //             // classSheduler(element.parentElement, 'hovered', 1000);
    //         }
    //     });
    //     document.addEventListener('mouseout', (event) => {
    //         const element = event.target as HTMLElement;
    //         if ( chirs.indexOf(element.parentElement) > -1 && element.parentElement.classList.contains('hovered') ) {
    //             window.setTimeout( () => {
    //                 element.parentElement.classList.remove('hovered');
    //             }, 1100);
    //         }
    //     });
    // }

    // console.log(chirs);
});
