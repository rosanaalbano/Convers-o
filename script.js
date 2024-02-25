const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function ConvertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencyValueToconvert = document.querySelector(".currency-value-to-convert") //valor em peso mexicano//
  const currencyValueConverted = document.querySelector(".currency-value") //valor de outras moedas//

  console.log(currencySelect.value)

  const realToday = 6.2
  const euroToday = 5.2
  const dolarToday = 8.2

 if (currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-Br", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValue/realToday)
  }
  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-De", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue / euroToday)
  }
  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue/dolarToday)
  }

  currencyValueToconvert.innerHTML = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MEX"
  }).format(inputCurrencyValue)
}
function changeCurrency(){
 
  const currencyName=document.getElementById("currency-name")
  const currencyImage=document.querySelector(".currency-img")
 
  if (currencySelect.value == "real"){
  currencyName.innerHTML="Real"
  currencyImage.src="./assets/Real.png"
 }
 if (currencySelect.value == "euro") {
  currencyName.innerHTML="Euro"
  currencyImage.src="./assets/euro.png"
 }

 if(currencySelect.value == "dolar") {
  currencyName.innerHTML="Dolar americano"
  currencyImage.src="./assets/usa.png"

}
ConvertValues()
}



currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click", ConvertValues)
