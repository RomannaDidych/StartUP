//get backgrounde image for fullscreen
function ibg(){	
	var ibg = document.querySelectorAll('.ibg');
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
	  		ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	};
};
ibg();

//Burger menu
let burger =  document.querySelector('.header__burger');
let nav =  document.querySelector('.header__menu');
let body =  document.querySelector('body');
let nav_link = document.querySelectorAll('.header__link');
function toggleActive(){
	burger.classList.toggle('active');
	 nav.classList.toggle('active');
	 //body.classList.toggle('lock');
};
burger.addEventListener('click', toggleActive);

function hideBurgerNavigation(el){
	nav_link.forEach(el =>{
		el.addEventListener('click', removeActive)
	});
	function removeActive(){
		burger.classList.remove('active');
		nav.classList.remove('active');
		//body.classList.remove('lock');
	};
};
hideBurgerNavigation();

//get styles for focused slide (for sliderAbout)
let slides = document.querySelectorAll('.about__slide');
console.log(slides);
function changeSlideStyle(el){
	slides.forEach(el => {
		el.addEventListener('click', toggleVisible)
	});
	function toggleVisible(){
		console.log(this);
		let mask = this.firstElementChild.firstElementChild.nextElementSibling;
		let list = mask.nextElementSibling;
		mask.classList.toggle('visible');
		list.classList.toggle('visible'); 
	};
};
changeSlideStyle();




//sliders management
/*$(document).ready(function(){
	$('.sliderAbout').slick({
		//dots: true
	});
});*/

$(document).ready(function(){
	$('.sliderClients').slick({
		arrows: false,
		dots: true
	});
});


