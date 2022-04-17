/** Change project background from image to dark */
window.changeProjectToBackground = function (el) {
    const image = document.querySelector(`#${el.id} img`);
    const portfolioInfo = document.querySelector(`#${el.id} .dm-portfolio-info`);

    image.classList.add("d-none");
    portfolioInfo.classList.add("dm-portfolio-active");
}

/** Change project background from dark to image */
window.changeProjectToImage = function (el) {
    const image = document.querySelector(`#${el.id} img`);
    const portfolioInfo = document.querySelector(`#${el.id} .dm-portfolio-info`);

    image.classList.remove("d-none");
    portfolioInfo.classList.remove("dm-portfolio-active");
}