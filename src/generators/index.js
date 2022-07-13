//Generators
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g =gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

//Otra function
function* iterate(array) {
    for (let value of array) {
        yield value
    }
}

const it = iterate(['oscar', 'omar', 'ana', 'lucia', 'christian']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

// Prueba de async await

import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData (urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

async function anotherFn (urlApi) {
    try {
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`)
    
        console.log(products);
        console.log(product.title);
        console.log(category.name);

    } catch (error) {
        console.error(error);
    }
}

anotherFn(API)
    .then(response => response.json())
    .catch(error => console.error(error))
    .finally(() => console.log('Es el final'));