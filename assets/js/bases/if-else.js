
//console.log(diaSemana);

const hoy = new Date();
let dia = hoy.getDay();
let seleccionDia;
seleccionDia = 3;


const diaSemana = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',   
    6: 'Sabado',
    Dia: 'No existe',
};

const diaSemana2 = ['Domingo' ,'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

console.log(diaSemana[seleccionDia] || 'Dia no valido');

if(seleccionDia = 3){
    console.log('El dia seleccionado es', diaSemana[seleccionDia]); //Por indice
    console.log('El dia seleccionado es', diaSemana.Dia); //Por argumento
}
else{
console.log('Dia no valido');
};
