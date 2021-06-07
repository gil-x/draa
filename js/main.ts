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
    =============================================
        GENERAL: STUFF TO DO WHEN DOM'S READY
    =============================================
*/
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM entièrement chargé et analysé");

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
