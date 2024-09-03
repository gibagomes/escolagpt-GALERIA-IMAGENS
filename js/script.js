let currentImageIndex = 0;
const images = [
  "images/ia1.webp",
  "images/ia2.webp",
  "images/ia3.webp",
  "images/ia4.webp",
  "images/ia5.webp",
  "images/ia6.webp",
];
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

function openImage(index) {
  currentImageIndex = index;
  lightboxImage.src = images[currentImageIndex];
  lightbox.style.display = "flex";
}

function closeImage() {
  lightbox.style.display = "none";
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  lightboxImage.src = images[currentImageIndex];
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  lightboxImage.src = images[currentImageIndex];
}

let zoomLevel = 1;

function zoomIn() {
  zoomLevel += 0.1;
  lightboxImage.style.transform = `scale(${zoomLevel})`;
}

function zoomOut() {
  if (zoomLevel > 1) {
    zoomLevel -= 0.1;
    lightboxImage.style.transform = `scale(${zoomLevel})`;
  }
}
