// Función para bloquear el scroll
function bloquearScroll() {
    document.body.style.overflow = 'hidden';
}

// Función para desbloquear el scroll
function desbloquearScroll() {
    document.body.style.overflow = 'auto';
}

// Función para verificar y agregar la clase
function verificarYAgregarClase() {
    // Verificar si el DOM y las imágenes están cargados
    if (document.readyState === 'complete') {
        // Bloquear el scroll
        bloquearScroll();

        // Esperar 1 segundo antes de continuar
        setTimeout(function () {
            // Buscar el elemento por su clase
            var elemento1 = document.querySelector('.load');
            var text = document.querySelector(".inicio__text");
            var elemento2 = document.querySelector(".inicio__mujer--1");
            var elemento3 = document.querySelector(".inicio__mujer--2");
            var elemento4 = document.querySelector(".inicio__mujer--3");
            var elemento5 = document.querySelector(".inicio__mujer--4");



                // Agregar una clase adicional al elemento encontrado
                elemento1.classList.add('load__none');
                text.classList.add("inicio__text--slideup");
                elemento2.classList.add("inicio__mujer--slideup1");
                elemento3.classList.add("inicio__mujer--slideup2");
                elemento4.classList.add("inicio__mujer--slideup3");
                elemento5.classList.add("inicio__mujer--slideup4");
            
                console.log('Se ha agregado la nueva clase al elemento.');

                // Desbloquear el scroll después de agregar la clase
                desbloquearScroll();
                clearInterval(intervalo);
            
        }, 1000); // Esperar 1 segundo (1000 ms) antes de continuar
    }
}

// Verificar y agregar la clase cada 500 milisegundos
var intervalo = setInterval(verificarYAgregarClase, 500);