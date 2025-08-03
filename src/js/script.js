function openModalFromCard(clickedImage) {
    const card = clickedImage.closest('.card');
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalMainImage");
    const thumbsContainer = document.getElementById("modalThumbs");

    modal.style.display = "flex";
    modalImg.src = clickedImage.src;

    // pegar todas as imagens do carrossel dentro do card clicado
    const thumbs = Array.from(card.querySelectorAll('.carousel img'));

    // limpar thumbs anteriores
    thumbsContainer.innerHTML = "";

    thumbs.forEach(img => {
        const thumb = document.createElement("img");
        thumb.src = img.src;
        thumb.onclick = () => modalImg.src = img.src;
        thumbsContainer.appendChild(thumb);
    });
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

window.onclick = function (e) {
    const modal = document.getElementById("imageModal");
    if (e.target === modal) {
        closeModal();
    }
}



// Menu sandbar
const sandbarToggle = document.getElementById('sandbar-toggle');
const nav = document.getElementById('main-nav');
const closeNav = document.getElementById('close-nav');

function abrirSandbar() {
    nav.classList.add('show');
    sandbarToggle.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function fecharSandbar() {
    nav.classList.remove('show');
    sandbarToggle.classList.remove('active');
    document.body.style.overflow = 'auto';
}

sandbarToggle.addEventListener('click', () => {
    nav.classList.contains('show') ? fecharSandbar() : abrirSandbar();
});

closeNav.addEventListener('click', () => fecharSandbar());

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => fecharSandbar());
});

document.addEventListener('DOMContentLoaded', () => {
    carregarEstado();
    progresso = calcularProgressoInicial();
    desenharGrafico(progresso);
    atualizarBarraProgresso();
});
