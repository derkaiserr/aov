let header = document.querySelector("header")
let menuIcon = document.querySelector(".menuIcon")
let mobileMenu = document.querySelector(".mobileMenu")
let firstSection = document.querySelector(".one")

let size = window.innerWidth
console.log(size)
menuIcon.addEventListener("click", () => {
  firstSection.classList.toggle("active")
  mobileMenu.classList.toggle("mobileMenuTranslate")
})
