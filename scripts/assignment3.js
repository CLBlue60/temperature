function convertTemperature() {
  const temperatureInput = document.getElementById("temperature").value;
  const scale = document.getElementById("scale").value;
  const resultElement = document.getElementById("result");
  const thermometerFill = document.getElementById("thermometer-fill");

  resultElement.classList.remove("cold", "warm", "hot", "default");


  if (!temperatureInput) {
    resultElement.textContent = "Please enter a valid temperature.";
    resultElement.classList.add("default");
    thermometerFill.style.height = "0%";
    return;
  }

  let convertedTemperature;


  if (scale === "C") {
    convertedTemperature = (temperatureInput * 9) / 5 + 32;
    resultElement.textContent = `Converted Temperature: ${convertedTemperature.toFixed(
      2
    )} °F`;
  } else if (scale === "F") {
    convertedTemperature = ((temperatureInput - 32) * 5) / 9;
    resultElement.textContent = `Converted Temperature: ${convertedTemperature.toFixed(
      2
    )} °C`;
  } else {
    resultElement.textContent = "Invalid scale. Please select 'C' or 'F'.";
    thermometerFill.style.height = "0%";
    return;
  }


  if (convertedTemperature < 10) {
    resultElement.classList.add("cold");
  } else if (convertedTemperature >= 10 && convertedTemperature <= 25) {
    resultElement.classList.add("warm");
  } else {
    resultElement.classList.add("hot");
  }


  const percentageFill = Math.min(Math.max(convertedTemperature, 0), 100); 
  thermometerFill.style.height = `${percentageFill}%`;
}
