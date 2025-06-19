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

    // Live search for products/services cards and highlighting the searched text in the cards
    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("keyup", () => {
        const filter = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const text = card.textContent.toLowerCase();

            // Reset highlights
            const titleEl = card.querySelector("h3");
            const descEl = card.querySelector("p");
            const originalTitle = titleEl.getAttribute("data-original") || titleEl.textContent;
            const originalDesc = descEl.getAttribute("data-original") || descEl.textContent;

            if (text.includes(filter)) {
                card.style.display = "block";

                // Highlight in title
                const highlightedTitle = originalTitle.replace(new RegExp(filter, 'gi'), match => `<mark>${match}</mark>`);
                titleEl.innerHTML = highlightedTitle;
                titleEl.setAttribute("data-original", originalTitle);

                // Highlight in description
                const highlightedDesc = originalDesc.replace(new RegExp(filter, 'gi'), match => `<mark>${match}</mark>`);
                descEl.innerHTML = highlightedDesc;
                descEl.setAttribute("data-original", originalDesc);

            } else {
                card.style.display = "none";
            }
        });
    });


