// https://www.youtube.com/watch?v=-uQIBlaZ4P0&list=PL07efmqYWHZ_rVeQ1ws0ER9eL6cxo-d5V&index=10
/*=============== SHOW MENU ===============*/
const  navMenu = document.getElementById('nav-menu') 
const  navToggle = document.getElementById('nav-toggle')
const  navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}



/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction ))





/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >=  50? header.classList.add('shadow-header'): header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)
/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
