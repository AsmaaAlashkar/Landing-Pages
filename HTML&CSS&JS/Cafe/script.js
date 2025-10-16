// --- Carousel (simple) ---
(function () {
    const slides = document.getElementById('slides');
    const total = slides.children.length;
    let idx = 0;
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    let interval = null;

    function go(i) {
        idx = (i + total) % total;
        slides.style.transform = `translateX(${idx * 100}%)`; // Changed sign to positive for RTL
    }
    prev.addEventListener('click', () => { go(idx - 1); resetAuto(); });
    next.addEventListener('click', () => { go(idx + 1); resetAuto(); });

    function autoPlay() {
        interval = setInterval(() => { go(idx + 1); }, 4000);
    }
    function resetAuto() { clearInterval(interval); autoPlay(); }
    autoPlay();
})();
// --- Menu filtering + search ---
(function () {
    const select = document.getElementById('categorySelect');
    const search = document.getElementById('searchInput');
    const grid = document.getElementById('menuGrid');
    const cards = Array.from(grid.querySelectorAll('.card'));


    function filter() {
        const cat = select.value;
        const q = search.value.trim().toLowerCase();
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const category = card.dataset.category;
            const matchCat = (cat === 'all') || (category === cat);
            const matchQ = q === '' || title.includes(q);
            if (matchCat && matchQ) card.style.display = '';
            else card.style.display = 'none';
        })
    }


    select.addEventListener('change', filter);
    search.addEventListener('input', filter);
})();
// --- Contact form (fake submit) ---
(function () {
    const form = document.getElementById('contactForm');
    const send = document.getElementById('sendBtn');
    const msg = document.getElementById('formMsg');
    send.addEventListener('click', () => {
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        if (!name || !phone) {
            alert('اكتب اسمك وموبايلك من فضلك');
            return;
        }
        msg.style.display = 'block';
        setTimeout(() => { msg.style.display = 'none'; form.reset(); }, 2500);
    });
})();