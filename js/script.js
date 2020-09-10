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
	 body.classList.toggle('lock');
};
burger.addEventListener('click', toggleActive);

function hideBurgerNavigation(el){
	nav_link.forEach(el =>{
		el.addEventListener('click', removeActive)
	});
	function removeActive(){
		burger.classList.remove('active');
		nav.classList.remove('active');
		body.classList.remove('lock');
	};
};
hideBurgerNavigation();