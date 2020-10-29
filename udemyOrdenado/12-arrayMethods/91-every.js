const carrito = [
    {nombre: "monitor", precio: 500},
    {nombre: "television", precio: 100},
    {nombre: "tablet", precio: 200},
    {nombre: "audifonos", precio: 300},
    {nombre: "teclado", precio: 400},
    {nombre: "celular", precio: 700},

];

//todos los elementos deben cumplir con la condicion

let resultado = carrito.every( producto => producto.precio < 1000 );
console.log(resultado)