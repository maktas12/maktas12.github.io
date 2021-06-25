console.log("main.js loaded in");
const fahrenheitButton = document.querySelector(".button.Fahrenheit");
const celciusButton = document.querySelector(".button.Celcius")
const fahrenheit = document.querySelector(".inputFahrenheit");
const celcius = document.querySelector(".inputCelcius");
const buttonSwitch = document.querySelector(".button-switch");
// berekent en schrijft hoeveel farenheit celcius is//  

if (buttonSwitch) {
  buttonSwitch.addEventListener("click", function(){
    const theBody = document.body;
    theBody.classList.toggle("background");
  })
}

if (fahrenheitButton) {
  fahrenheitButton.addEventListener("click", temperatureConverter);
  celciusButton.addEventListener("click", temperatureConverter2);
}

function temperatureConverter() {
  const fahrenheitValue = fahrenheit.value;
  document.querySelector(".outputCelcius").innerHTML=(fahrenheitValue-32)/1.8;
}

// berekent en schrijft hoeveel celcius farenheit is//
function temperatureConverter2() {
  const celciusValue = celcius.value;
  document.querySelector(".outputFarenheit").innerHTML=(celciusValue*1.8)+32;
} 

