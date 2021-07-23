let personaje ={
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    edad: 45,
    vivo: false,
    coords:{
        lat: 34.01,
        lng: -118.7
    },
    trajes: ['Mark 1', 'Mark V', 'Hulkbuster'],
    dirreccion: {
        zip:'10880, 90265',
        ubicacion:'Malibu, California',
    },
    'ultima-Pelicula': 'Infinity war',
};

console.log(personaje);
console.log('nombre', personaje.nombre);
console.log('nombre', personaje['nombre']);
console.log('edad', personaje.edad);

console.log('cordenadas', personaje.coords);
console.log('Latitud', personaje.coords.lat);
console.log('Numero de trajes', personaje.trajes.length);
console.log('Ultimo traje', personaje.trajes[personaje.trajes.length -1]);

const x= 'vivo';
console.log('Vivo', personaje[x]);
console.log('Ultima pelicula', personaje["ultima-Pelicula"]);

//Mas detalles
delete personaje.edad;
console.log(personaje);


personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje); // Para mantener los valores del objeto sin poder ser modificado
                          // const no tiene efecto

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades, valores});