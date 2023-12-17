const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

const libraToday = 5.0
const bolivarToday = 4.8
const yenToday = 5.5

const convertValues = async () => {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const bitcoinToday = data.BTCBRL.high

    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "USD"}).format(inputCurrencyValue / dolarToday)
    }
    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency", 
            currency: "EUR"}).format(inputCurrencyValue / euroToday)

    }
    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency", 
            currency: "GBP"}).format(inputCurrencyValue / libraToday)

    }
    if(currencySelect.value == "bolivar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-VE", {
            style: "currency", 
            currency: "VEF"}).format(inputCurrencyValue / bolivarToday) // falta

    }
    if(currencySelect.value == "yen"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency", 
            currency: "JPY"}).format(inputCurrencyValue / yenToday)

    }
    if(currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency", 
            currency: "BTC"}).format(inputCurrencyValue / bitcoinToday) //falta

    }
    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL"}).format(inputCurrencyValue)
    
    
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dolar.png"
    }
    
    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }

    if(currencySelect.value == "yen"){
        currencyName.innerHTML = "Yen"
        currencyImg.src = "./assets/yen.png"
    }
    if(currencySelect.value == "bolivar"){
        currencyName.innerHTML = "Bolivar"
        currencyImg.src = "./assets/bolivar.png"
    }
    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }
   
    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
