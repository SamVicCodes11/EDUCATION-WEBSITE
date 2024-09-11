
window.addEventListener("scroll", () => {
   document.querySelector("nav").classList.toggle("window-scroll", scrollY > 30)
})


const faqs = document.querySelectorAll(".faq")

faqs.forEach(faq => {
   faq.addEventListener("click", () => {

      faq.classList.toggle("open")

      const faqIcon = document.querySelector(".faq i")
      if(faqIcon.className === "fa-solid fa-plus"){
faqIcon.className === "fa-solid fa-minus"
      } else {
         faqIcon.className === "fa-solid fa-plus"

      }
   })
})


const menu = document.querySelector(".menu")
const closeMenuIcon = document.querySelector(".close-menu")
const openMenuIcon = document.querySelector(".open-menu")



openMenuIcon.addEventListener("click", () => {
   menu.style.display = "block";
   closeMenuIcon.style.display = "block";
   openMenuIcon.style.display = "none";
})


closeMenuIcon.addEventListener("click", () => {
   menu.style.display = "none";
   closeMenuIcon.style.display = "none";
   openMenuIcon.style.display = "block";
})




