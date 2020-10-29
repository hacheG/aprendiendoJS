const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio"];
const meses2 = ["agosto", "septiembre"];
const meses3 = ["octubre", "noviembre"];


const carrito = [
    {nombre: "monitor", precio: 500},
    {nombre: "television", precio: 100},
    {nombre: "tablet", precio: 200},
    {nombre: "audifonos", precio: 300},
    {nombre: "teclado", precio: 400},
    {nombre: "celular", precio: 700}

];

const meses4 = ["feliz año", ...meses];
console.log(meses4);

const newProduct = { nombre:"portatil", precio:1000};
const carrito2 = [...carrito, newProduct];
console.log(carrito2);