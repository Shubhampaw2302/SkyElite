document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');

    burger.addEventListener('click', function () {
        menu.classList.toggle('open');
        menu.classList.toggle('closed');
    });
});