document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const pauseBtn = document.querySelector(".pause");
    let stopCarousel = false;
    let intervalId = 0;
    let currentIndex = 0;

    function createCards() {
        carousel.innerHTML = "";
        infoCards.forEach((card, index) => {
            const cardElement = document.createElement("div");
            cardElement.id = card.id;
            cardElement.classList.add("card");
            cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="${card.image}" alt="${card.title}">
                    <div class="card-content">
                        <h2>${card.title}</h2>
                        <p>${card.description}</p>
                    </div>
                </div>
                <div class="card-back">
                    <h2>${card.title}</h2>
                    <p>${card.detalle}</p>
                </div>
            </div>
            `;
            carousel.appendChild(cardElement);
        });
    }

    function updateCarousel() {
        const cardWidth = document.querySelector(".card").offsetWidth + 40; 
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % (infoCards.length - 2);
        updateCarousel();
    }

    function pauseCarousel() {
        stopCarousel = !stopCarousel;
        if (stopCarousel) { 
            clearInterval(intervalId);
        } else {
            intervalId = setInterval(showNext, 5000);
        }
    }

    function showPrev() {
        currentIndex =
            (currentIndex - 1 + (infoCards.length - 2)) % (infoCards.length - 2);
        updateCarousel();
    }

    createCards();
    nextBtn.addEventListener("click", showNext);
    prevBtn.addEventListener("click", showPrev);
    pauseBtn.addEventListener("click", pauseCarousel);
    // Inicializar el carrusel
    updateCarousel();

    // Auto-play (opcional)
    intervalId = setInterval(showNext, 5000);

    // Responsive behavior
    window.addEventListener("resize", () => {
        createCards();
        updateCarousel();
    });

});

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todas las tarjetas
    const cards = document.querySelectorAll('.card');

    // Agregar un event listener a cada tarjeta
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });
});
