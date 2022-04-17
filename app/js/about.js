/** Animate skills progress bar */
window.animateSkills = function (el) {
    const skillId = el.id.split("-")[2];
    const skillProgress = document.querySelectorAll(`#dm-pills-${skillId} .progress-bar`);
    let attribute;

    skillProgress.forEach(progress => {
        attribute = progress.getAttribute("aria-valuemax");

        $(progress).animate({
            width: `${attribute}%`
        }, 2000);
    });
}

/** Change skill name on media with max width up to 575px */
window.changeSkillsName = function () {
    const skills = document.querySelectorAll("#dm-pills-tab-skills button");

    skills.forEach(skill => {
        if (window.matchMedia("(max-width: 575px)").matches) {
            switch (skill.id) {
                case "dm-pills-front-tab": {
                    skill.innerText = "Front";
                    break;
                }

                case "dm-pills-back-tab": {
                    skill.innerText = "Back";
                    break;
                }

                case "dm-pills-bd-tab": {
                    skill.innerText = "Dados";
                    break;
                }
            }
        }

        else {
            switch (skill.id) {
                case "dm-pills-front-tab": {
                    skill.innerText = "Front-End";
                    break;
                }

                case "dm-pills-back-tab": {
                    skill.innerText = "Back-End";
                    break;
                }

                case "dm-pills-bd-tab": {
                    skill.innerText = "Banco de Dados";
                    break;
                }
            }
        }
    });
}