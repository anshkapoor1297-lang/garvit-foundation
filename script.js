// Garvit Foundation Website

document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
