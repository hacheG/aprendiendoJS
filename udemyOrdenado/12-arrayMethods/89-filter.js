const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio"];

const carrito = [
    {nombre: "monitor", precio: 500},
    {nombre: "television", precio: 100},
    {nombre: "tablet", precio: 200},
    {nombre: "audifonos", precio: 300},
    {nombre: "teclado", precio: 400},
    {nombre: "celular", precio: 700},

];

let resultado;
resultado = carrito.filter( producto => producto.precio >= 400);
console.log(resultado);

// para excluir un resultado
resultado2 = carrito.filter( producto => producto.nombre !== "tablet");
console.log(resultado2);