const logos = ['logo1.png', 'logo2.png', 'logo3.png']; // Replace with your logo filenames
    let currentLogoIndex = 0;
    const logoContainer = document.getElementById('logo-container');

    function changeLogo() {
        currentLogoIndex = (currentLogoIndex + 1) % logos.length;
        const nextLogo = logos[currentLogoIndex];
        logoContainer.style.backgroundImage = `url('${nextLogo}')`;
    }

    // Change logo every 3 seconds (adjust as needed)
    setInterval(changeLogo, 2000);