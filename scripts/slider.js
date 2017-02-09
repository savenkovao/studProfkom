'use strict';

var sliderInner;
var clickCounter = 0;
var radioButton=[];
var contentSlider = document.querySelector('.content-slider');
var arrowLeft = document.querySelector('.slider-arrow-left');
var arrowRight = document.querySelector('.slider-arrow-right');
var sliderItemImage = document.querySelector('.slider-item-image');
var sliderItems = document.querySelectorAll('.slider-item').length/2;
var currentInnerItemHeight = document.querySelector('.slider-item').offsetHeight;
var currentWrapperWidth = document.querySelectorAll('.wrapper')[0].offsetWidth - 30; 


setSlider();

function setSlider(){
	if(currentWrapperWidth<=768){
		sliderInner = document.querySelector('.slider-inner-mobile');		
	} else {
		sliderInner = document.querySelector('.slider-inner-desktop');		
	}
	sliderInner.style.display = "block";
}

createRadioButtons ();

arrowLeft.classList.add("enabled");
arrowRight.classList.add("enabled");

arrowRight.onclick = function (){
	// clearTimeout(timerId);
	rightOnClick();
}

function rightOnClick(){
	currentWrapperWidth = document.querySelectorAll('.wrapper')[0].offsetWidth - 30;
	sliderInner.style.width = currentWrapperWidth + 'px';	
	clickCounter++;		
	if (clickCounter>sliderItems-1){
		clickCounter = 0;
	}	
	changeButtonBackGround ();
	radioButton[clickCounter].style.backgroundColor= 'rgb(80, 210, 89)';
	browseRight ();
}

arrowLeft.onclick = function (){
	// clearTimeout(timerId);
	leftOnClick();
}

function leftOnClick(){
	currentWrapperWidth = document.querySelectorAll('.wrapper')[0].offsetWidth - 30;
	sliderInner.style.width = currentWrapperWidth + 'px';
	clickCounter--;	
	if (clickCounter<0){
		clickCounter = (sliderItems-1);
	}
	changeButtonBackGround ();
	radioButton[clickCounter].style.backgroundColor= 'rgb(80, 210, 89)';
	browseLeft ();
}



window.addEventListener("resize", getNewWrapperWidth);

function getNewWrapperWidth (){
	
	currentWrapperWidth = document.querySelectorAll('.wrapper')[0].offsetWidth - 30;
	sliderInner.style.display = "none";
	setSlider();
	sliderInner.style.width = currentWrapperWidth + 'px';
	if (clickCounter>=0) {
		sliderInner.style.marginLeft = - currentWrapperWidth*clickCounter + 'px';
	} else {
		sliderInner.style.marginLeft = - currentWrapperWidth*(sliderItems+clickCounter) + 'px';
	}	
}

function browseRight () {
	var currentMargin = parseInt(sliderInner.style.marginLeft)||0;
	sliderInner.style.transition = 'margin-left 0.3s linear';	
	
	if(currentMargin != (sliderItems - 1)*-currentWrapperWidth){
		sliderInner.style.marginLeft = currentMargin - currentWrapperWidth + 'px';
	} else {
		sliderInner.style.marginLeft = '0px';
		sliderInner.style.transition = 'margin-left 0.1s linear';
	}
}

function browseLeft () {
	var currentMargin = parseInt(sliderInner.style.marginLeft)||0;
	sliderInner.style.transition = 'margin-left 0.3s linear';	
	if(currentMargin !=0){
		sliderInner.style.marginLeft = currentMargin + currentWrapperWidth + 'px';
	} else {
		sliderInner.style.marginLeft = ((sliderItems - 1)* -currentWrapperWidth)+'px';
		sliderInner.style.transition = 'margin-left 0.1s linear';
	}
}

function createRadioButtons (){
	var radioButtonContainer = document.createElement('div');
	radioButtonContainer.className = 'radio-button-container';	
	for(var i = 0; i < sliderItems; i++){		
		radioButton[i] = document.createElement('div');		
		radioButton[i].classList.add("radio-button", "item_"+i);		
		radioButton[i].setAttribute("onclick","chooseSlide("+i+")");
		radioButtonContainer.appendChild(radioButton[i]);		
	}	
	radioButton[0].style.backgroundColor= 'rgb(80, 210, 89)';
	contentSlider.appendChild(radioButtonContainer);
}

function chooseSlide (i){
	// clearTimeout(timerId);
	clickCounter = i;	
	changeButtonBackGround ();
	radioButton[i].style.backgroundColor= 'rgb(80, 210, 89)';

	currentWrapperWidth = document.querySelectorAll('.wrapper')[0].offsetWidth - 30;
	sliderInner.style.width = currentWrapperWidth + 'px';
	sliderInner.style.marginLeft = -currentWrapperWidth*(clickCounter) + 'px';
}

function changeButtonBackGround (){
	for(var e = 0; e <sliderItems; e++){
		radioButton[e].style.backgroundColor= 'rgba(0,0,0,0.3)';
	}
}

var timerId = setInterval(
	function() { 
		rightOnClick();
	}, 
2700);

contentSlider.onmouseover = function (){
	clearTimeout(timerId);
}

contentSlider.onmouseout = function (){
	timerId = setInterval(
		function() { 
			rightOnClick();
		}, 
	2700);
}


