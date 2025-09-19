/*
La programación defensiva se trata de asumir que todos los argumentos que una función recibirá son del tipo incorrecto, del valor incorrecto o ambos.

En otras palabras, asume que las cosas saldrán mal y es proactivo al pensar en tales escenarios antes de que sucedan, para que sea menos probable que su función cause errores debido a entradas defectuosas.

Para este ejercicio, asegurémonos de que los dos argumentos que se pasan cumplan con los siguientes criterios:

La longitud del parámetro word no puede ser inferior a2.
La longitud del parámetro match debe ser 1.
El tipo de los parámetros word y match deben ser string.
*/


function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;
if (condition1 == true && condition2 == true) {
    for(i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
} else {
console.log('Please pass correct arguments to the function');
}
}

letterFinder("hola","o");
