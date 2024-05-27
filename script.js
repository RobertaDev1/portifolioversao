document.addEventListener('DOMContentLoaded', function() {
    var texto = "Roberta Soares";
    var atraso = 200;
    var textoElemento = document.querySelector(".titulo-principal");

    var contadorDeLetras = 0; 
    function escreverTexto() { 
        if (contadorDeLetras < texto.length) {
            textoElemento.textContent += texto.charAt(contadorDeLetras);
            contadorDeLetras++;
            setTimeout(escreverTexto, atraso);
        }
    }
    escreverTexto();
});
