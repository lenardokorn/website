const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.querySelector('.navbar').classList.toggle('navbar-dark');
    document.querySelector('.navbar').classList.toggle('bg-dark');
    document.querySelector('#projects-dropdown').classList.toggle('dropdown-menu-dark');
});
