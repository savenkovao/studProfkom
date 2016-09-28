'use strict';

var currentWrapperWidth; 
var clickCounter = 0;  
var sliderInner = document.querySelector('.slider-inner');
var arrowLeft = document.querySelector('.slider-arrow-left');
var arrowRight = document.querySelector('.slider-arrow-right');
var sliderItems = document.querySelectorAll('.slider-item').length;
var currentInnerHeight = document.querySelector('.slider-inner').offsetHeight;
var currentInnerItemHeight = document.querySelector('.slider-item').offsetHeight;

arrowRight.onclick = function (){
	currentWrapperWidth = document.querySelectorAll('.wrapper')[0].offsetWidth;
	sliderInner.style.width = currentWrapperWidth + 'px';
	clickCounter++;
	if (clickCounter>sliderItems-1){
		clickCounter = 0;
	}
	browseRight ();
}

arrowLeft.onclick = function (){
	currentWrapperWidth = document.querySelectorAll('.wrapper')[0].offsetWidth;
	sliderInner.style.width = currentWrapperWidth + 'px';
	clickCounter--;
	if (clickCounter<-(sliderItems-1)){
		clickCounter = 0;
	}
	browseLeft ();
}

window.addEventListener("resize", getNewWrapperWidth);

function getNewWrapperWidth (){
	currentWrapperWidth = document.querySelectorAll('.wrapper')[0].offsetWidth;
	sliderInner.style.width = currentWrapperWidth + 'px';
	if (clickCounter>=0) {
		sliderInner.style.marginLeft = - currentWrapperWidth*clickCounter + 'px';
	} else {
		sliderInner.style.marginLeft = - currentWrapperWidth*(sliderItems+clickCounter) + 'px';
	}	
	sliderInner.style.transition = 'none';
}

function browseRight () {
	var currentMargin = parseInt(sliderInner.style.marginLeft)||0;
	sliderInner.style.transition = 'margin-left 0.5s linear';	
	if(currentMargin != (sliderItems - 1)*-currentWrapperWidth){
		sliderInner.style.marginLeft = currentMargin - currentWrapperWidth + 'px';
	} else {
		sliderInner.style.marginLeft = '0px';
	}
}

function browseLeft () {
	var currentMargin = parseInt(sliderInner.style.marginLeft)||0;
	sliderInner.style.transition = 'margin-left 0.5s linear';	
	if(currentMargin !=0){
		sliderInner.style.marginLeft = currentMargin + currentWrapperWidth + 'px';
	} else {
		sliderInner.style.marginLeft = ((sliderItems - 1)* -currentWrapperWidth)+'px';
	}
}

function createRadioButtons (){
	var radioButtonContainer = document.createElement('div');
	radioButtonContainer.style.position = 'absolute';
	radioButtonContainer.style.width = '30%';
	radioButtonContainer.style.height = '8%';
	radioButtonContainer.style.bottom = '0';
	radioButtonContainer.style.left = '35%';
	radioButtonContainer.style.display = 'flex';
	radioButtonContainer.style.flexDirection = 'row';
	radioButtonContainer.style.justifyContent = 'space-around';
	radioButtonContainer.style.alignItems = 'center';
	for(var i = 0; i < sliderItems; i++){
		var radioButton = document.createElement('div');
		radioButton.style.backgroundColor = 'rgba(255,255,255,0.5)';
		radioButton.style.width = '1.6rem';
		radioButton.style.height = '1.6rem';
		radioButton.style.borderRadius = '50%';
		radioButton.style.border = '2px solid white';
		radioButton.classList.add("radio-button_"+i);
		radioButtonContainer.appendChild(radioButton);
	}	
	return radioButtonContainer;
}

var result = createRadioButtons ();
sliderInner.appendChild(result);






