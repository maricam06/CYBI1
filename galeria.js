// Función para obtener la edad del usuario
function obtenerEdadUsuario() {
    let edad = prompt('Por favor, ingresa tu edad:');
    edad = parseInt(edad);
    return isNaN(edad) ? 0 : edad; // Si no se ingresa un número, devolver 0
}

// Función para mostrar solo las imágenes y encabezados correspondientes a la edad ingresada y ocultar los demás
function mostrarContenidoSegunEdad() {
    const edad = obtenerEdadUsuario();

    const infanciaImages = document.querySelectorAll('.infancia .imagen1');
    const catequesisImages = document.querySelectorAll('.catequesis .imagen2');
    const matrimonioImages = document.querySelectorAll('.matrimonio .imagen3');

    const infanciaHeader = document.getElementById('infancia');
    const catequesisHeader = document.getElementById('catequesis');
    const matrimonioHeader = document.getElementById('matrimonio');

    if (edad >= 4 && edad <= 15) {
        // Mostrar imágenes de infancia misionera
        infanciaImages.forEach(img => img.style.display = 'block');
        catequesisImages.forEach(img => img.style.display = 'none');
        matrimonioImages.forEach(img => img.style.display = 'none');
        infanciaHeader.style.display = 'block';
        catequesisHeader.style.display = 'none';
        matrimonioHeader.style.display = 'none';
    } else if (edad > 15 && edad <= 20) {
        // Mostrar imágenes de catequesis, expocarisma
        infanciaImages.forEach(img => img.style.display = 'none');
        catequesisImages.forEach(img => img.style.display = 'block');
        matrimonioImages.forEach(img => img.style.display = 'none');
        infanciaHeader.style.display = 'none';
        catequesisHeader.style.display = 'block';
        matrimonioHeader.style.display = 'none';
    } else if (edad >= 20) {
        // Mostrar imágenes de matrimonio, expocarisma, catequesis
        infanciaImages.forEach(img => img.style.display = 'none');
        catequesisImages.forEach(img => img.style.display = 'none');
        matrimonioImages.forEach(img => img.style.display = 'block');
        infanciaHeader.style.display = 'none';
        catequesisHeader.style.display = 'none';
        matrimonioHeader.style.display = 'block';
    } else {
        console.log('No se encontró una edad válida');
    }
}

// Llamar a la función para mostrar solo las imágenes y encabezados correspondientes a la edad ingresada por el usuario
mostrarContenidoSegunEdad();
