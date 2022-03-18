const contactLink = document.querySelectorAll(".contact-link");

// light/dark mode button is only on homepage, if statement checks for it
if (document.querySelector(".js-color-mode__btn") != null) {
    const colorButton = document.querySelector(".js-color-mode__btn");
    colorButton.addEventListener('click', function () {

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
}

function resetContact() {
    document.getElementsByClassName("footer__header")[0].style.color = getComputedStyle(document.documentElement)
        .getPropertyValue('--text-color');
}

//for mobile and desktop links
contactLink.forEach(element => {
    //change color of contact header at bottom when link is clicked
    element.addEventListener('click', function () {
        setTimeout(() => {
            document.getElementsByClassName("footer__header")[0].style.color = getComputedStyle(document.documentElement)
                .getPropertyValue('--accent-color-secondary');
        }, 500);

        setTimeout(() => {
            resetContact();
        }, 1500);
    })
});


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

/*fix in morning*/
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var navList = document.getElementsByClassName("mobile-nav__list")[0];

    //if: displaying, hide
    if (navList.style.display === "block") {
        navList.style.display = "none";

        //else: not displaying, show
    } else {
        navList.style.display = "block";
    }
}