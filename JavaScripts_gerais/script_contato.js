function copiarTexto() {
    const elementoTexto = document.getElementById('meuTexto');
    const areaDeTextoTemp = document.createElement('textarea');
    areaDeTextoTemp.value = elementoTexto.textContent || elementoTexto.innerText;
    areaDeTextoTemp.style.position = 'fixed';
    areaDeTextoTemp.style.top = '0';
    areaDeTextoTemp.style.left = '0';
    areaDeTextoTemp.style.opacity = '0';
    document.body.appendChild(areaDeTextoTemp);
    areaDeTextoTemp.select();
        try {
            const sucesso = document.execCommand('copy');
            if (sucesso) {
            const mensagem = document.getElementById('mensagem-confirmacao');
            mensagem.style.display = 'block';
            setTimeout(() => {
            mensagem.style.display = 'none';
            }, 2000);
            } else {
            console.error('Falha ao copiar o texto.');}
            } catch (err) {
        console.error('Erro ao tentar copiar o texto: ', err);
            } finally {
            document.body.removeChild(areaDeTextoTemp);}}
            document.getElementById('meuTexto').addEventListener('click', copiarTexto);