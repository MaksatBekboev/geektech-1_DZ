function myReverse(string) {
  var reversedStr = "";
  for (var i = string.length - 1; i >= 0; i--) {
    reversedStr += string[i];
  }
  return reversedStr;
}

  console.log(myReverse("123456789"));


function capitalizeString(string) {
  return string.charAt(0).toUpperCase() 
    + string.slice(1).toLowerCase();
}

  console.log(capitalizeString("ЕВГЕНИЙ"));
  console.log(capitalizeString("иВАНОВ"));
