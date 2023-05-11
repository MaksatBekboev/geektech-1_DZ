const maskCard = (cardNumber, maskChar = "X") => {
    const firstSix = cardNumber.substring(0, 6);
    const lastFour = cardNumber.substring(cardNumber.length - 4);
    const masked = maskChar.repeat(cardNumber.length - 10);
        return `${firstSix}${masked}${lastFour}`;
};

    console.log(maskCard("4815154823541789", "*"));
    console.log(maskCard("4815154823541789"));


const padStart = (string, length, padChar = " ") => {
    const diff = length - string.length;
        return diff > 0 ? padChar.repeat(diff) + string : string;
};

    console.log(padStart("7", "3", "0"));
    console.log(padStart("7", 5));
    console.log(padStart("qwerty", 3, "X"));


function mean() {
    var args = arguments;
    var len = args.length;
    if (len === 0) {
        return 0;
    }
    var sum = 0;
    for (var i = 0; i < len; i++) {
        sum += args[i];
    }
        return sum / len;
}

console.log(mean(1,4,5,8));
console.log(mean());
console.log(mean(1,1,1,1,1));


const mean2 = (...args) => {
    if (args.length === 0) {
        return 0;
    } else {
        const sum = args.reduce((total, num) => total + num, 0);
            return sum / args.length;
    }
};

console.log(mean2(1, 4, 5, 8));
console.log(mean2());
console.log(mean2(1, 1, 1, 1, 1));


function sumAsText() {
    var args = arguments;
    var len = args.length;
    if (len === 0) {
        return "";
    }
    var sum = 0;
    var text = "";
    for (var i = 0; i < len; i++) {
        sum += args[i];
        text += args[i] + (i === len - 1 ? "" : " + ");
    }
        return text + " = " + sum;
}

console.log(sumAsText(1,4,7,10));
console.log(sumAsText(2,2,0,2,5));


const sumAsText2 = (...args) => {
    if (args.length === 0) {
        return "";
    } else {
        const sum = args.reduce((total, num) => total + num, 0);
        const sumString = args.join(" + ");
            return sumString + " = " + sum;
    }
};

console.log(sumAsText2(1,4,7,10));
console.log(sumAsText2(2,2,0,2,5));