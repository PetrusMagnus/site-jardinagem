// Carregar mais fotos na galeria
document.getElementById('load-more').addEventListener('click', function () {
    const hiddenItems = document.querySelectorAll('.gallery-item.hidden');
    hiddenItems.forEach(item => item.classList.remove('hidden'));
    this.style.display = 'none'; // Oculta o botão após carregar todas as fotos
});