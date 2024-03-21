//JSON

/* {
    "name": "Josue Valbuena",
    "email": "email@gmail.com",
    "skills": [
        "frontend", 
        "backend"
    ],
    "address": {
        "city": "Santiago",
        "country": "Chile"
    }
} */

//Promesa

console.log('primero')

setTimeout(() => {
    console.log('probando set time out')
}, 1000);

console.log('ultimo')

//

const validPromise = true;

const myNewPromise = new Promise((resolve, reject) => {
    console.log('Promesa 2');

    validPromise
        ? setTimeout(() => {
            resolve('Promesa resuelta')
        }, 1500)
        : reject('Algo falla')

});

myNewPromise
    .then((data) => console.log(`Los datos son: ${data}`))
    .catch((error) => console.error(error));

// api fetch

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log({ json }));

//IIFE (Expresion de Funcion Ejecutada Inmediatamente)

(async function () {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
    const data = await response.json();
    console.log({ data });
})();

//Object Literals: crear objetos directamente sin clases o funciones.

const objectLiteral = {
    customer: 'Juan Mecanico',
    total: 12990,
    items: [
        {
            name: 'Monitor',
            brand: 'Logitec'
        },
        {
            name: 'Keyboard',
            brand: 'Genius'
        },
        {
            name: 'Mouse',
            brand: 'Razer'
        }
    ],

    showItems() {
        this.items.forEach(ele => console.log({ itemName: ele.name }));
    },
    showInfo() {
        console.log(`Cliente: ${this.customer}, Total: ${this.total}`);
    }
};

objectLiteral.showItems();
objectLiteral.showInfo();