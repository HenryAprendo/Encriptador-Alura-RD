import mostrarMensaje from "./mostrarMensaje.js";

const inputTexto = document.querySelector('[data-input-texto]');

const agregarLetras = {
    a : 'ai',
    e : 'enter',
    i : 'imes',
    o : 'ober',
    u : 'ufat'
}

export const codificarTexto = () => {
    const value = inputTexto.value;
    const arrayTexto = value.split('');

    const textoCodificado = arrayTexto.map( item => {
        let elemento = null;
        switch(item){
            case 'a':
                elemento = agregarLetras.a.split('');
                break;
            case 'e':
                elemento = agregarLetras.e.split('');
                break; 
            case 'i':
                elemento = agregarLetras.i.split('');
                break;
            case 'o': 
                elemento = agregarLetras.o.split('');        
                break;
            case 'u':
                elemento = agregarLetras.u.split('');                          
                break;
            default:
                elemento = item;
        }
        return elemento;
    });
    
    if (textoCodificado.length !== 0) {
        const textoEncriptadoCadena = textoCodificado.flat().join('');
        const mostrarTexto = document.querySelector('[data-display]');
        mostrarTexto.value = textoEncriptadoCadena;
        mostrarMensaje();
        inputTexto.value = '';
    }
}
