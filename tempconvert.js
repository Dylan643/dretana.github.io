// tempconvert.js
// Provides functions to convert between Celsius, Fahrenheit, and Kelvin

// Convert from Celsius to Fahrenheit and Kelvin
function fromCelsius() {
  const celsiusValue = parseFloat(document.getElementById('celsius').value);
  if (!isNaN(celsiusValue)) {
    document.getElementById('fahrenheit').value = (celsiusValue * 9/5 + 32).toFixed(2);
    document.getElementById('kelvin').value = (celsiusValue + 273.15).toFixed(2);
  }
}

// Convert from Fahrenheit to Celsius and Kelvin
function fromFahrenheit() {
  const fahrenheitValue = parseFloat(document.getElementById('fahrenheit').value);
  if (!isNaN(fahrenheitValue)) {
    const celsiusResult = (fahrenheitValue - 32) * 5/9;
    document.getElementById('celsius').value = celsiusResult.toFixed(2);
    document.getElementById('kelvin').value = (celsiusResult + 273.15).toFixed(2);
  }
}

// Convert from Kelvin to Celsius and Fahrenheit
function fromKelvin() {
  const kelvinValue = parseFloat(document.getElementById('kelvin').value);
  if (!isNaN(kelvinValue)) {
    const celsiusResult = kelvinValue - 273.15;
    document.getElementById('celsius').value = celsiusResult.toFixed(2);
    document.getElementById('fahrenheit').value = (celsiusResult * 9/5 + 32).toFixed(2);
  }
}

/*
* References:
* - I used W3Schools for: JavaScript parseFloat: https://www.w3schools.com/jsref/jsref_parsefloat.asp
* - I used MDN for: JavaScript toFixed: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
*/
