// Función para mostrar números y operadores en la pantalla de la calculadora
function appendToDisplay(value) {
  const display = document.getElementById("display");

  // Si el valor actual es "0" o "Error", reemplázalo con el nuevo valor
  if (display.value === "0" || display.value === "Error") {
    display.value = value;
  } else {
    // De lo contrario, agrega el nuevo valor al final del valor actual
    display.value += value;
  }
}
// Función para calcular el resultado
function calculateResult() {
  const display = document.getElementById("display");
  try {
    // Utiliza la función eval() para evaluar la expresión matemática ingresada
    display.value = eval(display.value);
  } catch (error) {
    // En caso de un error de evaluación (por ejemplo, división por cero), muestra "Error"
    display.value = "Error";
  }
}

// Función para borrar el contenido de la pantalla
function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "0";
}

// Asociar eventos a los botones numéricos y de operadores
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      clearDisplay();
    } else {
      appendToDisplay(value);
    }
  });
});
