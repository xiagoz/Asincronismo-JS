// Callbacks
function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(2,2,sum)); // No es necesario colocar los argumentos y paraentesis de sum

// Con setTimeout
setTimeout(function () {
    console.log('Hola JS');
}, 2000);

function gretting(name) {
    console.log(`hola ${name}`);
}

setTimeout(gretting, 5000, 'Christian'); // al final se colocan los argumentos.

