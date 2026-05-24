import './style.css';


// Intersection Observer for Reveal effects on Scroll
const revealElements = document.querySelectorAll('.reveal-on-scroll');

if (revealElements.length > 0) {
  const observerOptions = {
    root: null, // use viewport
    rootMargin: '0px',
    threshold: 0.08 // triggers when 8% of the element is visible
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Unobserve after showing so animation only plays once
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });
}

// Fade in on load trigger for hero elements
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in-on-load').forEach((el) => {
    const delay = el.dataset.delay ? parseInt(el.dataset.delay) : 0;
    setTimeout(() => {
      el.classList.add('loaded');
    }, delay);
  });
});

// Header scroll background trigger
const header = document.querySelector('nav');
if (header) {
  const scrollHandler = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  // Run on initial load in case user refreshed partway down the page
  window.addEventListener('scroll', scrollHandler);
  scrollHandler();
}

