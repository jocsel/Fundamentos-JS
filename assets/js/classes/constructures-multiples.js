class Persona{
    static porObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais);
    }
    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }
    getinfo(){
    console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}
const nombre1   = 'Melissa',
      apellido1 = 'Flores',
      pais1     = 'Honduras';

const joc = { //Objeto
    nombre: 'jocsel',
    apellido: 'Diaz',
    pais: 'Nicaragua',
}

const persona1 = new Persona(nombre1, apellido1, pais1);
persona1.getinfo();

const persona2 = Persona.porObjeto(joc);
persona2.getinfo();