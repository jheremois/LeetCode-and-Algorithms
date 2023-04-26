function sortItems(array) {
	for (i = 0; i < array.length; i++) {
		for (j = 0; j < array.length; j++) {
            /*
            Se ejecuta el mismo ciclo la cantidad de veces que 
            el largo del vector y en cada iteracion verifica si el elemento
            el mayor al elemento que le sigue y en caso de ser asi pues 
            cambian de posicion, de esa forma se van organizando entre iteraciones
            */
            
			if (array[j] >= array[j + 1]) {
                /*
                Creamos esta variable para tener el valor que es "j" actualmente
                de manera fija ya que este cambiara
                */
				let temp = array[j];
                // cambiamos el varlor actual iterando por el valor siguiente
				array[j] = array[j + 1];
                // cambiamos el varlor siguiente al que se te iterando por el valor actual
				array[j + 1] = temp;
			}
		}
	}
    console.log(array);
}

sortItems([32, 49, 0, 12, 9, 4,2])