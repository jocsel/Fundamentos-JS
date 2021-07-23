const heroes = ['Batman', 'Superman', 'Mujer maravilla', 'Aquaman'];
console.warn('for tradicional');
for(let i = 0; i <= heroes.length -1; i++){
    console.log(heroes[i]);
}
 console.warn('For in');

 for(let i in heroes){
    console.log(heroes[i]);
 }

 console.warn('for of');
for(let heroe of heroes){
    console.log(heroe);
}