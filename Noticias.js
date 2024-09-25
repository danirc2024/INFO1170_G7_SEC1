let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; 
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides; 
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

// Detect click on each slide to open respective link
for (let i = 0; i < totalSlides; i++) {
    slides.children[i].addEventListener('click', function() {
        const link = this.getAttribute('data-link'); 
        window.open(link, '_blank');
    });
}

// Auto-slide every 5 seconds
setInterval(showNextSlide, 5000);

// Change title when page visibility changes
const originalTitle = document.title; 
const newTitle = "Algo Sucedeee!!!"; 

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        document.title = newTitle;
    } else {
        document.title = originalTitle;
    }
});
