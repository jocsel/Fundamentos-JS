function saludar( nombre){
    console.log(arguments);
    console.log('Hola '+ nombre);
    return 1
};

const saludar2 = function( nombre ){
console.log('Hola '+ nombre);
};

const funcuncionDeFlecha = ( nombre ) => {
console.log('Hola ' + nombre);
};

saludar('Joc','Bladi','Diaz');
saludar2('Jocs');
funcuncionDeFlecha('Bladimir');

const retornoDeSaludar = saludar(); //Las funciones devuelven el valor del return a quien la
console.log(retornoDeSaludar);      // mando a llamar

function sumaArgumentos(a, b){
    return a + b;
};
console.log(sumaArgumentos(2,2));

const sumArr = (a,b) => {
    return a + b;
};
console.log(sumArr(3,3));

const sumArg = (a,b) => a + b;
console.log(sumArg( 10,1 ));

function getAleatorio(){
 return Math.random();
};

console.log(getAleatorio());

const getAleatorio2 = () =>  Math.random();
   
   console.log(getAleatorio2());