window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.about-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const isActive = card.classList.contains('expanded');

            cards.forEach(c => {
                c.classList.remove('expanded', 'dimmed');
                c.style.zIndex = "1";
            });

            if (!isActive) {
                card.classList.add('expanded');
                cards.forEach(c => {
                    if (c !== card) c.classList.add('dimmed');
                });

                card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'center' });
            }
        });
    });
});

