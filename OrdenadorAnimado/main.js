var mensaje = 'ORDENADOR DE SERIE \n Ingrese la cantidad de números a ordenar :';
var condicion = true // para convalidar que el dato no sea caracter, número negativo ni 0 ni 1
var array = [];
var itemAnimado = [];
var wrapDiv = [];
var wrap = [];
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
	}while (isNaN(numero)==true)
	
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


// ====== MOSTRANDO EL ARRAY EN EL BROWSER ======

for (var k in array) {
		$('.wrap').append('<div>' + array[k] + '</div>');
}


// ====== DEFINIR FUNCIONES PARA ANIMAR Y CAMBIAR NÚMERO ====== 

var cambioNumero = function(array, j1, j2) {
	var temp = array[j1];
	array[j1] = array[j2];
	array[j2] = temp;
	itemAnimado.push(function() {
		wrapDiv.eq(j1).add(wrapDiv.eq(j2)).addClass('highlight');
	}, function() {
		var temp = wrapDiv.eq(j1).text();
		wrapDiv.eq(j1).text(wrapDiv.eq(j2).text());
		wrapDiv.eq(j2).text(temp);
	}, function() {
		wrapDiv.eq(j1).add(wrapDiv.eq(j2)).removeClass('highlight');
	});
};

var animacion = function() {
	if (itemAnimado.length) {
		setTimeout(function() {
			itemAnimado.splice(0,1)[0]();
			animacion();
		}, 250);
	}
};


// ====== MÉTODO DE ORDENAMIENTO ======

var metodo = {
	burbuja: function (array) {
				for (var i = array.length; i > 1; i--){
					for (var j = 0; j < i - 1; j++){
						if ((array[j] - array[j+1]) > 0) {
							cambioNumero(array, j, j+1);
						}	 
					}
				}
			}
}


// ====== VISUALICE LA ANIMACIÓN DEL PROCESO DE ORDENAMIENTO ======

if (metodo['burbuja'] != undefined) {
	wrap = $('.wrap');
	wrapDiv = wrap.find('div');
	metodo['burbuja'](array);
	animacion();
};