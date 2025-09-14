// Variável global para armazenar o player do YouTube
let youtubePlayer;

// Função chamada automaticamente pela YouTube Player API
function onYouTubeIframeAPIReady() {
    // Inicializa o player do YouTube
    youtubePlayer = new YT.Player('videoContainer', {
        height: '315',
        width: '560',
        videoId: '', // Vazio inicialmente, será atualizado ao selecionar um vídeo
        playerVars: {
            autoplay: 0, // Não reproduz automaticamente
            controls: 1, // Mostra os controles padrão do YouTube
            rel: 0, // Não mostra vídeos relacionados ao final
            modestbranding: 1, // Remove o logo do YouTube
        },
        events: {
            onReady: onPlayerReady, // Chamado quando o player estiver pronto
        },
    });
}

// Função chamada quando o player está pronto
function onPlayerReady(event) {
    console.log('Player do YouTube pronto!');
}

// Função para carregar um vídeo no player
function loadYouTubeVideo(videoId, title) {
    if (youtubePlayer) {
        youtubePlayer.loadVideoById(videoId); // Carrega o vídeo pelo ID
        document.getElementById('videoTitle').textContent = title; // Atualiza o título
    }
}

// Função para avançar 2 segundos
function forwardVideo() {
    if (youtubePlayer) {
        const currentTime = youtubePlayer.getCurrentTime();
        youtubePlayer.seekTo(currentTime + 2, true); // Avança 2 segundos
    }
}

// Função para retroceder 2 segundos
function rewindVideo() {
    if (youtubePlayer) {
        const currentTime = youtubePlayer.getCurrentTime();
        youtubePlayer.seekTo(Math.max(0, currentTime - 2), true); // Retrocede 2 segundos
    }
}