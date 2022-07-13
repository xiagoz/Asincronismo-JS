// Fetch
// hay que instalar fetch en node con: npm i node-fetch
import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fectchData(urlApi) {
    return fetch(urlApi);
};

// fectchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products);
//     })
//     .then(() => {
//         console.log('hola')
//     })
//     .catch(error => console.log(error));

fectchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products)
        return fectchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title)
        return fectchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        console.log('Finally');
    })