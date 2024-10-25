// Append value to the display
function appendToDisplay(value) {
    const display = document.getElementById("display");
    if (display.value === "0") {
        display.value = value;  // Replace initial "0" with the first input
    } else {
        display.value += value;  // Append input to the display
    }
}

// Clear the display
function clearDisplay() {
    document.getElementById("display").value = "0";
}

// Delete the last character in the display
function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1) || "0";  // Delete last character
}

// Calculate the result when "=" is clicked
function calculateResult() {
    const display = document.getElementById("display");
    let expression = display.value;

    // Replace '^' with '**' for exponentiation
    expression = expression.replace(/\^/g, "**");

    try {
        // Evaluate the expression
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}
