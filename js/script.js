const navbar_nav = document.querySelector(".navbar-nav");
const nav_link = navbar_nav.querySelectorAll(".nav-link");
const currentURL = window.location.href;



nav_link.forEach((link)=>{
if(link.href==currentURL){
    link.classList.add("act");
}
});