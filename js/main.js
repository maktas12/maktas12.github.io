console.log("main.js loaded in");
// berekent en schrijft hoeveel farenheit celcius is//
function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.querySelector(".outputCelcius").innerHTML=(valNum-32)/1.8;
}
// berekent en schrijft hoeveel celcius farenheit is//
function temperatureConverter2(valNum2) {
  valNum2 = parseFloat(valNum2);
  document.querySelector(".outputFarenheit").innerHTML=(valNum2*1.8)+32;
} 