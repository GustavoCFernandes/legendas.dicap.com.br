// Função para copiar o link do vídeo
function copiarLink() {
    if (!currentVideoSrc) {
        alert('Nenhum vídeo selecionado.');
        return;
    }

    navigator.clipboard.writeText(currentVideoSrc).then(() => {
        alert('Link copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar o link:', err);
        alert('Erro ao copiar o link. Por favor, tente novamente.');
    });
}

// Função para enviar o link do vídeo no WhatsApp
function enviarWhatsApp() {
    if (!currentVideoSrc) {
        alert('Nenhum vídeo selecionado.');
        return;
    }

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(currentVideoSrc)}`;
    window.open(whatsappUrl, '_blank');
}