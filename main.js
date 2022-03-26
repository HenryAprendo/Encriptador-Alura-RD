import { codificarTexto } from "./components/codificarTexto.js";

const btnEncriptar = document.querySelector('[data-btn-encriptar]');
const btnDesencriptar = document.querySelector('[data-btn-desencriptar');

const inputTexto = document.querySelector('[data-input-texto]');

const decodificarTexto = () => {
    const value = inputTexto.value;
    const arrayTexto = value.split('');
    console.log(arrayTexto);

}


btnEncriptar.addEventListener('click', codificarTexto);
btnDesencriptar.addEventListener('click', decodificarTexto);






