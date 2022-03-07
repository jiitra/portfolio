const buttonElement = document.querySelector(".js-color-mode__btn");

const contactLink = document.querySelector(".contact-link");

buttonElement.addEventListener('click', function () {

    //if (colorMode == "light") {
    if (document.documentElement.getAttribute("color-mode") == "light") {
        document.documentElement.setAttribute("color-mode", "dark");

        // Sets the user's preference in local storage
        localStorage.setItem("color-mode", "dark");
    }
    else {
        document.documentElement.setAttribute("color-mode", "light");
        localStorage.setItem("color-mode", "light");
    }
});

//change color of contact header at bottom when link is clicked..
contactLink.addEventListener('click', function () {
    document.getElementsByClassName("footer__header").style.color = "blue"; //this isnt working but i didnt expect it to
})

if (
    /* This condition checks whether the user has set a site preference for dark mode OR a OS-level preference for Dark Mode AND no site preference */
    localStorage.getItem('color-mode') === 'dark' ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches &&
        !localStorage.getItem('color-mode'))
) {
    // if true, set the site to Dark Mode
    document.documentElement.setAttribute('color-mode', 'dark');
} else {
    document.documentElement.setAttribute('color-mode', 'light');
}