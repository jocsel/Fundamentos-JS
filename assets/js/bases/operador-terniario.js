// Dias de semana abrimos a las 11
// los fines de semana abrimos a las 9

//Entra en un sitio web para consultar si esta abierto hoy

const dia = 1;
const horaActual = 2;
 
let horaApertura;
let mensaje;
//  if(dia === 0 || dia === 6){
//     console.log('Fin de semana');
//     horaApertura = 9;
//  } else{
//     console.log('Dia de la semana');
//     horaApertura = 11;
//  }
horaApertura = ([0,6].includes(dia)) ? 9 : 11;

//  if(horaActual >= horaApertura){
//      console.log('Esta abierto');
//      mensaje = `Esta abierto, hoy abrimos a las ${horaApertura}`;
//  } else{
//      mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
//  }
mensaje = (horaActual >= horaApertura) ? `Esta abierto, hoy abrimos a las ${horaApertura}` :
`Esta cerrado, hoy abrimos a las ${horaApertura}`;

 console.log({horaApertura, mensaje});