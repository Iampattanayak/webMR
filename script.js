document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    // Toggle the visibility of navigation links
    navLinks.style.display =
      navLinks.style.display === "flex" ? "none" : "flex";
    // Toggle the open class to change the hamburger to a cross
    hamburger.classList.toggle("open");
  });

  // Optional: Close the menu when a link is clicked
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.style.display = "none";
      hamburger.classList.remove("open"); // Reset to hamburger when menu is closed
    }
  });
});

if (typeof particlesJS === "function") particlesJS("particles-js", {
  particles: {
    number: {
      value: 100, // Number of particles
      density: {
        enable: true,
        value_area: 800, // Adjust particle density
      },
    },
    color: {
      value: ["#ff4757", "#1e90ff", "#ffa502", "#2ed573"], // Multicolored particles
    },
    shape: {
      type: "circle", // You can try "triangle", "star", or "polygon"
      stroke: {
        width: 1,
        color: "#ffffff",
      },
    },
    opacity: {
      value: 0.7,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.3,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: true,
        speed: 5,
        size_min: 0.5,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab", // Interactions: grab, bubble, or repulse
      },
      onclick: {
        enable: true,
        mode: "push", // Adds particles on click
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 0.7,
        },
      },
      bubble: {
        distance: 250,
        size: 10,
        duration: 2,
        opacity: 0.8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

//Dark mode and light mode
// Theme Toggle Logic
const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme preference in localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
  themeToggleButton.textContent =
    savedTheme === "light-mode" ? "🌙 Dark Mode" : "☀️ Light Mode";
}

// Toggle theme on button click
themeToggleButton.addEventListener("click", () => {
  const isLightMode = !body.classList.contains("light-mode");
  body.classList.toggle("light-mode", isLightMode);
  body.classList.toggle("dark-mode", !isLightMode);
  themeToggleButton.textContent = isLightMode ? "🌙 Dark Mode" : "☀️ Light Mode";
  localStorage.setItem("theme", isLightMode ? "light-mode" : "dark-mode");
});



// images slide  Automatic Scroll
const slider = document.getElementById('slider');
const images = slider.querySelectorAll('img');
const totalImages = images.length;
let currentIndex = 0;

// Automatic Scroll
let autoScroll = setInterval(() => {
    moveToNextSlide();
}, 3000);

// Manual Scroll
function manualScroll(direction) {
    clearInterval(autoScroll); // Stop auto-scroll temporarily
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    updateSlider();
    autoScroll = setInterval(() => moveToNextSlide(), 3000); // Resume auto-scroll
}

// Move to next slide for auto-scroll
function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlider();
}

// Update slider transform
function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}


// Get elements
const chatbotButton = document.getElementById('chatbot-button');
const chatbotWindow = document.getElementById('chatbot-window');
const closeChatbotButton = document.getElementById('close-chatbot');

// Toggle chat window visibility
chatbotButton.addEventListener('click', () => {
    chatbotWindow.style.display = chatbotWindow.style.display === 'flex' ? 'none' : 'flex';
});

// Close the chatbot window
closeChatbotButton.addEventListener('click', () => {
    chatbotWindow.style.display = 'none';
});



function toggleMoreEvents() {
  const hiddenCards = document.querySelectorAll('.event-card.hidden');
  hiddenCards.forEach(card => card.classList.remove('hidden'));
  document.querySelector('.read-more-btn').style.display = 'none';
}

document.addEventListener('contextmenu', event => event.preventDefault());
