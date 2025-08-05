document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); 

      
    alert("Thank you! Your message has been sent.");

    form.reset(); 
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});