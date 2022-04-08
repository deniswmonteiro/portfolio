$(document).ready(function () {
    const skillFrontEnd = document.querySelector("#dm-pills-front-tab");

    window.animateSkills(skillFrontEnd);  // animar somente quando item estiver aparecendo
    window.addEventListener("load", changeHeaderBackground);
    window.addEventListener("scroll", changeHeaderBackground);
    window.addEventListener("scroll", setLinkActive);
    window.addEventListener("scroll", animateHeaderProgress);
});

/** Animate header progress */
function animateHeaderProgress() {
    const progressBar = document.querySelector("#dm-header-progress-bar");
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (windowScroll / height) * 100;

    progressBar.style.width = `${scrolled}%`;
}

/** Change headers background when scroll is above of the title */
function changeHeaderBackground() {
    const title = document.querySelector(".dm-title-1");
    const headerMenu = document.querySelector("#dm-header");
    const headerNav = document.querySelector(`#${headerMenu.id} .navbar`)
    const titleTop = title.getBoundingClientRect().top;
    const headerLogo = document.querySelector("#dm-header-logo");
    const navMenu = document.querySelector("#dm-header-menu");

    if (titleTop <= 130) {
        headerMenu.classList.add("menu-bg");
        headerNav.classList.add("menu-bg");
        headerLogo.classList.add("change-logo");
        navMenu.classList.add("menu-bg");
    }

    else {
        headerMenu.classList.remove("menu-bg");
        headerNav.classList.remove("menu-bg");
        headerLogo.classList.remove("change-logo");
        navMenu.classList.remove("menu-bg");
    }
}

/** Set the menu link as active or inactive */
function setLinkActive() {
    const sections = document.querySelectorAll(".dm-section");
    const headerHeight = document.querySelector("#dm-header").clientHeight;

    sections.forEach(section => {
        const sectionId = section.id;
        const sectionHeight = section.clientHeight;
        const sectionOffsetTop = section.offsetTop;
        const itemMenu = document.querySelector(`#dm-header-menu a[href="#${sectionId}"]`);
        const scrollTop = window.scrollY;

        if ((sectionOffsetTop - headerHeight) < scrollTop && ((sectionOffsetTop - headerHeight + sectionHeight)) > scrollTop) {
            itemMenu.classList.add("link-active")
        }

        else itemMenu.classList.remove("link-active")
    });
}

/** Type writter effect */
typeWrite(document.querySelector(".dm-title-1"));

function typeWrite(el) {
    const text = el.innerHTML.split("");

    el.innerHTML = " ";

    text.forEach((letter, i) => {
        setTimeout(() => el.innerHTML += letter, (75 * i))
    });
}

/** Scroll to section */
window.scrollToSection = function (el) {
    const elemId = el.getAttribute("href");
    const sectionTarget = document.querySelector(`${elemId}`);
    const sectionOffsetTop = sectionTarget.offsetTop;

    $("html, body").animate({
        scrollTop: sectionOffsetTop - 70
    }, 300);
}

/** Change document title */
window.changeTitle = function (el) {
    const elemMenu = el.innerText;

    if (el.id === "btn-more") document.title = "Sobre";

    else {
        document.title = `${document.title.split("|")[0]} | ${elemMenu.substr(0, 1) + elemMenu.substr(1).toLowerCase()}`;
    }
}

/** Close menu mobile when click in menu link */
window.linkCloseMenuMobile = function () {
    const btnMobile = document.querySelector("#btn-mobile");

    window.toggleMenuMobile(btnMobile, true);
}

/** Toggle mobile menu  */
window.toggleMenuMobile = function (el, link = false) {
    const nav = document.querySelector("#dm-header-menu");
    let active;

    nav.classList.toggle("active");
    el.classList.toggle("active");
    active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);

    if (active && !link) {
        document.documentElement.style.overflow = "hidden";
        document.body.scroll = "no";  // IE
    }

    else {
        document.documentElement.style.overflow = "initial";
        document.body.scroll = "yes";  // IE
    }
}