const toggle = document.querySelector('.menu-icons');

toggle.addEventListener('click', () =>{
    document.querySelector('nav').classList.toggle('show-nav');
});