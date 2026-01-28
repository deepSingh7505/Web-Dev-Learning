let x = 50;
let y = 768;
let z = '+';
function add(a, b , c) {
    if (c == '+') {
        return a + b;
    }
    else if (c == '-') {
        return a - b;
    }
    else if (c == '*') {
        return a * b;
    }
    else if (c == '/') {
        return a / b;
    }
}
function addf(a, b,c) {
    if (c == '+') {
        return a - b;
    }
    else if (c == '-') {
        return a / b;
    }
    else if (c == '*') {
        return a + b;
    }
    else if (c == '/') {
        return a ** b;
    }
}
if (Math.random() < .5)
    console.log(addf(x,y,z));
else
    console.log(add(x,y,z));