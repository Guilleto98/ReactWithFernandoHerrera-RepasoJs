const array = [1,2,3,4];

/* array.push(1);
array.push(2);
array.push(3); EL PUSH MODIFICA EL ARREGLO ORIGINAL, NO SE RECOMIENDA
*/

let array2 =  [...array, 5]; // con spread obtenemos los elementos del arreglo originario y no se modifica


let array3 = array.map((i)=>{
     return i * 2;
});



console.log(array3)
console.log(array2)
console.log(array)