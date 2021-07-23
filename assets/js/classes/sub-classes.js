class Persona{
    nombre = '';
    edad = '';
    frase = '';
    comida = '';
    static _conteo = 0;
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
class heroe extends Persona {
  clan = 'sin clan'; 
  constructor(nombre, edad, frase){
      super(nombre, edad, frase);
      this.clan = 'Los Avangers';
      console.log(`Soy ${this.nombre}  y mi frase es ${this.frase}`);
      super.quienSoy();
     }
  }
  

// const spiderman = new Persona('Peter Parker', 22, 'EL hombre que araña');
const cClan = new heroe('Tony', 36, 'Soy hulk');
console.log(cClan);
// cClan.quienSoy();