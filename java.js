// JavaScript Document
function convert() {
    var inputValue = parseFloat(document.getElementById('inputValue').value);
    var result = (inputValue - 32) * (5/9); // Fahrenheit to Celsius conversion formula
    document.getElementById('result').innerHTML = inputValue + ' Fahrenheit is ' + result.toFixed(2) + ' Celsius.';
}
