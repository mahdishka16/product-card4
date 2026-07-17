const productCards = document.querySelectorAll(".product");
const changeColorButton = document.queryselector("#change-color-card-button");
const greenColorHash = "#00ff00";
const blueColorHash = "#0000ff";

СhangeColorButton.addEventListener("click"  () => {
    productCards.array.forEach((card) => style.backgruondColor = greenColorHash
});

const allProductCards = document.querySelectorAll(".product");
const changeColorAllCardsButton = document.queryselector("#change-color-all-cards-button");

СhangeColorButton.addEventListener("click"  () => {
    allProductCards.forEach((card) => style.backgruondColor = blueColorHash
});

const openGoogleButton = document.queryselector (#open-google)
const googleURL = "https://google.com";  

openGoogleButton.addEventListener
    (click ,  openGoogle);

function openGoogle() {
    const answer = confirm("вы действительно хотите открыть Google")

    if (answer === true) {
        window.open(googleURL)
    }
};

const outputConsoleLogButton = document.querySelector(#output-console-log);

outputtLogBatton.addEventListener("click", () => outputConsolelog(ДЗ№4));

function outputConsolelog (message) {
    alert(message)
    console.log(message)
};