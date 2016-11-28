"use strict";

//Dropdown menu (mobile)
var currentScreenWidth = document.documentElement.clientWidth;
var currentScreenHeight = document.documentElement.clientHeight;
var previousScreenWidth;
var mobileMenu = document.querySelectorAll('.mobile-menu')[0];
var headerMenuMobile = document.querySelectorAll('.header-menu-mobile')[0];
var headerLogo = document.querySelectorAll('.header-logo')[0];
var logoBlock = document.querySelectorAll('.logo-block')[0];
var mainCounter = 0;
var burgerMenuWhiteIcon = "mobile-menu-white_icon";
var logoWhiteIcon = "logo-block-white_icon";
var colorTransparent = 'transparent';
var headerBackgroundColor = "rgba(255,255,255,0.9)";
var mobileMenuBackground;
var networksLink = document.querySelectorAll('.networks-link')[0];

setFooterText ();

function setFooterText () {
	if(currentScreenWidth > 768){
		networksLink.innerHTML = "© 2000 - 2016 \"Профком студентов ОГАСА\"";
	} else {
		networksLink.innerHTML = "© 2000 - 2016 \"ППОС ОГАСА\"";
	}
	
}


createBlockMenuBackground ();

function createBlockMenuBackground (){	
	mobileMenuBackground = document.createElement('div');
	mobileMenuBackground.classList.add("mobile-menu-background");
	headerLogo.appendChild(mobileMenuBackground);
	if(currentScreenWidth<=768){
		headerMenuMobile.style.display = "none";	
	}
}

setCurrentScreenWidth();

function setCurrentScreenWidth(){
	previousScreenWidth = currentScreenWidth;
}

setNewClasses ();

function setNewClasses (){	
	if(currentScreenWidth<=768){
		mobileMenuBackground.style.left = "-80%";
		headerMenuMobile.style.left = "-80%";		
		mobileMenuBackground.style.position = "fixed";		
		headerMenuMobile.style.position = "fixed";		
		headerMenuMobile.style.zIndex = 15;
		headerMenuMobile.style.transition = "left 0.15s linear";
		mobileMenuBackground.style.transition = "left 0.15s linear";
		mobileMenu.style.display = "block";		
	}	
}

mobileMenu.onclick = function (){
	mainCounter++;
	if (mainCounter%2 == 0){		
		hideMenu();				
	} else {	
		showMenu();		
	}
}

window.addEventListener("resize", resizeFunction);
	
function resizeFunction (){
	currentScreenWidth = document.documentElement.clientWidth;	
	currentScreenHeight = document.documentElement.clientHeight;		
	mainCounter=0;
	headerMenuMobile.style.display = "none";
	setFooterText ();

	if(previousScreenWidth<=768){
		if (currentScreenWidth<=768){
			enableDropMenu ();
		} else {
			enableDesktopMenu ();
		}
	} else{
		if (currentScreenWidth<=768){			
			setNewClasses ();			
		} else{
			headerMenuMobile.style.display = "flex";
		}
	}
	setCurrentScreenWidth();			
}

function enableDropMenu (){
	hideMenu();	
}

function enableDesktopMenu (){
	headerMenuMobile.style.display = "flex";
	headerMenuMobile.style.position = "relative";
	headerMenuMobile.style.left = "0";
	mobileMenuBackground.style.left = "0";
	headerMenuMobile.style.backgroundColor = colorTransparent;
	headerMenuMobile.style.transition = "none";
}

function showMenu(){
	mobileMenuBackground.style.display = "block";
	headerMenuMobile.style.display = "block";
	headerLogo.style.zIndex = "13";
	headerMenuMobile.style.left = "0";
	mobileMenuBackground.style.left = "0";
	logoBlock.classList.add(logoWhiteIcon);
	mobileMenu.classList.add(burgerMenuWhiteIcon);
	headerLogo.style.backgroundColor = colorTransparent;
}

function hideMenu(){
	headerMenuMobile.style.display = "none";
	headerLogo.style.zIndex = "11";
	headerMenuMobile.style.left = "-80%";
	mobileMenuBackground.style.left = "-80%";
	mobileMenu.classList.remove(burgerMenuWhiteIcon);		
	logoBlock.classList.remove(logoWhiteIcon);
	headerLogo.style.backgroundColor = headerBackgroundColor;
	mobileMenu.style.backgroundColor = colorTransparent;
	
}



