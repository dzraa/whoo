// filepath: personal-intro-website/js/main.js

document.addEventListener('DOMContentLoaded', function() {
    const introButton = document.getElementById('introButton');
    const introText = document.getElementById('introText');

    introButton.addEventListener('click', function() {
        introText.classList.toggle('visible');
    });
});