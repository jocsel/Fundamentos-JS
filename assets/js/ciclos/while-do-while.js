const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];
let i = 0;
console.warn('While');
while(i < (carros.length - 1)){
    console.log(carros[i]);
    i++;
}

console.warn('do while');
let j = 0;
do{
    console.log(carros[j]);
    j++;
} while(carros[j])