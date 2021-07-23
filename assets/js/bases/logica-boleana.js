const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

//Negacion de un valor booleano
console.warn('Not a la negacion');
console.log(!true);
console.log(!false);

console.log(!regresaFalse);

console.log('And');
console.log(true && true);
console.log(true && !false);

console.log('======');
console.log(regresaFalse() && regresaTrue());  //Basta con que exista un false para que devuelva verdadero
console.log(regresaTrue() && regresaFalse());

console.log('===&&===');
regresaFalse() && regresaTrue()

console.warn('OR');
console.log(true || false); //Basta con que exista un true para que devuelva verdadero

console.log('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalse && true;
const a3 = soyFalse || 'Ya no soy false';


console.log(a1, a2, a3, a4);