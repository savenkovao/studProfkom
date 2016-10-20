"use strict";

//Dropdown menu (mobile)
var currentScreenWidth = document.documentElement.clientWidth;
var mobileMenu = document.querySelectorAll('.mobile-menu')[0];
var headerMenu = document.querySelectorAll('.header-menu')[0];
var headerLogo = document.querySelectorAll('.header-logo')[0];
var logoBlock = document.querySelectorAll('.logo-block')[0];
var mainCounter=0;

var burgerMenuIcon = "url(images/design/burger-menu-icon.png)";
var burgerMenuWhiteIcon = "url(images/design/burger-menu-white.png)";
var logoIcon = "url(images/design/ogasa.png)";
var logoWhiteIcon = "url(images/design/ogasa-white.png)";
var colorTransparent = 'transparent';
var headerBackgroundColor = "rgba(255,255,255,0.9)";
var mobileMenuBackgroundColor = 'rgba(0,0,0,0.9)';

// enableDropMenu ();

function enableDropMenu (){
	if(currentScreenWidth<768){
		headerMenu.style.display = "none";
		headerLogo.style.backgroundColor= headerBackgroundColor;
		mobileMenu.style.backgroundImage = burgerMenuIcon;
		mobileMenu.style.backgroundColor= colorTransparent;
		logoBlock.style.backgroundImage = logoIcon;
		
	} else {
		headerMenu.style.display = "flex";
	}
}

mobileMenu.onclick = function (){
	mainCounter++;
	if (mainCounter%2 == 0){
		headerMenu.style.display = "none";
		headerLogo.style.zIndex = "11";
		headerLogo.style.backgroundColor= headerBackgroundColor;
		mobileMenu.style.backgroundImage = burgerMenuIcon;
		mobileMenu.style.backgroundColor= colorTransparent;
		logoBlock.style.backgroundImage = logoIcon;

	} else {
		headerMenu.style.display = "block";
		headerLogo.style.zIndex = "13";		
		headerLogo.style.backgroundColor= colorTransparent;
		logoBlock.style.backgroundImage = logoWhiteIcon;
		mobileMenu.style.backgroundImage = burgerMenuWhiteIcon;
		mobileMenu.style.backgroundColor= mobileMenuBackgroundColor;
		
	}
}

window.addEventListener("resize", resizeFunction);
	
function resizeFunction (){
	currentScreenWidth = document.documentElement.clientWidth;
	mainCounter=0;
	enableDropMenu ();
}

