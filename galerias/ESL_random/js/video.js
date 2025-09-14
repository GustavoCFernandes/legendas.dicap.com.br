// Seleciona os elementos relevantes
const videoItems = document.querySelectorAll('#videoItems li');
const currentVideo = document.getElementById('currentVideo');
const videoTitle = document.getElementById('videoTitle');
const downloadLink = document.getElementById('downloadLink');

// Adiciona eventos de clique aos itens da lista de vídeos
videoItems.forEach(item => {
    item.addEventListener('click', () => {
        // Obtém o link do vídeo
        const videoSrc = item.getAttribute('data-video-src');
        
        // Atualiza o player de vídeo com o novo src
        currentVideo.src = videoSrc;
        
        // Atualiza o título do vídeo
        videoTitle.textContent = item.textContent;
        
        // Exibe o link de download
        downloadLink.href = videoSrc;
        downloadLink.style.display = 'block';
        
        // Carrega o vídeo ao clicar
        currentVideo.load();
        currentVideo.play();
    });
});

// Função para lidar com os atalhos de teclado
document.addEventListener('keydown', (event) => {
    const currentTime = currentVideo.currentTime;

    // Avança 10 segundos ao pressionar a tecla "ArrowRight"
    if (event.key === 'ArrowRight') {
        currentVideo.currentTime = currentTime + 2;
    }

    // Retrocede 10 segundos ao pressionar a tecla "ArrowLeft"
    if (event.key === 'ArrowLeft') {
        currentVideo.currentTime = currentTime - 2;
    }
});