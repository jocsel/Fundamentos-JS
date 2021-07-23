let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log(juegos.length);

let primero = juegos[2-2];

let ultimo = juegos[juegos.length - 1];
console.log({primero, ultimo});

juegos.forEach((elemeto, indice, arr)=>{
    console.log({elemeto, indice, arr});
});

let nuevoElemento = juegos.push('Push'); //Agrega un elemento al final de un arreglo
console.log(nuevoElemento, juegos);

nuevoElemento = juegos.unshift('unshift'); //Inserte un elemento al inicio de un arreglo
console.log(nuevoElemento, juegos);

let elemetoBorrado = juegos.pop(); //Borra el ultimo elemento de un arreglo
console.log({elemetoBorrado, juegos});

let pos = 1;
console.log(juegos);

let borrarJuegos = juegos.splice(pos, 2); // Borra elementos por parametro 
console.log({borrarJuegos, juegos});

let indiceDelJuego = juegos.indexOf('unshift'); //Busca el indice de un elemento del arreglo
console.log({indiceDelJuego});