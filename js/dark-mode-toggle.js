// * Add cookie which stores theme settings, so that it can be used to set the theme according to the user's preference
function setTheme(themeName) {
    let d = new Date();
    d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
    document.cookie = 'theme=' + themeName + '; expires=' + d.toUTCString + '; path=/;';
}

// * Function to get value of theme cookie
function getTheme() {
    if (!document.cookie.includes('theme=')) {
        return 'l';
    }
    return document.cookie.substring(document.cookie.indexOf('theme=') + 6, document.cookie.indexOf('theme=') + 7);
}

function toggleTheme() {
    // * Single elements
    document.body.classList.toggle('dark');
    document.querySelector('.navbar').classList.toggle('navbar-dark');
    document.querySelector('.navbar').classList.toggle('bg-dark');
    document.querySelector('#projects-dropdown').classList.toggle('dropdown-menu-dark');
    try {
        document.querySelector('.landing-text').classList.toggle('dark-background');
    } catch (error) {}
    document.querySelector('.footer').classList.toggle('bg-dark');

    // * Multiple elements
    try {
        let cards = document.getElementsByClassName('card');
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.toggle('bg-dark');
        }
    } catch (error) {}
    try {
        let buttons = document.getElementsByClassName('btn');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.toggle('btn-dark');
        }
    } catch (error) {}
    try {
        let buttons = document.getElementsByClassName('project-navigation');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.toggle('light-background');
        }
    } catch (error) {}
}

const checkbox = document.getElementById('checkbox');
window.onload = onPageLoad();

function onPageLoad() {
    if (getTheme() === 'd') {
        checkbox.checked = true;
        toggleTheme();
    } else {
        checkbox.checked = false;
    }
}

// * Change theme when checkbox is clicked
checkbox.addEventListener('change', () => {
    // * Change checkbox according to cookie
    if (document.body.classList.length === 0) {
        setTheme('d');
    } else {
        setTheme('l');
    }

    toggleTheme();
});
