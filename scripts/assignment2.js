function convertTemperature() {
  let celsius = prompt("Enter the temperature in Celsius:");
  if (celsius !== null) {
    let fahrenheit = (celsius * 9) / 5 + 32;
    document.getElementById(
      "result"
    ).innerText = `${celsius}°C is equal to ${fahrenheit}°F`;
  }
}
