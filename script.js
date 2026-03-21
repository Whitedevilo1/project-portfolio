let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => links.classList.remove('active'));
      document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');

    sec.classList.add('show-animate');
    }
    else {
      sec.classList.remove('show-animate');
    }
  });

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault(); // 🚫 stop redirect

      const data = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: data,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          status.innerHTML = "✅ Message sent successfully!";
          status.style.color = "#00abf0";
          form.reset();
        } else {
          status.innerHTML = "❌ Something went wrong. Try again.";
          status.style.color = "red";
        }
      } catch (error) {
        status.innerHTML = "❌ Error sending message.";
        status.style.color = "red";
      }
    });
  }

});
const words = ["Developer", "Coder", "Tech Enthusiast"];
const textElement = document.querySelector(".dynamic-text");

let wordIndex = 0;

function scrambleText(finalText) {
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  let iterations = 0;

  const interval = setInterval(() => {
    textElement.innerText = finalText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return finalText[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    if (iterations >= finalText.length) {
      clearInterval(interval);
    }

    iterations += 1 / 2;
  }, 60);
}

function changeWord() {
  // STEP 1: fade out current word
  textElement.classList.remove("fade-in");
  textElement.classList.add("fade-out");

  setTimeout(() => {
    // STEP 2: change word
    wordIndex = (wordIndex + 1) % words.length;
    scrambleText(words[wordIndex]);

    // STEP 3: reset animation (important)
    textElement.classList.remove("fade-out");

    // force reflow (🔥 key trick)
    void textElement.offsetWidth;

    // STEP 4: fade in again
    textElement.classList.add("fade-in");

  }, 400);
}

// initial
scrambleText(words[wordIndex]);

// loop
setInterval(changeWord, 3500);

const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle");

music.volume = 0.2;

let isPlaying = false;

// 🔥 Start on first interaction anywhere
function startMusicOnce() {
    music.play().then(() => {
        isPlaying = true;
        toggleBtn.textContent = "🔇";
    }).catch(() => {});
}

["click", "scroll", "keydown"].forEach(event => {
    document.addEventListener(event, startMusicOnce, { once: true });
});

// 🔁 Toggle button
toggleBtn.addEventListener("click", () => {
    if (isPlaying) {
        music.pause();
        toggleBtn.textContent = "🔊";
    } else {
        music.play();
        toggleBtn.textContent = "🔇";
    }
    isPlaying = !isPlaying;
});

const btn = document.getElementById("readMoreBtn");
const moreText = document.getElementById("moreText");

let isOpen = false;

btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (!isOpen) {
        moreText.classList.add("show");
        btn.textContent = "Read Less";
    } else {
        moreText.classList.remove("show");
        btn.textContent = "Read More";
    }

    isOpen = !isOpen;
});
