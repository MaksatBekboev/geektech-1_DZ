var customerName = prompt("Введите ваше имя:");
var customerSurname = prompt("Введите вашу фамилию:");

console.log(`Здравствуйте, ${customerName} ${customerSurname}!`);


var num1 = Number(prompt("Введите первое число:"));
var num2 = Number(prompt("Введите второе число:"));

if (num1 === num2) {
  console.log("Числа равны");
} else if (num1 < num2) {
  console.log(`${num1} меньше, чем ${num2}`);
} else {
  console.log(`${num2} меньше, чем ${num1}`);
}


var color = prompt("Введите цвет светофора:");

if (color.toLowerCase() === "красный") {
  console.log("Стой!");
} else if (color.toLowerCase() === "желтый") {
  console.log("Жди");
} else if (color.toLowerCase() === "зеленый") {
  console.log("Иди");
}