'use strict';

function toggleTheme() {
    document.body.classList.toggle('Dark-theme');
    const switcher = document.querySelector('.btn');
    const className = document.body.className;
    switcher.textContent = (className === 'Light-theme') ? 'Dark' : 'Light';
    console.log('current class name: ' + className);
}

function toggleCertificateSize(certificate) {
    certificate.classList.toggle('enlarged');
}

function showCertificateModal(imageSrc) {
    const modal = document.getElementById('certificate-modal');
    const modalImage = document.getElementById('modal-image');

    modalImage.src = imageSrc;  // Usamos a propriedade src para definir a imagem
    modal.style.display = 'flex';
}

function hideCertificateModal() {
    const modal = document.getElementById('certificate-modal');
    modal.style.display = 'none';
}
