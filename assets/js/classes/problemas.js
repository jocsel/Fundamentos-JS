const joc = {
    nombre : 'jocsel',
    edad : 22,
}

function persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function (){
        console.log(`nombre: ${this.nombre} , edad: ${this.edad}`);
    }
    console.log('Se ejecuto correctamte');
}

// const personaInfo = new persona(joc.nombre, joc.edad);
const maria = new persona(joc.nombre, joc.edad);
maria.imprimir();

