
window.addEventListener("scroll", () => {
   document.querySelector("nav").classList.toggle("window-scroll", scrollY > 30)
})