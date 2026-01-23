// ===== INITIALIZE AOS ANIMATION =====
AOS.init({
  duration: 1200,
  once: true,
  offset: 100
});

// ===== TYPING ANIMATION =====
const text = [
  "Web Developer",
  "Computer Engineering Student",
  "AgriTech Enthusiast",
  "Problem Solver"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;
const typingEl = document.querySelector(".typing");

function type() {
  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      current = text[i].slice(0, j++);
    } else if (isDeleting && j >= 0) {
      current = text[i].slice(0, j--);
    }

    typingEl.textContent = current;

    if (j === text[i].length) {
      isDeleting = true;
    }
    
    if (isDeleting && j === 0) {
      isDeleting = false;
      i++;
    }
  } else {
    i = 0;
  }
  
  setTimeout(type, 120);
}

// Start typing animation
type();

// ===== PARTICLES.JS CONFIGURATION =====
particlesJS("particles-js", {
  particles: {
    number: { 
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#38bdf8"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5,
      random: false
    },
    size: { 
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#38bdf8",
      opacity: 0.4,
      width: 1
    },
    move: { 
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});

// ===== PARALLAX SCROLLING EFFECT =====
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const animatedBg = document.querySelector(".animated-bg");
  
  if (animatedBg) {
    animatedBg.style.transform = `translateY(${scrollY * 0.3}px)`;
  }
});

// ===== WHATSAPP FORM SUBMISSION =====
document.getElementById("whatsapp-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  // Replace with your WhatsApp number (with country code, no + or -)
  const phoneNumber = "919657597357";

  const whatsappMessage =
    `Hello Someshwar 👋%0A%0A` +
    `Name: ${encodeURIComponent(name)}%0A` +
    `Message: ${encodeURIComponent(message)}`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  window.open(whatsappURL, "_blank");
  
  // Reset form
  this.reset();
});

// ===== SMOOTH SCROLL FOR NAVIGATION =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== SKILL CIRCLE ANIMATION ON SCROLL =====
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px"
};

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "skillPulse 3s ease-in-out infinite";
    }
  });
}, observerOptions);

document.querySelectorAll('.skill-circle').forEach(skill => {
  skillObserver.observe(skill);
});

// ===== PROJECT CARD HOVER EFFECT =====
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.zIndex = '10';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.zIndex = '1';
  });
});

// ===== CONSOLE MESSAGE =====
console.log("%c🚀 Portfolio by Someshwar Shinde", "color: #38bdf8; font-size: 20px; font-weight: bold;");
console.log("%c💼 Looking for opportunities in Web Development", "color: #0ea5e9; font-size: 14px;");