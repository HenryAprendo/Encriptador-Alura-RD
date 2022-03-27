import { codificarTexto } from "./components/codificarTexto.js";

const btnEncriptar = document.querySelector('[data-btn-encriptar]');
const btnDesencriptar = document.querySelector('[data-btn-desencriptar');

const inputTexto = document.querySelector('[data-input-texto]');

const decodificarTexto = () => {
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
  
    const mostrarTexto = document.querySelector('[data-display]');
    mostrarTexto.value = textoDesencriptado.join('');

    const eliminarMensaje = document.querySelector('#eliminar-mensaje');
    eliminarMensaje.classList.add('eliminar-mensaje');

    const visualizarMensaje = document.querySelector('#visualizar-mensaje');
    visualizarMensaje.classList.add('visualizar-mensaje')

    inputTexto.value = '';
}


btnEncriptar.addEventListener('click', codificarTexto);
btnDesencriptar.addEventListener('click', decodificarTexto);




























