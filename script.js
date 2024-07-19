let header = document.querySelector("header");
let menuIcon = document.querySelector(".menuIcon");
let mobileMenu = document.querySelector(".mobileMenu");
let firstSection = document.querySelector(".one");
var mybutton = document.getElementById("backToTop");
let phoneIcon = document.getElementById("observe");
let size = window.innerWidth;
console.log(size);
menuIcon.addEventListener("click", () => {
  firstSection.classList.toggle("active");
  mobileMenu.classList.toggle("mobileMenuTranslate");
});

// When the user scrolls to the end of the page, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    });
  },
  {
    threshold: 0.5, // Trigger when 50% of the element is in view
  }
);

observer.observe(phoneIcon);
