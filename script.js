AOS.init({ duration: 1200 });

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

    if (j === text[i].length) isDeleting = true;
    if (isDeleting && j === 0) {
      isDeleting = false;
      i++;
    }
  } else {
    i = 0;
  }
  setTimeout(type, 120);
}
type();

particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 1 },
    line_linked: { enable: true }
  }
});
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  document.querySelector(".layer1").style.transform =
    `translateY(${scrollY * 0.15}px)`;

  document.querySelector(".layer2").style.transform =
    `translateY(${scrollY * 0.3}px)`;
});
AOS.init({
  duration: 1200,
  once: true
});

document.querySelector(".contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent successfully 🚀");
});


document.getElementById("whatsapp-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const phoneNumber = "919657597357"; // 🔴 replace with your WhatsApp number

  const whatsappMessage =
    `Hello Someshwar 👋%0A%0A` +
    `Name: ${name}%0A` +
    `Message: ${message}`;

  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  window.open(whatsappURL, "_blank");
});




