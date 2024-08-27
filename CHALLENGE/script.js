// Declaración de variables
let inputText = document.getElementById('input-text');
let outputText = document.getElementById('output-text');
let copyButton = document.getElementById('copy-button');

// Función para encriptar texto
function encriptar() {
    let texto = inputText.value.toLowerCase();

    // Validación: No se aceptan mayúsculas ni caracteres especiales
    if (/[^a-z\s]/.test(texto)) {
        alert('Solo se permiten letras minúsculas y espacios.');
        return;
    }

    // Lógica de encriptación
    let textoEncriptado = texto.replace(/e/g, 'enter')
                               .replace(/i/g, 'imes')
                               .replace(/a/g, 'ai')
                               .replace(/o/g, 'ober')
                               .replace(/u/g, 'ufat');

    outputText.innerHTML = textoEncriptado;
    copyButton.style.display = 'block'; // Mostrar botón de copiar
}

// Función para descifrar texto
function descifrar() {
    let texto = inputText.value.toLowerCase();

    // Lógica de desencriptación
    let textoDesencriptado = texto.replace(/enter/g, 'e')
                                  .replace(/imes/g, 'i')
                                  .replace(/ai/g, 'a')
                                  .replace(/ober/g, 'o')
                                  .replace(/ufat/g, 'u');

    outputText.innerHTML = textoDesencriptado;
    copyButton.style.display = 'none'; // Ocultar botón de copiar
}

// Función para copiar el texto del área de presentación
function copiarTexto() {
    navigator.clipboard.writeText(outputText.innerHTML)
        .then(() => {
            alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            alert('Error al copiar el texto: ', err);
        });
}
