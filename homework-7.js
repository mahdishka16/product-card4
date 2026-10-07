function showWether(city,temperature) {
   console.log (`сейчас в ${city} температура ${temperature} градусов`); 
}

showWether("стамбул",15);

const light_of_speed =  299792458;

function chekLightSpeed (speed) {
   if (speed > light_of_speed) {
      console.log("сверхсветовая скорость"); 
   } else if (speed < light_of_speed )
      console.log ("субсветовая скорость");
   } else {
   console.log ("скорость света");
}

const productName "телефон";
const price = 500

function buyPhone(clientMoney)

if(clientMoney >= price) {
   console.log(`${productName} приобретен`)
} else {
   const MissingAmout = price - clientMoney;
   console.log (`вам не хватает ${MissingAmout} $`)
}

buyPhone(500);
buyPhone(300);

function sayHello{
console.log("hello")
}

function myFunction() {
    console.log("Функция из задания 6 работает.");
}

const car = {
    start: function() {
        console.log("Машина завелась");
    },
    drive: function() {
        console.log("Машина поехала");
    },
    stop: function() {
        console.log("Машина остановилась");
    }
};
