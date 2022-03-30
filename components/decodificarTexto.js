import mostrarMensaje from "./mostrarMensaje.js";

const inputTexto = document.querySelector('[data-input-texto]');

export const decodificarTexto = () => {
    const value = inputTexto.value;
    const arrayTexto = value.split('');

    let contador = 0;
    let elemento = null;
    const textoDesencriptado = [];

    arrayTexto.forEach( item => {
        
        if (contador === 0) {
            switch(item){
                case 'a':
                    elemento = item;
                    contador = 1;
                    break;
                case 'e':
                    elemento = item;
                    contador = 4;
                    break;
                case 'i':
                    elemento = item;
                    contador = 3;
                    break;
                case 'o': 
                    elemento = item;
                    contador = 3;
                    break;
                case 'u':
                    elemento = item;
                    contador = 3;
                    break;
                default:
                    elemento = item;
            }
            textoDesencriptado.push(elemento);
        }
        else {
            contador--;
        }

    });

    if(textoDesencriptado.length !== 0) {
        const mostrarTexto = document.querySelector('[data-display]');
        mostrarTexto.value = textoDesencriptado.join('');
        mostrarMensaje();
        inputTexto.value = ''; 
    }    
}
