function convertTemperatureRange() {
  const startValue = parseInt(document.getElementById("startValue").value);
  const endValue = parseInt(document.getElementById("endValue").value);
  const scale = document.getElementById("scale").value;
  const resultsDiv = document.getElementById("results");

  resultsDiv.innerHTML = "";


  if (isNaN(startValue) || isNaN(endValue) || startValue > endValue) {
    resultsDiv.innerHTML = "<p>Please enter a valid range of temperatures.</p>";
    return;
  }


  for (let temp = startValue; temp <= endValue; temp++) {
    let convertedTemp;
    if (scale === "C") {
      convertedTemp = (temp * 9) / 5 + 32;
      resultsDiv.innerHTML += `<p>${temp}°C = ${convertedTemp.toFixed(
        2
      )}°F</p>`;
    } else if (scale === "F") {
      convertedTemp = ((temp - 32) * 5) / 9; 
      resultsDiv.innerHTML += `<p>${temp}°F = ${convertedTemp.toFixed(
        2
      )}°C</p>`;
    } else {
      resultsDiv.innerHTML = "<p>Invalid scale. Please select 'C' or 'F'.</p>";
      return;
    }
  }
}
