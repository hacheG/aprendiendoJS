const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio"];

const carrito = [
    {nombre: "monitor", precio: 500},
    {nombre: "television", precio: 100},
    {nombre: "tablet", precio: 200},
    {nombre: "audifonos", precio: 300},
    {nombre: "teclado", precio: 400},
    {nombre: "celular", precio: 700},

];

let resultado = '';
carrito.forEach( (producto, index) => {
    if (producto.nombre === "tablet")
    {
        resultado = carrito[index];
    }
} );
console.log(resultado);

//toma unicamente el primer elemento que cumpla con la condicion
let resultado2 = carrito.find( producto => producto.nombre === "tablet");
console.log(resultado2);

