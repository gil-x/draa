const classSheduler = (element, className, lifetime) => {
    element.classList.add(className);
    setTimeout(() => { element.classList.remove(className); }, lifetime);
};
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM entièrement chargé et analysé");
});
