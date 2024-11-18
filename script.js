// Texto a mostrar en el editor
const codeLines = [
    'print("Feliz Cumpleaños Lu")',
    'print("Te quiero")',
    'print("Vamos que ya nos recibiiimooosssss")',
    'print("tkm - Belen")'
];

const codeElement = document.getElementById('code');
const lineNumbersElement = document.getElementById('line-numbers');

// Añadir números de línea
function updateLineNumbers() {
    lineNumbersElement.innerHTML = '';
    for (let i = 1; i <= codeLines.length; i++) {
        const lineNumber = document.createElement('div');
        lineNumber.textContent = i;
        lineNumbersElement.appendChild(lineNumber);
    }
}

// Mostrar las líneas de código con animación
let currentLine = 0;
function typeCode() {
    if (currentLine < codeLines.length) {
        const line = codeLines[currentLine];
        let index = 0;

        const typingInterval = setInterval(() => {
            if (index < line.length) {
                codeElement.textContent += line[index++];
            } else {
                clearInterval(typingInterval);
                codeElement.textContent += '\n'; // Salto de línea al terminar
                currentLine++;
                updateLineNumbers(); // Actualizar los números de línea
                setTimeout(typeCode, 500); // Esperar antes de escribir la siguiente línea
            }
        }, 100);
    }
}

// Inicializar
updateLineNumbers();
typeCode();
