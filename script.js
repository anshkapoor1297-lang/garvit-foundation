// ===== Sticky Header =====
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.background = "#0a4a26";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        header.style.background = "#0d5c2f";
        header.style.boxShadow = "none";
    }
});

// ===== Smooth Scrolling =====
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const id = this.getAttribute("href");

        if (id.startsWith("#")) {
            document.querySelector(id).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ===== Fade-in Animation =====
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
});

document.querySelectorAll(".card,.about,.gallery,.contact,.why").forEach(el=>{
    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition="all .8s ease";
    observer.observe(el);
});
