const celsiusToFarenheit = (inputTemp) => {
  const temp = (9 / 5) * inputTemp + 32;
  return `${inputTemp}°C is ${temp}°F.`;
};
const farenheitToCelsius = (inputTemp) => {
  const temp = (5 / 9) * (inputTemp - 32);
  return `${inputTemp}°F is ${temp}°C.`;
};

function callCorrectMethod(inputTemp) {
  // Assumption: Inputs will be of the format: x°F or x°C
  const units = inputTemp.split("°");
  if (units[1] === "F") {
    return farenheitToCelsius(parseInt(units[0]));
  } else if (units[1] === "C") {
    return celsiusToFarenheit(parseInt(units[0]));
  } else {
    return "Not a valid measure of temperature.";
  }
}

console.log(callCorrectMethod("32°F"));
console.log(callCorrectMethod("24.5°C"));
console.log(callCorrectMethod("273K"));
