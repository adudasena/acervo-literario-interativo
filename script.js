document.addEventListener("DOMContentLoaded", function() {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    let currentIndex = 0;
    const images = carousel.querySelectorAll("img");
    setInterval(() => {
      images[currentIndex].style.display = "none";
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].style.display = "block";
    }, 2000);
  });
});
