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

function isVideo(src) {
  return src.toLowerCase().endsWith(".mp4");
}

function showFullscreenItem(src) {
  const imgEl = document.getElementById("fs-image");
  const videoEl = document.getElementById("fs-video");

  videoEl.pause();

  if (isVideo(src)) {
    imgEl.style.display = "none";
    videoEl.style.display = "block";
    videoEl.querySelector("source")?.remove();
    videoEl.src = src;
    videoEl.load();
    videoEl.play();
  } else {
    videoEl.style.display = "none";
    imgEl.style.display = "block";
    imgEl.src = src;
  }
}

function openFullscreen(clickedEl, srcOverride) {
  const container = clickedEl.closest(".image-swap-container");
  currentGalleryImages = container.dataset.images.split(",");
  currentFsIndex = currentGalleryImages.indexOf(srcOverride);
  if (currentFsIndex === -1) currentFsIndex = 0;

  showFullscreenItem(currentGalleryImages[currentFsIndex]);
  document.getElementById("fullscreen-viewer").style.display = "flex";
}

function navigateFullscreen(direction) {
  currentFsIndex = (currentFsIndex + direction + currentGalleryImages.length) % currentGalleryImages.length;
  showFullscreenItem(currentGalleryImages[currentFsIndex]);
}

function closeFullscreen() {
  document.getElementById("fs-video").pause();
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