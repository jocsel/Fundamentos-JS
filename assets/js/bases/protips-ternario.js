const elMayor = (a, b) => {
return (a > b) ? a : b
};

const tieneMembresia = (miembro) => (miembro)? 'Dos dolares' : 'Cinco dolares'

console.log(elMayor(15, 100));
console.log(tieneMembresia(false));

const amigo = false;
const arr =[
    'Peter',
    'Tony',
    'Dr. Strange',
    (amigo)? 'Thor' : 'Loki',
    elMayor(12,12.6),
]
console.log(arr);

const nota = 55;
const grado = (nota >= 100)? 'A+':
              (nota >= 90)? 'A':
              (nota >= 85)? 'B+':
              (nota >= 80)? 'B': 'C+'
console.log({nota, grado});
