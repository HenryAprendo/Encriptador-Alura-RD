import { codificarTexto } from "./components/codificarTexto.js";
import { decodificarTexto } from "./components/decodificarTexto.js";
import copiarTexto from "./components/copiarTexto.js";

const btnEncriptar = document.querySelector('[data-btn-encriptar]');
const btnDesencriptar = document.querySelector('[data-btn-desencriptar');
const btnCopiar = document.querySelector('[data-btn-copiar]');

btnEncriptar.addEventListener('click', codificarTexto);
btnDesencriptar.addEventListener('click', decodificarTexto);
btnCopiar.addEventListener('click', copiarTexto);




























