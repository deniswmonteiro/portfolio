$(document).ready(function () {
    setLinkActive();

    // Header
    window.addEventListener("scroll", animateHeaderProgress);
    changeHeaderBackground();
    window.addEventListener("scroll", changeHeaderBackground);
    window.addEventListener("scroll", setLinkActive);

    // Introduction
    typeWrite();

    // About
    window.addEventListener("scroll", changeSkillsName);
    window.changeSkillsName();

    // Footer
    const year = document.querySelector("#dm-year");

    year.innerText = new Date().getFullYear();
});

/** Scroll to section */
window.scrollToSection = function (el) {
    const elemId = el.getAttribute("href");
    const sectionTarget = document.querySelector(`${elemId}`);
    const sectionOffsetTop = sectionTarget.offsetTop;
    const skillFrontEnd = document.querySelector("#dm-pills-front-tab");

    $("html, body").animate({
        scrollTop: sectionOffsetTop - 70,
    }, 300);

    if (sectionTarget.id === "dm-about") skillFrontEnd.click();
}

/** Mutation observer */
const aboutSection = document.querySelector("#dm-about");
const observer = new MutationObserver(handleMutation);

observer.observe(aboutSection, {
    attributes: true
});

function handleMutation(mutation) {
    const pillsTab = document.querySelector("#dm-pills-front-tab");

    if (mutation[0].target.classList.contains("section-active")) {
        window.animateSkills(pillsTab);
        observer.disconnect();
    }
}