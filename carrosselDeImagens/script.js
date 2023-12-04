document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('myCarousel');
    let currentIndex = 0;
    let isPaused = false;
    let intervalId;

    function showSlide(index) {
        if (index < 0) {
            currentIndex = carousel.children.length - 1;
        } else if (index >= carousel.children.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const newPosition = -currentIndex * 100 + '%';
        carousel.style.transform = 'translateX(' + newPosition + ')';
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function togglePause() {
        isPaused = !isPaused;

        if (isPaused) {
            clearInterval(intervalId);
        } else {
            intervalId = setInterval(nextSlide, 5000);
        }
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }



    // Adicione eventos de clique aos botões de navegação e pausa
    document.querySelector('.carousel-controls button:nth-child(1)').addEventListener('click', prevSlide);
    document.querySelector('.carousel-controls button:nth-child(2)').addEventListener('click', togglePause);
    document.querySelector('.carousel-controls button:nth-child(3)').addEventListener('click', nextSlide);

    // Inicie o carrossel automaticamente
    intervalId = setInterval(nextSlide, 5000);

    showSlide(currentIndex);
});
