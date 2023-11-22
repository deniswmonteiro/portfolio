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
        const scrollTopAnimateSection = scrollTop + (window.innerHeight * .55);

        if ((sectionOffsetTop - headerHeight) < scrollTopAnimateSection && ((sectionOffsetTop - headerHeight + sectionHeight)) > scrollTopAnimateSection) {
            section.classList.add("anime-left");
        }

        if ((sectionOffsetTop - headerHeight) < scrollTop && ((sectionOffsetTop - headerHeight + sectionHeight)) > scrollTop) {
            itemMenu.classList.add("link-active");
            section.classList.add("section-active");
        }

        else if (section.classList.contains("section-active")) {
            section.classList.remove("section-active");
            itemMenu.classList.remove("link-active");
        }
    });
}

/** Change document title */
window.changeTitle = function (el) {
    const elemMenu = el.innerText;

    if (el.id === "btn-more") document.title = `${document.title.split("|")[0]} | Sobre`;

    else if (el.id === "dm-go-to-header") {
        document.title = `${document.title.split("|")[0]} | Full-stack Developer e UI/UX Designer`;
    }

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