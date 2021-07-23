class rectangulo{
    #area = 0;
    constructor(base = 0, altura = 0){
       this.base = base;
       this.altura = altura;
       this.#area = this.base * this.altura;
    }
    duplicarArea(){
        console.log(this.#area * 2);
    }
}

const cRectangulo = new rectangulo(10, 15);
// console.log(#area = 100);
console.log(cRectangulo);
cRectangulo.duplicarArea();