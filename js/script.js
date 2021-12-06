// Меню бургер

const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
const menuLink = document.querySelector('.header__menu-item');

if (iconMenu) {
	
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('burger-active');
		menuBody.classList.toggle('burger-active');
	});
}

// ---------------------------------------------------------
// https://medium.com/@vadimfilimonov/%D0%B0%D0%BA%D0%BA%D0%BE%D1%80%D0%B4%D0%B5%D0%BE%D0%BD-%D0%BD%D0%B0-%D1%87%D0%B8%D1%81%D1%82%D0%BE%D0%BC-js-287b455ac433

function findElements(object, element) {
	const instance = object;
	instance.element = element;
	instance.target = element.nextElementSibling;
}

function hideElement(object) {
	const instance = object;
	const { target } = instance;
	target.style.height = null;
	instance.isActive = false;
}

function showElement(object) {
	const instance = object;
	const { target, height } = instance;
	target.style.height = `${height}px`;
	instance.isActive = true;
}

function changeElementStatus(instance) {
	if (instance.isActive) {
		hideElement(instance);
	} else {
		showElement(instance);
	}
}

function measureHeight(object) {
	const instance = object;
	instance.height = object.target.firstElementChild.clientHeight;
}

function subscribe(instance) {
	instance.element.addEventListener('click', (event) => {
		event.preventDefault();
		changeElementStatus(instance);
	});
	window.addEventListener('resize', () => measureHeight(instance));
}

function accordion(element) {
	const instance = {};
		
	function init() {
		findElements(instance, element);
		measureHeight(instance);
		subscribe(instance);
	}
	
	init();
}

const elements = [...document.querySelectorAll('.js-accordion')];
elements.forEach(accordion);
