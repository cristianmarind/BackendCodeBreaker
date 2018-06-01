function validacionRepetidos(cadena) {
    for (i = 0; i < 4; i++){
        var count = 0;
        for (j = 0; j < 4; j++) {
            if(cadena[i] == cadena[j]){
                count++;
            }
        }
        if(count >= 2){
            return false;
        }   
    }
    return true;
}

function validacionTamaño(cadena){
    if(cadena.length!=4){
        return false;
    }
    return true;
}

function validacionTipo(cadena){
    return /^\d+$/.test(cadena); 
}

function validarCadena(cadena){
    if (!validacionTipo(cadena)) {
        return "La cadena solo puede contener caracteres numericos";
    } else if(!validacionTamaño(cadena)){
        return "La cadena solo puede contener 4 digitos exactos";
    } else if(!validacionRepetidos(cadena)){
        return "La cadena no puede contener digitos repetidos";
    }
    return true;
}

module.exports = {
    validarCadena
}