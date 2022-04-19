/** Type writter effect */
function typeWrite() {
    const title = document.querySelector(".dm-title-1");
    const text = title.innerHTML.split("");

    title.innerHTML = " ";

    text.forEach((letter, i) => {
        setTimeout(() => title.innerHTML += letter, (50 * i))
    });
}