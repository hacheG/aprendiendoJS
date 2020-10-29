const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio"];
const meses2 = ["agosto", "septiembre"];
const meses3 = ["octubre", "noviembre"];


const carrito = [
    {nombre: "monitor", precio: 500},
    {nombre: "television", precio: 100},
    {nombre: "tablet", precio: 200},
    {nombre: "audifonos", precio: 300},
    {nombre: "teclado", precio: 400},
    {nombre: "celular", precio: 700},

];

const resultado = meses.concat(meses2, meses3, "prueba1");
console.log(`resultado ${resultado}`);

const resultado2 = [...meses, ...meses2, "prueba2", ..."prueba3"];
console.log(resultado2)