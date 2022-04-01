window.onload = function () {
    const skillFrontEnd = document.querySelector("#dm-pills-front-tab");

    window.animateSkills(skillFrontEnd);  // animar somente quando item estiver aparecendo
}

window.animateSkills = function (el) {
    const skillId = el.id.split("-")[2];
    const skillProgress = document.querySelectorAll(`#dm-pills-${skillId} .progress-bar`);
    let attribute;

    skillProgress.forEach(progress => {
        attribute = progress.getAttribute("aria-valuemax");

        $(progress).animate({
            width: `${attribute}%`
        }, 2000)
    });
}