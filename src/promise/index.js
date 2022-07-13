// Promises
// Una promesa tiene 3 estados: cumplido, pendiente y rechazado

const promise = new Promise(function(resolve, reject) {
    resolce('hey');
});

const COWS = 9;

const countCows = new Promise(function (resolve, reject) {
    if(COWS > 10) {
        resolve(`We have ${COWS} cows in the farm`);
    } else {
        reject(`The is no cows on the farm`);
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'));