const copiarTexto = () => {
    const mostrarTexto = document.querySelector('[data-display]');
    const cb = navigator.clipboard;
    cb.writeText(mostrarTexto.value).then(()=> {
        mostrarTexto.value = '';
        const mensaje = document.querySelector('[data-mensaje-copiado]');
        mensaje.classList.add('mensaje__copiado-activo');
        setTimeout( () => {
            mensaje.classList.remove('mensaje__copiado-activo');
        }, 3000);
    })
}

export default copiarTexto;
