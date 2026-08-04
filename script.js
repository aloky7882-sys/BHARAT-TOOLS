// ===============================
// BHARAT TOOLS - script.js
// ===============================

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}

// Tool Search
const search = document.getElementById("search");

if (search) {
    search.addEventListener("keyup", function () {

        const value = this.value.toLowerCase().trim();
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });
}

// Smooth Button Click Effect
document.querySelectorAll(".card button").forEach(button => {

    button.addEventListener("click", function () {

        this.style.transform = "scale(.95)";

        setTimeout(() => {

            this.style.transform = "scale(1)";

        }, 150);

    });

});

// Fade Animation on Scroll
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.1
});

document.querySelectorAll(".card,.feature-box,.category-box").forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all .6s ease";

    observer.observe(el);

});

// Navbar Shadow on Scroll
window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 20) {
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.18)";
    } else {
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.12)";
    }

});