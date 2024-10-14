window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "#333"; // Dark background on scroll
    } else {
        navbar.style.backgroundColor = "rgba(51, 51, 51, 0.8)"; // Transparent background
    }
};
