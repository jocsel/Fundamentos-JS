function crearPersona(nombre, apellido){
    return {nombre, apellido};
};

console.log(crearPersona('Jocsel','Diaz'));

const crearPersonaFlecha = (nombre2, apellido2) => ({nombre2, apellido2});
const persona = crearPersona('Nombre','Apellido');
console.log(persona);

const imprimirArgumentos = (edad, ...argument) => {
    console.log({edad,argument});
    return argument;
};

imprimirArgumentos(33, true, false, 'Jocsel', 'Bienvenido');

const [vivo, casado, nombre, saludo] = 
imprimirArgumentos(33, true, false, 'Jocsel', 'Bienvenido');
console.log({vivo, casado, nombre, saludo});

const {apellido: nuevoApellido} = crearPersona('Jocsel', 'Diaz');
console.log({nuevoApellido});

let Tony  ={
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    edad: 45,
    vivo: false,
    trajes: ['Mark 1', 'Mark V', 'Hulkbuster'],
};

// const imprimirPropiedades = (personaje) =>{
//     console.log(persona.nombre);
//     console.log(persona.codeName);
//     console.log(persona.vivo);
//     console.log(persona.edad);
//     console.log(persona.trajes);
// };
const imprimirPropiedades = ({nombre, codeName, vivo, edad = 0, trajes}) =>{
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
};

imprimirPropiedades(Tony);