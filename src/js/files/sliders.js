/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination, Parallax, Thumbs } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.gallery__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер

		let swiperGalleryInfo = new Swiper('.info-gallery__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Thumbs, Parallax],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			//autoHeight: true,
			speed: 800,
			allowTouchMove: false,  // Отключить листание
			initialSlide: 2,

			parallax: true,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			on: {

			}
		});
		let swiperGallery = new Swiper('.gallery__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Thumbs],
			observer: true,
			observeParents: true,
			slidesPerView: 5,
			spaceBetween: 0,
			//autoHeight: true,
			speed: 800,
			grabCursor: true,
			initialSlide: 2,
			centeredSlides:true,
			thumbs: {
				swiper: swiperGalleryInfo,
			},
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			/*
			// Брейкпоінти
			
			*/
			breakpoints: {
				320: {
					slidesPerView: 1.55,
					spaceBetween: 0,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 0,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 0,
				},
				1268: {
					slidesPerView: 5,
					spaceBetween: 0,
				},
			},
			// Події
			on: {

			}
		});
	}

	if(document.querySelector('.cart__slider')){
		const slidersCarts = document.querySelectorAll('.cart__slider');

		// Для каждого найденного слайдера инициализируем Swiper
		slidersCarts.forEach((slider, index) => {
			new Swiper(slider, {
				modules: [Navigation, Pagination],
				observer: true,
				observeParents: true,
				slidesPerView: 1,
				spaceBetween: 0,
				speed: 800,
				parallax: true,
				navigation: {
					prevEl: '.cart-button-prev',
					nextEl: '.cart-button-next',
				},
				pagination: {
					el: '.cart-pagination',
					clickable: true,
				},
			});
		});
	}

	if (document.querySelector('.more__slider')) {
		 new Swiper('.more__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 24,
			//autoHeight: true,
			speed: 800,
			grabCursor: true,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			navigation: {
				prevEl: '.more-button-prev',
				nextEl: '.more-button-next',
			},
			pagination: {
				el: '.more-pagination',
				clickable: true,
			},
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			
			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1.05,
				},
				576: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 3,
				},
			
			},
			
			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.hero__slider-swiper')) {
		 new Swiper('.hero__slider-swiper', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 24,
			//autoHeight: true,
			speed: 800,
			grabCursor: true,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			
			pagination: {
				el: '.hero-pagination',
				clickable: true,
			},
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			
			// Брейкпоінти
	
			
			// Події
			on: {

			}
		});
	}
}


window.addEventListener("load", function (e) {
	initSliders();
});