import { codificarTexto } from "./components/codificarTexto.js";
import { decodificarTexto } from "./components/decodificarTexto.js";

const btnEncriptar = document.querySelector('[data-btn-encriptar]');
const btnDesencriptar = document.querySelector('[data-btn-desencriptar');

btnEncriptar.addEventListener('click', codificarTexto);
btnDesencriptar.addEventListener('click', decodificarTexto);




























