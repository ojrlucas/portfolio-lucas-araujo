var clicks = null

function navLinksSuperior() {
    clicks = (clicks == true) ? false : true
    const abreListaLinks = document.getElementById('lista-links-superior')
    
    if (clicks) {
        abreListaLinks.style.display = 'flex'

    } else {
        abreListaLinks.style.display = 'none'

    }   
}

document.getElementById('menu-lateral').onload = function() {
    const iframeDocument = this.contentDocument || this.contentWindow.document;
    const meuLink = iframeDocument.getElementById('meuLink');

    if (meuLink) {
        meuLink.addEventListener('click', function(event) {
            event.preventDefault();
            window.open(this.href, '_blank');
            window.close();
        });
    }
};