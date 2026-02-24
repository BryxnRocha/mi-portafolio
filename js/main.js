// ================= SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// ================= ANIMACION SCROLL =================
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

hiddenElements.forEach(el => observer.observe(el));


// ================= NAVBAR EFECTO =================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ================= TYPING  =================

const typingElement = document.getElementById("typing");

const roles = [
    "Full Stack Developer",
    "QA Automation Engineer",
    "Cybersecurity Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            setTimeout(() => isDeleting = true, 1200);
        }
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    const speed = isDeleting ? 50 : 90;
    setTimeout(typeEffect, speed);
}

typeEffect();

// ================= PARTICLES HERO =================

tsParticles.load("particles-js", {
    fullScreen: { enable: false },
    background: { color: "transparent" },
    particles: {
        number: { value: 70 },
        color: { value: "#38bdf8" },
        links: {
            enable: true,
            color: "#38bdf8",
            distance: 140,
            opacity: 0.3
        },
        move: {
            enable: true,
            speed: 1
        },
        size: {
            value: 2
        },
        opacity: {
            value: 0.5
        }
    }
});