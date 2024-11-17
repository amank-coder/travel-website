const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", ()=>{
    preloader.classList.add("remove");
})

// Once the page and all its resources are fully loaded, the load event triggers.

const addEventOnElements = (elements, eventType, callback)=>{
    for(let i=0;i<elements.length;i++){
        elements[i].addEventListener(eventType, callback)
    }
}

// Navbar toggler

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("non-active");
}

addEventOnElements(navTogglers, "click", toggleNav);

const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function(){
    header.classList[this.window.scrollY>100 ? "add" : "remove"]("active");
})
