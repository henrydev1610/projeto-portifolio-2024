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
        contactMessage.textContent= 'Mensagem Não pode ser enviada ERRO!'
    })
   


}

contactForm.addEventListener('submit', sendEmail)







/*=============== SHOW SCROLL UP ===============*/ 
  const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll'): scrollUp.classList.remove('show-scroll')
  }

  window.addEventListener('scroll', scrollUp)  


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']' )


            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionClass.classList.add('active-link')
            }else{
                sectionClass.classList.remove('active-link')
            }




    })
}

/*=============== DARK LIGHT THEME ===============*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})




/*=============== SCROLL REVEAL ANIMATION ===============*/
