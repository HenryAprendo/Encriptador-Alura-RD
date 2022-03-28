const copiarTexto = () => {
    const mostrarTexto = document.querySelector('[data-display]');
    const cb = navigator.clipboard;
    cb.writeText(mostrarTexto.value);
    mostrarTexto.value = '';
}

export default copiarTexto;