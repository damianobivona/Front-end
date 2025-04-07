var a = 4;
var b = 5;
var res;

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

//invochiamo le funzioni
res = sum(a, b);
console.log("sum: " + res);

res = sub(a, b);
console.log("subtraction: " + res);

res = mult(a, b);
console.log("multply: " + res);

res = div(a, b);
console.log("divide: " + res);
