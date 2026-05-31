const PASSWORD = "belltower";

const passwordScreen = document.getElementById("password-screen");
const site = document.getElementById("site");
const form = document.getElementById("password-form");
const input = document.getElementById("password-input");
const error = document.getElementById("password-error");

function unlockSite() {
  passwordScreen.classList.add("hidden");
  site.classList.remove("hidden");
  localStorage.setItem("weddingSiteUnlocked", "true");
}

if (localStorage.getItem("weddingSiteUnlocked") === "true") {
  unlockSite();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value.trim().toLowerCase() === PASSWORD) {
    unlockSite();
  } else {
    error.textContent = "Wrong password. Try again.";
  }
});

const weddingDate = new Date("2027-03-13T16:00:00+08:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const difference = weddingDate - now;

  const days = Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24));
  const minutes = Math.max(0, Math.floor((difference / (1000 * 60)) % 60));
  const seconds = Math.max(0, Math.floor((difference / 1000) % 60));

  document.getElementById("days").textContent = String(days).padStart(3, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
