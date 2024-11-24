// Підключення функціоналу "Чертоги Фрілансера"
import {
	isMobile
} from "./functions.js";
// Підключення списку активних модулів
import {
	flsModules
} from "./modules.js";

import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

addEventListener("DOMContentLoaded", (event) => {
	const dateBox = document.querySelector('.date-form-content-booking');
	if (dateBox) {
		let dpMin, dpMax;

		dpMin = new AirDatepicker('#startDate', {
			container: dateBox,
			onSelect({
				date
			}) {
				dpMax.update({
					minDate: date
				})
			}
		})

		dpMax = new AirDatepicker('#endDate', {
			container: dateBox,
			onSelect({
				date
			}) {
				dpMin.update({
					maxDate: date,
				})
			}
		})
	}




	const searchBtnOpen = document.querySelector('.header-actions__search');
	const searchItem = document.querySelector('.search');
	if (searchItem && searchBtnOpen) {
		const resultSearchBox = searchItem.querySelector('.result-search');
		const searchBtnClose = searchItem.querySelector('.search__close');
		const searchBody = searchItem.querySelector('.search__body'); // Select the search__body block


		searchBtnOpen.addEventListener("click", function (e) {
			document.documentElement.classList.add('open-search');
		});
		if (searchBtnClose) {
			searchBtnClose.addEventListener("click", function (e) {
				if (document.documentElement.classList.contains('open-search')) {
					document.documentElement.classList.remove('open-search');
					if (document.documentElement.classList.contains('lock')) {
						if (!document.documentElement.classList.contains('menu-open')) {
							document.documentElement.classList.remove('lock');

						}

					}
					if (resultSearchBox.classList.contains('_active')) {
						resultSearchBox.classList.remove('_active');
					}
				}
			});
		}
		document.addEventListener("click", function (e) {
			if (document.documentElement.classList.contains('open-search')) {
				// Check if the click is outside the search__body
				if (!searchBody.contains(e.target) && !searchBtnOpen.contains(e.target)) {
					// Check if resultSearchBox does not have the _active class
					if (!resultSearchBox.classList.contains('_active')) {
						document.documentElement.classList.remove('open-search');
						if (!document.documentElement.classList.contains('menu-open')) {

							document.documentElement.classList.remove('lock');
						}
					}
				}
			}
		});


	}

	const video = document.querySelector('.main__video');
	const videoPlayBtn = document.querySelector('.video-play');
	const videoStopBtn = document.querySelector('.video-stop');
	if (videoPlayBtn && video && videoStopBtn) {
		videoPlayBtn.addEventListener("click", function (e) {
			video.play();
			document.documentElement.classList.add('_video-play');
		});
		videoStopBtn.addEventListener("click", function (e) {
			video.pause();
			if (document.documentElement.classList.contains('_video-play')) {
				document.documentElement.classList.remove('_video-play')

			}
		});
	}



	function handleScrollAndResize() {
		if (window.innerWidth >= 991.98) {
			setTimeout(() => {
				document.addEventListener('scroll', onScrollHandler);
			}, 1000);
		} else {
			document.removeEventListener('scroll', onScrollHandler); // Отключаем обработчик при меньшем размере экрана
		}
	}

	function onScrollHandler() {
		const selection = document.querySelector('.selection');
		if (selection) {

			const selectionInfoItems = selection.querySelectorAll('.item-selection');
			const selectionPictureItems = selection.querySelectorAll('.selection__image');

			selectionInfoItems.forEach((item, index) => {
				const rect = item.getBoundingClientRect();
				const itemCenterY = (rect.top + rect.bottom) / 2;
				const windowCenterY = window.innerHeight / 2;

				// Проверяем, находится ли центр элемента в центре экрана по оси Y
				if (itemCenterY >= windowCenterY - 150 && itemCenterY <= windowCenterY + 150) {
					// Удаляем класс _active со всех картинок
					selectionPictureItems.forEach(img => img.classList.remove('_active'));
					// Добавляем класс _active соответствующему изображению
					selectionPictureItems[index].classList.add('_active');
				}
			});

			const rect = selection.getBoundingClientRect(); // Получаем положение элемента относительно окна
			const windowHeight = window.innerHeight; // Высота видимой части окна браузера
			const offset = 300; // Смещение на 300px
			const wrapperText = document.querySelector('.wrapper-content');

			// Если нижняя часть окна касается начала блока selection (с учётом смещения 300px)
			if (rect.top <= windowHeight - offset && rect.bottom > windowHeight - offset) {
				if (wrapperText) {
					wrapperText.classList.add('_active');
				}
			}

			// Если нижняя часть окна касается нижней части блока selection (с учётом смещения 300px)
			else if (rect.bottom <= windowHeight - offset) {
				if (wrapperText) {
					wrapperText.classList.remove('_active');
				}
			}

			// Если блок выше окна (скролим выше блока, с учётом смещения 300px)
			else if (rect.top > windowHeight - offset) {
				if (wrapperText) {
					wrapperText.classList.remove('_active');
				}
			}
		}
	}

	// Инициализация при загрузке страницы
	handleScrollAndResize();

	// Добавляем обработчик события resize
	window.addEventListener('resize', handleScrollAndResize);


});

document.documentElement.classList.add('lock');
document.addEventListener("DOMContentLoaded", (event) => {
	const loader = document.querySelector('#page-preloader');
	if (loader) {
			loader.classList.add('done')
			document.documentElement.classList.remove('lock')
	}
});

// 	setTimeout(function () {
// 		const loadItem = document.querySelector(".loading");
// 		setTimeout(function () {
// 			document.documentElement.classList.add('loaded');
// 		}, 1000);
// 		if (!loadItem.classList.contains('done')) {
// 			loadItem.classList.add('done');
// 		}
// 	}, 1000);
// }