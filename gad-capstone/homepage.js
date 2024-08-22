// Existing code for carousel functionality
let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.carousel-slide img');
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }
    document.querySelector('.carousel-slide').style.transform = `translateX(${-slideIndex * 100}%)`;
}

// New code to handle Login and Sign Up redirection
document.querySelector('.dropdown a[href="#login"]').addEventListener('click', function() {
    window.location.href = 'login.php';
});

document.querySelector('.dropdown a[href="#signup"]').addEventListener('click', function() {
    window.location.href = 'signup.php';
});
