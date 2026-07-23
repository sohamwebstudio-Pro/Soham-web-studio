const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (
        !navLinks.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        navLinks.classList.remove("active");
    }
});

document.querySelectorAll(".nav-links a").forEach(link=>{
    link.addEventListener("click",()=>{
        navLinks.classList.remove("active");
    });
});
const reveal = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveal.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            item.classList.add("active");
        }

    });

});