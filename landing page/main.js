const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

//header cointainer
scrollRevealOption().reveal(".header__container img", {
    duration: 1000,
});

scrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
});

scrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
    delay: 1000,
});

scrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    delay: 500,
});

//about container
ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    orgin: "left"
})

ScrollReveal().reveal(".about__content h3", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".about__content .section__subheader", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".about__content .about__grid", {
    ...scrollRevealOption,
    delay: 2000,
});

// contact container
ScrollReveal().reveal(".contact_image img", {
    ...scrollRevealOption,
    origin: "left",
});

const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
});