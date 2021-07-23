class Persona{
    nombre = '';
    edad = '';
    frase = '';
    comida = '';
    static _conteo = 0; //No hay q inicializar la clase para llamar el static
    static get conteo(){
        return 'Veces instanciada conteo ' + Persona._conteo;
    }
    static mensaje(){
        console.log('Este es un mensaje static');
    }
    constructor(nombre = 'Sin nombre', edad = 'Sin edad', frase = 'Sin frase'){
        if(!nombre) throw ('Llenar el nombre')
        this.nombre = nombre;
        this.edad = edad;
        this.frase = frase;
        Persona._conteo++; //Acunmula las veces q se ha instanciado la clase
    }
    // set, para establecer un valor
    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase(); 
    }
        // Get, para recuperar un valor
    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }
    // Metodos
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi frase es, ${this.frase}`);
    }
    mifrase(){
        this.quienSoy(); //si no agrgamos el this, buscara el objeto dentro de este objeto, !
        console.log(`${this.nombre} dice: ${this.frase}`);
    }
}

const spiderman = new Persona('Peter Parker', 22, 'EL hombre que araña');
const iroman = new Persona('El tony', 22, 'Yo soy Iroman');
spiderman.setComidaFavorita ='Aqui va la comida';
// console.log(iroman);
spiderman.quienSoy();
spiderman.mifrase();
spiderman.nuevo = 'Aqui'; //No son propiedades privadas
console.log(spiderman.getComidaFavorita);
console.log(spiderman);
console.log(Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();