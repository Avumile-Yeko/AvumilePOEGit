// Reveal animation for product and service cards
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));

    // Accordion toggle for services
    const serviceCards = document.querySelectorAll('#services .card');
    serviceCards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('open');
      });
    });

    // Back to top button behavior
    const topBtn = document.getElementById("topBtn");
    window.onscroll = () => {
      topBtn.style.display = (window.scrollY > 100) ? "block" : "none";
    };
    topBtn.onclick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Lightbox functionality for images
    const lightboxModal = document.getElementById("lightboxModal");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxClose = document.getElementById("lightbox-close");

    document.querySelectorAll(".lightbox-img").forEach(img => {
        img.addEventListener("click", () => {
            lightboxModal.style.display = "block";
            lightboxImage.src = img.src;
        });
    });

    lightboxClose.addEventListener("click", () => {
        lightboxModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === lightboxModal) {
            lightboxModal.style.display = "none";
        }
    });
    

