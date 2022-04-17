$(document).ready(function () {
    // Header
    window.addEventListener("scroll", animateHeaderProgress);
    changeHeaderBackground();
    window.addEventListener("scroll", changeHeaderBackground);
    window.addEventListener("scroll", setLinkActive);
    typeWrite();

    // About
    window.addEventListener("scroll", changeSkillsName);
    window.changeSkillsName();
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
const skillFrontEnd = document.querySelector("#dm-about");
const observer = new MutationObserver(handleMutation);

observer.observe(skillFrontEnd, {
    attributes: true
});

function handleMutation(mutation) {
    const skillFrontEnd = document.querySelector("#dm-pills-front-tab");

    if (mutation[0].target.classList.contains("section-active")) {
        observer.disconnect();
        window.animateSkills(skillFrontEnd);
    }
}