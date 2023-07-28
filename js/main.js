// aos initialisation
AOS.init({
    offset: 200,
    delay: 100,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
})

// making the links stay selected when clicked
const navList = document.querySelectorAll(".nav-list li")

function activeLink(){
    navList.forEach((item)=>{
        item.classList.remove("selected")
        this.classList.add("selected")
    })
}
navList.forEach((item)=>{
    item.addEventListener("click", activeLink)
})

// changing style of nav on scroll
window.addEventListener("scroll", ()=>{
    const nav = document.querySelector(".nav-wrapper")
    nav.classList.toggle("sticky", scrollY > 0)
})

// the nav overlay on mobile
const menuOpen = document.querySelector(".bars")
const menuClose = document.querySelector(".close")
const mobileNav = document.querySelector(".mobile-nav-list")

menuOpen.addEventListener("click", openNav)
menuClose.addEventListener("click", closeNav)

// removing mobile nav overlay when link is clicked
const mobileList = document.querySelectorAll(".mobile-nav-list li")
mobileList.forEach((item)=>{
    item.addEventListener("click", closeNav)
})
// fn for open and close nav
function openNav(){
    const mobileNav = document.querySelector(".mobile-nav-list")
    mobileNav.classList.add("active")
}
function closeNav(){
    const mobileNav = document.querySelector(".mobile-nav-list")
    mobileNav.classList.remove("active")
}
