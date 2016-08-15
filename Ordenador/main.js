var mensaje = 'ORDENADOR DE SERIE \n Ingrese la cantidad de números a ordenar :';
var condicion = true // para convalidar que el dato no sea caracter, número negativo ni 0 ni 1
var array = [];
var i = 0;
var existe = true;

// ====== INTRODUCIENDO LA CANTIDAD DE NÚMEROS ======

do {
	var totalNumero = parseInt(prompt(mensaje));	
	if (totalNumero > 1) condicion = false;
}while (condicion)


// ====== LOS NÚMEROS INGRESADOS NO DEBEN REPETIRSE ======

do {

	do{
		var numero = parseInt(prompt('Ingrese el número ' + (i + 1)));	
	}while (isNaN(numero) == true)
	
	if (array.length > 0) {
		var encontrado = array.indexOf(numero);
		if (encontrado < 0) existe = false;
	}else existe = false;

	if (!existe) {
		array.push(numero);
		alert('Números ingresados \n' + array);
		i++;
		existe = true;
	}else {
		alert('Los números ingresados no deben REPETIRSE');
	}

}while (existe && totalNumero > i)


// ====== ORDENANDO LOS NÚMEROS EN FORMA ASCENDENTE ======

for (var i = 1; i <= totalNumero; i++) {
	for(var j = 1; j <= totalNumero; j++) {
		if ((array[j-1] - array[j]) > 0) {
			var temp = array[j];
			array[j] = array[j-1];
			array[j-1] = temp;
		}
	}  
}

alert('Los números ordenados de forma ASCENDENTE \n' +  array);