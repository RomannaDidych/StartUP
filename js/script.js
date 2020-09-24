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

let readMoreBtns = document.querySelectorAll('.blog__btn');
function showAllText(el){
	readMoreBtns.forEach(el => {
		el.addEventListener('click', changeTextHeight)
	});
	function changeTextHeight(){	
		const text = this.previousElementSibling;
		text.classList.toggle('visible');	
		text.classList.contains('visible') ? this.innerHTML = 'Show less' :  this.innerHTML = 'Read more';	
	};
};
showAllText();

//get styles for focused slide (for sliderAbout)
/*function getArrey(selector){
	return document.querySelectorAll(selector);
}
let slides = getArrey('.works__item');//document.querySelectorAll('.about__slide');
console.log(slides);
function changeSlideStyle(el){
	slides.forEach(el => {
		el.addEventListener('click', toggleVisible)
	});
	function toggleVisible(){
		//console.log(this);
		//let mask = this.firstElementChild.firstElementChild.nextElementSibling;
		let mask = this.firstElementChild.nextElementSibling;
		let list = mask.nextElementSibling;
		mask.classList.toggle('visible');
		list.classList.toggle('visible'); 
	};
};
changeSlideStyle();*/


//get styles for focused slide
function changeSlideStyle(arr){	
	arr.forEach(el => {
		el.addEventListener('mouseenter', addVisible);
		el.addEventListener('mouseleave', removeVisible);
	});
	function addVisible(){		
		//let mask = this.firstElementChild.firstElementChild.nextElementSibling;
		let mask = this.firstElementChild.nextElementSibling;
		let inform = mask.nextElementSibling;
		mask.classList.add('visible');
		inform.classList.add('visible'); 
	};
	function removeVisible(){		
		let mask = this.firstElementChild.nextElementSibling;
		let inform = mask.nextElementSibling;
		mask.classList.remove('visible');
		inform.classList.remove('visible'); 
	};
};
let works = document.querySelectorAll('.works__item');
changeSlideStyle(works);


//sliders management
$(document).ready(function(){
	$('.sliderAbout').slick({
		arrows: true,
		infinite: true,
		slidesToShow: 4,
		swipe: true,
		centerMode: false,
		variableWidth: false
	});
});

$(document).ready(function(){
	$('.sliderClients').slick({
		arrows: false,
		dots: true
	});
});

//works gallery filter
$('.filtr__item').click(function(event){
	let filterName = $(this).data('filter');
	if (filterName === "all"){
		$('.works__item').show();
	} else{
		$('.works__item').hide();
		$('.works__item.'+filterName).show();
	};
	$('.filtr__item').removeClass('active');
	$(this).addClass('active');
});

//animation on scroll
let animItems = document.querySelectorAll('.anim-items');
if(animItems.length > 0){
	window.addEventListener('scroll',animOnScroll);
	function animOnScroll(){
		for(let index=0; index<animItems.length; index++){
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;//animated objects' height
			const animItemOffset = offset(animItem).top;
			const animStart = 4;//starts coefficient

			let animItemPoint = window.innerHeight - animItemHeight / animStart; // animations start point (window.innerHeight - height of browsers' window)

			if(animItemHeight > window.innerHeight){
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if((pageYOffset > (animItemOffset-animItemPoint)) && (pageYOffset < (animItemOffset + animItemHeight))){
				animItem.classList.add('_active');
			} else {
				animItem.classList.remove('_active');
			}		
		}
	};
	function offset(el){
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
	
};