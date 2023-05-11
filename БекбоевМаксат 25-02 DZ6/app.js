function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
var numbersContainer = document.getElementById("numbers-container");
var generateButton = document.getElementById("generate-numbers");
  
generateButton.addEventListener("click", function() {
  numbersContainer.innerHTML = "";
  
  var numbers = [];
  while (numbers.length < 6) {
    var number = getRandomInt(1, 99);
    if (numbers.indexOf(number) === -1) {
      numbers.push(number);
    }
  }
  
  numbers.forEach(function(number) {
    var circle = document.createElement("div");
    circle.classList.add("number-circle");
    circle.textContent = number;
    numbersContainer.appendChild(circle);
  });
});
  