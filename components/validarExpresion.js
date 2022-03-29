const expresion = {
    regex: /^[a-z\s]*$/
} 
const inputTexto = document.querySelector('[data-input-texto]');

export const validarExpresion = () => {

    const data = expresion.regex.test(inputTexto.value);
    if (!data){
        document.getElementById('informacion__texto').classList.add('informacion__texto-error');
        document.getElementById('icon').classList.add('icon-error');
    }
    else {
        document.getElementById('informacion__texto').classList.remove('informacion__texto-error');
        document.getElementById('icon').classList.remove('icon-error');
    }
    
}

inputTexto.addEventListener('input', validarExpresion);


// regular: /^[a-z\s]{0,500}$/
// (expresion.regular.test(e.target.value)){