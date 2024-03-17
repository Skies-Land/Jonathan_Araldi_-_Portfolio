/*=============== SHOW MENU ===============*/
    const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
    }

    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */
    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }

/*=============== CHANGE COLOR HEADER ===============*/

    window.onload = function() {
        const currentPage = window.location.pathname.split('/').pop();
        const logo = document.querySelector('.nav__logo');
        const toggle = document.querySelector('.nav__toggle');

        if (currentPage && currentPage !== 'index.html') {
            logo.classList.add('other-page');
            toggle.classList.add('other-page');
        }
    }