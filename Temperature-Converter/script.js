const tempInput = document.getElementById('temp-input');
const outputContainer = document.getElementById('output-group');
const outputField = document.getElementById('output-value');
const radios = document.forms['temp-form'].elements['temp-output'];

function isBlank(val) {
    return val.toString().trim().length === 0;
}

function showAlert(message) {
    alert(message);
}

function convertAndDisplayResult(conversionFn, unitSymbol) {
    if (isBlank(tempInput.value)) {
        showAlert("Please Input Temperature to Convert");
        return;
    }

    const outputValue = conversionFn(parseFloat(tempInput.value));
    outputContainer.classList.remove('d-none');
    outputField.innerHTML = `${outputValue.toFixed(2)} &deg; ${unitSymbol}`;
}

function convertToFahrenheit(input) {
    return (input  * 5 / 9)+32;
}

function convertToKelvin(input) {
    return input + 273.15;
}

for (const radio of radios) {
    radio.onclick = function () {
        if (this.value === 'f') {
            convertAndDisplayResult(convertToFahrenheit, 'F');
        } else if (this.value === 'k') {
            convertAndDisplayResult(convertToKelvin, 'K');
        }
    };
}
