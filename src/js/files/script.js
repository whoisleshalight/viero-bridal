// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


addEventListener("DOMContentLoaded", (event) => {





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
						document.documentElement.classList.remove('lock');

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
						document.documentElement.classList.remove('lock');
					}
				}
			}
		});


	}

});
