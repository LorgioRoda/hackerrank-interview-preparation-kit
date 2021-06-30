function sockMerchant(n, ar) {
      let sorted = ar.sort( (a,b) => a - b); //Usamos un metodo para organizar el array en orden de menor a mayor
    let pairs = 0; //creamos una variable que inicia en cero, este sera nuestro contador

    for (let i = 0; i < n - 1; i++) { //pasamos nuestro array organizado por un ciclo for
        if ( sorted[i] === sorted[i + 1]) { //Una vez se cumpla la condicion si es exactamente igual el valor del indice con el que recorre, sumamos a nuestro contador
            pairs++;
            i += 1;
        }
    }

    return pairs; //retornamos el valor total de nuestro contador
}