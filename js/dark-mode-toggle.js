// Make sure checkbox is always unchecked on page load
window.onload = onPageLoad();

function onPageLoad() {
    document.getElementById('checkbox').checked = false;
}

// Change theme when checkbox is clicked
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    // Single elements
    document.body.classList.toggle('dark');
    document.querySelector('.navbar').classList.toggle('navbar-dark');
    document.querySelector('.navbar').classList.toggle('bg-dark');
    document.querySelector('#projects-dropdown').classList.toggle('dropdown-menu-dark');
    document.querySelector('.landing-text').classList.toggle('landing-text-dark');
    document.querySelector('.footer').classList.toggle('bg-dark');

    // Multiple elements
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.toggle('bg-dark');
    }
    let buttons = document.getElementsByClassName('btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle('btn-dark');
    }
});
