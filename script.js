document.addEventListener("DOMContentLoaded", () => {
    // AOS
    if (window.AOS) {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            easing: "ease-out-quart"
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById("navbar");

    const onScroll = () => {
        if (!navbar) return;
        navbar.classList.toggle("scrolled", window.scrollY > 50);

        const heroImg = document.querySelector(".hero-image .image-wrapper");
        if (heroImg && window.innerWidth > 768) {
            heroImg.style.transform = `translateY(${window.scrollY * 0.03}px) rotate(1deg)`;
        }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Mobile menu
    const mobileToggle = document.getElementById("mobileToggle");
    const navLinks = document.getElementById("navLinks");

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            const icon = mobileToggle.querySelector("i");
            if (icon) {
                icon.className = navLinks.classList.contains("active")
                    ? "fas fa-times"
                    : "fas fa-bars";
            }
        });

        document.querySelectorAll(".nav-links a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                const icon = mobileToggle.querySelector("i");
                if (icon) icon.className = "fas fa-bars";
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // Support form alert
    const supportForm = document.getElementById("supportForm");
    if (supportForm) {
        supportForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Спасибо! Менеджер свяжется с вами в течение часа.");
        });
    }
});

// =========================
// LIGHTBOX GALLERY
// =========================

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.querySelector(".lightbox-close");

galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
        lightbox.classList.add("active");
        lightboxImg.src = img.src;
    });
});

// Закрытие
if (lightboxClose) {
    lightboxClose.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });
}

// Закрытие по фону
if (lightbox) {
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("active");
        }
    });
}

// ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        lightbox.classList.remove("active");
    }
});