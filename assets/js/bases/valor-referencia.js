let juan = {nombre: 'Juan'};
let ana = {...juan};
ana.nombre = 'ana';

console.log({juan, ana});

const cambiarNombre = ({...persona}) =>{
    persona.nombre = 'Tony';
    return persona;
};

let peter = {nombre: 'Peter'};
let tony =cambiarNombre(peter);

console.log({peter, tony});

const frutas = ['Mazana','Pera', 'Piña'];

console.time('Slice');
const otrasFrutas2 = frutas.slice(); //Slice, solo permite mutar el objeto seleccionado, la copia
console.timeEnd('Slice');


console.time('Spred');
const otrasFrutas = [...frutas]; //... = reset o spred dependiendo el contexto
console.timeEnd('Spred');
otrasFrutas.push('Mango');       // Reset, es para mostrar los argumentos de un funcion
                                // Spred, solo permite mutar el objeto seleccionado

console.table({frutas, otrasFrutas});
