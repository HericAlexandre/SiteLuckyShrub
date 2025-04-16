document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.image-carousel img');
  let currentIndex = 0;

  // Function to show the next image
  function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  }

  // Set the first image as active
  images[currentIndex].classList.add('active');

  // Change image every 5 seconds (plus 2 seconds for transition)
  setInterval(showNextImage, 7000); // 5000 ms for display, 2000 ms for fade
});
