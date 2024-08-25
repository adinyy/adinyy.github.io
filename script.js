/*const logos = ['logo1.png', 'logo2.png', 'logo3.png']; // Replace with your logo filenames
    let currentLogoIndex = 0;
    const logoContainer = document.getElementById('logo-container');

    function changeLogo() {
        currentLogoIndex = (currentLogoIndex + 1) % logos.length;
        const nextLogo = logos[currentLogoIndex];
        logoContainer.style.backgroundImage = `url('${nextLogo}')`;
    }

    // Change logo every 3 seconds (adjust as needed)
    setInterval(changeLogo, 2000);
*/


let currentIndexes = [0, 0]; // Array to store current index for each carousel

  function moveCarousel(carouselIndex, direction) {
    const carousels = document.querySelectorAll('.carousel-track');
    const track = carousels[carouselIndex];
    const totalItems = track.querySelectorAll('.carousel-item').length;
    const itemsPerSlide = 3;

    currentIndexes[carouselIndex] += direction;

    if (currentIndexes[carouselIndex] < 0) {
      currentIndexes[carouselIndex] = totalItems / itemsPerSlide - 1;
    } else if (currentIndexes[carouselIndex] >= totalItems / itemsPerSlide) {
      currentIndexes[carouselIndex] = 0;
    }

    const translateX = -currentIndexes[carouselIndex] * 100;
    track.style.transform = `translateX(${translateX}%)`;
  }