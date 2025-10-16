// Mobile menu toggle
const mobileBtn = document.getElementById('mobileBtn');
const mobileMenu = document.getElementById('mobileMenu');
mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.length > 1) {
            const el = document.querySelector(href);
            if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); mobileMenu.classList.add('hidden'); }
        }
    });
});

// Intersection Observer for reveal animations
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('show'); io.unobserve(entry.target); }
    });
}, { threshold: 0.12 });
reveals.forEach(r => io.observe(r));

// Newsletter form (fake submit)
const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletterEmail');
const newsletterMsg = document.getElementById('newsletterMsg');
newsletterForm.addEventListener('submit', () => {
    const email = newsletterEmail.value.trim();
    if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) { alert('Please enter a valid email'); return; }
    newsletterMsg.style.display = 'block'; newsletterMsg.textContent = 'Thanks — you are subscribed!';
    newsletterForm.reset(); setTimeout(() => newsletterMsg.style.display = 'none', 3000);
});

// Contact form (fake submit)
const contactForm = document.getElementById('contactForm');
const contactMsg = document.getElementById('contactMsg');
contactForm.addEventListener('submit', () => {
    const name = document.getElementById('cname').value.trim();
    const email = document.getElementById('cemail').value.trim();
    if (!name || !email) { alert('Please fill name and email'); return; }
    contactMsg.style.display = 'block'; contactMsg.textContent = 'Thanks — we received your message.';
    contactForm.reset(); setTimeout(() => contactMsg.style.display = 'none', 2500);
});

// small focus: ensure keyboard users can close mobile menu with Escape
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') mobileMenu.classList.add('hidden'); });
