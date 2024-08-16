document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const totalSlides = slides.length;
    let slideIndex = 0;

    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            if (index === slideIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        const offset = -slideIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
        updateIndicators(); // Update indicators
    }

    // Change slide every 3 seconds
    setInterval(nextSlide, 3000);

    // Initialize with the first slide
    nextSlide();
});
document.querySelectorAll('.award-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
        item.style.borderColor = 'rgba(255, 255, 255, 0.5)';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
        item.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    });
});

document.querySelectorAll('.service').forEach(service => {
    service.addEventListener('mouseover', () => {
        service.style.transform = 'scale(1.05)';
    });
    service.addEventListener('mouseout', () => {
        service.style.transform = 'scale(1)';
    });
});
document.querySelectorAll('.logo img').forEach(logo => {
    logo.addEventListener('mouseover', () => {
        logo.style.transform = 'scale(1.1)';
    });
    logo.addEventListener('mouseout', () => {
        logo.style.transform = 'scale(1)';
    });
});
document.querySelectorAll('.review-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = '#ff9966';
    });
    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = '';
    });
});