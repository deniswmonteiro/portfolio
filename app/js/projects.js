/** Change project background from image to dark */
window.changeProjectToBackground = function (el) {
    const image = document.querySelector(`#${el.id} img`);
    const projectsInfo = document.querySelector(`#${el.id} .dm-projects-info`);

    image.classList.add("d-none");
    projectsInfo.classList.add("dm-projects-active");
}

/** Change project background from dark to image */
window.changeProjectToImage = function (el) {
    const image = document.querySelector(`#${el.id} img`);
    const projectsInfo = document.querySelector(`#${el.id} .dm-projects-info`);

    image.classList.remove("d-none");
    projectsInfo.classList.remove("dm-projects-active");
}
