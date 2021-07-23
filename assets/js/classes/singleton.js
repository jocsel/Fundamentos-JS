class singleton{
    static instancia;
    nombre = '';
    constructor(nombre = ''){
        // const a = undefined;
        // console.log(!a);
        // console.log(!!a);
        if(!!singleton.instancia){
            return singleton.instancia;
        }
        singleton.instancia = this;
        this.nombre = nombre;
        
    }
}
const instancia1 = new singleton('Iroman');
console.log(`El nombre de la instacia1 es ${instancia1.nombre}`);
const instancia2 = new singleton('Spiderman');
console.log(`El nombre de la instacia1 es ${instancia2.nombre}`);
const instancia3 = new singleton('BlackPanther');
console.log(`El nombre de la instacia1 es ${instancia3.nombre}`);
