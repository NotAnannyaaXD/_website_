// Typewriter effect for splash screen
const text = "/anannyaa.website";
let index = 0;

window.addEventListener("DOMContentLoaded", () => {
  // select by class to match index.html and guard against missing element
  const typewriterElement = document.querySelector(".typewriter");

  function typeWriter() {
    if (!typewriterElement) return;
    if (index < text.length) {
      typewriterElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 30);
    }
  }

  setTimeout(typeWriter, 30);

  // Initialize welcome section as active after splash screen (match CSS 1.5s)
  setTimeout(() => {
    showSection("welcome");
  }, 1600);
});

// Show sections
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll(".section").forEach((sec) => sec.classList.remove("active"));

  // Show selected section (guard against missing id)
  const target = document.getElementById(sectionId);
  if (target) target.classList.add("active");

  // Remove active class from all nav items
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => item.classList.remove("active"));

  // Map section IDs to nav item index (matches index.html order)
  const navMap = {
    notes: 0,
    about: 1,
    projects: 2,
    contact: 3,
    skills: 4,
    welcome: 5,
  };

  // Add active class to the correct nav item
  if (navMap[sectionId] !== undefined && navItems[navMap[sectionId]]) {
    navItems[navMap[sectionId]].classList.add("active");
  }
}

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  // ignore when typing into inputs/textareas or contenteditable
  const tag = e.target.tagName;
  if (tag === "TEXTAREA" || tag === "INPUT" || e.target.isContentEditable) return;

  const key = e.key.toLowerCase();
  const sections = {
    n: "notes",
    a: "about",
    p: "projects",
    c: "contact",   // fixed
    s: "skills",
    h: "welcome",   // fixed
  };

  if (sections[key]) {
    showSection(sections[key]);
  }
});
