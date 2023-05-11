var NumberConverter = (num) => {
    var romans = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    return romans[num - 1];
}

var number = parseInt(prompt("Введите число от 1 до 9: "));
    console.log(NumberConverter(number));


var number = parseInt(prompt("Введите число от 1 до 100: "));

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


var number = parseInt(prompt("Введите число от 2 до 10"));
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}


var customerPlanets = ["Меркурий", "Венера", "Земля", "Марс", "Юпитер", "Сатурн", "Уран", "Нептун", "Плутон"];
var number = parseInt(prompt("Введите номер планеты от 1 до 9: "));
console.log(customerPlanets [number- 1]);