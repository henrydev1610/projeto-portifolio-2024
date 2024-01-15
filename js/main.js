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

//site: email.js.com
//ir na aba docs e copiar a versao mais atualizada do coddigo depois colar no html <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
const contactForm = document.getElementById('contact-form'), contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
 e.preventDefault()
        //
    emailjs.sendForm('service_7qh5kls','template_05iwaxb','#contact-form','bhpOqFViHcDiZc8Hv',).then(()=>{
        contactMessage.textContent ='Mensagem Enviada com Sucesso! ✔'

         //Remove a mensagem depois de alguns segundos

            setTimeout(()=>{
                contactMessage.textContent=''
            }, 5000)
    //limpar os inputs
    contactForm.reset()
    }, () =>{
        contactMessage.textContent= 'Mensagem nao pode ser enviada'
    })
   


}

contactForm.addEventListener('submit', sendEmail)







/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
