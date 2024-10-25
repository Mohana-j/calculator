function appendToDisplay(value) {
    const display = document.getElementById("display");
    if (display.value === "0") {
        display.value = value;  
    } else {
        display.value += value;  
    }
}

function clearDisplay() {
    document.getElementById("display").value = "0";
}


function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1) || "0";  
}

function calculateResult() {
    const display = document.getElementById("display");
    let expression = display.value;


    expression = expression.replace(/\^/g, "**");

    try {
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}
