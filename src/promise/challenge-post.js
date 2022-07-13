import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

//Obtener un producto
function getData(urlApi) {
    return fetch(urlApi);
}

Ingresar un producto
function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const DATA = {
    "title": "New Product GUITAR SX", //id: 312
    "price": 799,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, DATA)
    .then(response => response.json())
    .then(data => console.log(data));

// getData(`${API}/products/312`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products.title)
//     })
//     .catch(error => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log('Finally');
//     })