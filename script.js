let display = document.getElementById('display');

function backspace() {
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}