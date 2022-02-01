var numero;
var contador=0;
var suma=0;
for(var i=0; i < 5; i++){
    numero = parseInt(prompt("Introduce 5 numeros:"));
    suma+= numero;
    if(numero > 100){
        contador++;
        
    }
}

alert("La suma de los numeros es " + suma + " y hay " + contador + " numeros mayores a 100");