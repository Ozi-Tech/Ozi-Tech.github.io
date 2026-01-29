// ========================
// Smooth Scroll Animation Observer (AOS-like)
// ========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Observe all elements with data-aos attribute
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach(el => observer.observe(el));
});

// ========================
// Mobile Navigation Toggle
// ========================

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ========================
// Smooth Scroll for Navigation
// ========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Height of fixed nav
            const targetPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================
// Active Navigation Link on Scroll
// ========================

const sections = document.querySelectorAll('section[id]');

function highlightNav() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNav);

// ========================
// Image Carousel for Data Management Project
// ========================

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-image');
    const dots = document.querySelectorAll('.dot');
    
    if (!slides.length) return;
    
    // Wrap around
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current slide
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}

function currentSlideFunc(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

// Auto-advance carousel every 5 seconds
let carouselInterval = setInterval(() => {
    changeSlide(1);
}, 5000);

// Pause auto-advance on hover
const carousel = document.querySelector('.project-carousel');
if (carousel) {
    carousel.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(() => {
            changeSlide(1);
        }, 5000);
    });
}

// Initialize carousel
showSlide(currentSlide);

// ========================
// Skill Bar Animation on Scroll
// ========================

const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Trigger width animation
            const width = entry.target.style.width;
            entry.target.style.width = '0%';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));

// ========================
// Typing Effect for Hero Label
// ========================

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect
const heroLabel = document.querySelector('.hero-label');
if (heroLabel) {
    const originalText = heroLabel.textContent;
    typeWriter(heroLabel, originalText, 60);
}

// ========================
// Scroll to Top Button
// ========================

function createScrollToTop() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary);
        color: var(--bg-dark);
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

createScrollToTop();

// ========================
// Caught you peaking!
// ========================

console.log('%cHi there!', 'font-size: 20px; font-weight: bold; color: #00d9ff;');
console.log('%cLooking at the code? I\m honoured.', 'font-size: 14px; color: #94a3b8;');
console.log('%cFeel free to reach out: ekene.ndubueze@gmail.com', 'font-size: 14px; color: #94a3b8;');

// ========================
// Performance: Lazy Load Images
// ========================

if ('loading' in HTMLImageElement.prototype) {
    // Browser supports lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for older browsers
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ========================
// Analytics (Placeholder)
// ========================

// Add Google Analytics or other tracking here
