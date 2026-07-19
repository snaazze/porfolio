/*=============== SHOW MENU ===============*/
// Security: ensure all external links use noopener noreferrer
document.querySelectorAll('a[target="_blank"]').forEach(link => {
   link.setAttribute('rel', 'noopener noreferrer')
})

// Dynamic footer year
const footerYear = document.getElementById('footer-year')
if(footerYear) footerYear.textContent = new Date().getFullYear()
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/*=============== REMOVE MENU MOBILE ===============*/
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
   const header = document.getElementById('header')
   this.scrollY >= 50 ? header.classList.add('shadow-header')
                      : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
   e.preventDefault()

   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm, {publicKey: 'YOUR_PUBLIC_KEY'})
      .then(() =>{
         contactMessage.textContent = 'Message sent successfully ✅'
         setTimeout(() =>{ contactMessage.textContent = '' }, 5000)
         contactForm.reset()
      })
      .catch(() =>{
         contactMessage.textContent = 'Message failed to send ❌'
         setTimeout(() =>{ contactMessage.textContent = '' }, 5000)
      })
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
   const scrollUpEl = document.getElementById('scroll-up')
   this.scrollY >= 350 ? scrollUpEl.classList.add('show-scroll')
                       : scrollUpEl.classList.remove('show-scroll')
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
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

      if(sectionsClass){
         if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
         }else{
            sectionsClass.classList.remove('active-link')
         }
      }
   })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme){
   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
   themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () =>{
   document.body.classList.toggle(darkTheme)
   themeButton.classList.toggle(iconTheme)
   localStorage.setItem('selected-theme', getCurrentTheme())
   localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400,
})

sr.reveal('.home__name, .home__info')
sr.reveal('.home__perfil', {delay: 700})
sr.reveal('.home__social', {delay: 1000})
sr.reveal('.about__perfil', {origin: 'left', delay: 600})
sr.reveal('.about__info')
sr.reveal('.services__card', {origin: 'left', delay: 600, interval: 100})
sr.reveal('.projects__card', {interval: 100})
sr.reveal('.contact__data', {origin: 'left'})
sr.reveal('.contact__form', {origin: 'right'})
sr.reveal('.footer__container', {interval: 100})
