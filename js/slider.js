var swiper = new Swiper('.swiper', {
	navigation: {//botones de naegación
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true, //para que vuelva a iniciar el slider
	autoplay: {
		delay: 5000, //tiempo en segundos con el que pasa el slider
		pauseOnMouseEnter: true, //para parar el slider si tiene el mouse encima
		disableOnInteraction: false,
	},
	// init: false,
	/*pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},*/


	breakpoints: { //responsive del slider
		620: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		680: {
			slidesPerView: 2,
			spaceBetween: 65,
		},
		920: {
			slidesPerView: 3,
			spaceBetween: 65,
		},
		1240: {
			slidesPerView: 4,
			spaceBetween: 70,
		},
	}
});

//Funcion para ajustar el border-radius de las imagenes conforme la pagina cambia de tamaño
document.addEventListener("DOMContentLoaded", function () { //para que empiece una vez cargados los elementos del DOM 
	function obtenerAnchoAlto() {
		const cards = document.querySelectorAll('.card');

		cards.forEach(card => {
			const imagen = card.querySelector('.card__img');
			const ancho = imagen.width;
			const alto = imagen.height;
			const radius = (ancho * 110) / 1000; //calculo basado en el border-radius de los logos en ilustraitor
			
			//activar para revisar los valores en la consola 
			//console.log("ancho: ", ancho);
			//console.log("alto: ", alto);
			//console.log("radius: ", radius);

			// Aplicar los valores a las propiedades CSS de cada tarjeta
			card.style.setProperty('--ancho-imagen', `${ancho}px`);
			card.style.setProperty('--alto-imagen', `${alto}px`);
			card.style.setProperty('--radius-imagen', `${radius}px`);
		});
	}

	setInterval(obtenerAnchoAlto, 100); //cada 100 milisegundos 
});


