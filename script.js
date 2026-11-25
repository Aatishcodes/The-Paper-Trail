// Mobile menu
const btn = document.querySelector('.menu-btn');
const links = document.querySelector('.links');
btn.addEventListener('click', () => links.classList.toggle('open'));

// Highlight current page in the menu
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.links a').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});

// Shadow on nav when scrolling
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 10));

// Fade-in sections on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.section .container').forEach(el => { el.classList.add('reveal'); io.observe(el); });

