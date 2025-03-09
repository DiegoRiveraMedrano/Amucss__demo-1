(function () {
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', () => {
        menu.classList.add('nav__link--show');
        document.body.style.overflow = 'hidden';//desactivar el scroll de la pagina al activar el menu



    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
        document.body.style.overflow = 'auto';//volver a activar el scroll de la pagina

    });

})();

// Función para verificar el tamaño de la página, remover la clase y activar el scroll si se superan los 800px, esto pasa cuando se mueve la horientacion en algunos dispositivos
function checkPageDimensionsAndAdjust(className) {
    const pageWidth = window.innerWidth;

    if (pageWidth > 800) {
        // Remover la clase del elemento con la clase especificada
        const element = document.querySelector(`.${className}`);
        if (element) {
            element.classList.remove(className);
        }

        // Activar el scroll del body
        document.body.style.overflow = 'auto';
    }
}

// Función que se ejecutará cada segundo para verificar las dimensiones y ajustar la clase y el scroll si es necesario
function checkPageDimensionsAndAdjustRepeatedly(className) {
    setInterval(function () {
        checkPageDimensionsAndAdjust(className);
    }, 1000); // 1000 milisegundos = 1 segundo
}

// Llamar a la función con el nombre de la clase que deseas remover y activar el scroll si se superan los 800px
const classNameToRemove = 'nav__link--show';
checkPageDimensionsAndAdjustRepeatedly(classNameToRemove);


/* Condicion para que cambie de color la barra de navegacion al bajar*/
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    var link = document.querySelector(".nav__link");
    var logo = document.querySelector(".nav__logo--img");
    var iconomenu = document.querySelector(".nav__img");
    var links = document.querySelector(".nav__links");
    nav.classList.toggle("nav--abajo", window.scrollY > 0);
    link.classList.toggle("nav__link--abajo", window.scrollY > 0);
    iconomenu.classList.toggle("nav__img--abajo", window.scrollY > 0);
    const elementosNavLinks = document.querySelectorAll('.nav__links');
    elementosNavLinks.forEach(links => { // para que se agregue a todos los elementos con esa clase y no solo al primero 
        if (window.scrollY > 0) {
            links.classList.add('nav__links--abajo');// agregar 
        } else {
            links.classList.remove('nav__links--abajo');// remover 
        }
    });
    if (window.scrollY > 0) {
        logo.src = './img/logo__color--blancas.svg'; //  Actualizar el atributo "src" con la nueva ruta de la imagen
        //logo.alt = 'Imagen 3';  Opcional: Puedes cambiar también el atributo "alt" si deseas.
    } else {
        logo.src = './img/logo__color--blancas.svg'; //  Si esta arriba regresar a la imagen original
    }

});
