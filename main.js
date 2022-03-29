import { codificarTexto } from "./components/codificarTexto.js";
import { decodificarTexto } from "./components/decodificarTexto.js";
import copiarTexto from "./components/copiarTexto.js";
import { validarExpresion } from "./components/validarExpresion.js";

const btnEncriptar = document.querySelector('[data-btn-encriptar]');
const btnDesencriptar = document.querySelector('[data-btn-desencriptar');
const btnCopiar = document.querySelector('[data-btn-copiar]');

btnEncriptar.addEventListener('click', codificarTexto);
btnDesencriptar.addEventListener('click', decodificarTexto);
btnCopiar.addEventListener('click', copiarTexto);

validarExpresion();

// regular: /^[a-z\s]{0,500}$/
// (expresion.regular.test(e.target.value)){





























