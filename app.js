function spawnShootingStar() {
  const star = document.createElement("div");
  star.className = "shooting-star";
  star.style.top = Math.random() * 40 + "vh";
  star.style.left = Math.random() * 60 + "vw";
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 1500);
}

function scheduleShootingStars() {
  spawnShootingStar();
  setTimeout(scheduleShootingStars, Math.random() * 8000 + 5000); // every 5-13s
}

function openURL(url) {
  window.open(url, '_blank');
}

let currentGalleryImages = [];
let currentFsIndex = 0;

function openFullscreen(clickedEl) {
  const container = clickedEl.closest(".image-swap-container");
  currentGalleryImages = container.dataset.images.split(",");
  currentFsIndex = 0;

  document.getElementById("fs-image").src = currentGalleryImages[currentFsIndex];
  document.getElementById("fullscreen-viewer").style.display = "flex";
}

function navigateFullscreen(direction) {
  currentFsIndex = (currentFsIndex + direction + currentGalleryImages.length) % currentGalleryImages.length;
  document.getElementById("fs-image").src = currentGalleryImages[currentFsIndex];
}

function closeFullscreen() {
  document.getElementById("fullscreen-viewer").style.display = "none";
}

function closeFullscreenBackground(event) {
  if (event.target.id === "fullscreen-viewer") {
    closeFullscreen();
  }
}

function playAnimation() {
  const img = document.getElementById("profile-pic");
  img.src = "Images/PersonCammockGifV3.gif";

  setTimeout(() => {
    img.src = "Images/PersonCammockV2.png";
  }, 4000); 
}

scheduleShootingStars();