"use strict";

//Dropdown menu (mobile)
var currentScreenWidth = document.documentElement.clientWidth;
var mobileMenu = document.querySelectorAll('.mobile-menu')[0];
var headerMenu = document.querySelectorAll('.header-menu')[0];
var headerLogo = document.querySelectorAll('.header-logo')[0];
var logoBlock = document.querySelectorAll('.logo-block')[0];
var mainCounter=0;

// enableDropMenu ();

function enableDropMenu (){
	if(currentScreenWidth<768){
		headerMenu.style.display = "none";
		mobileMenu.style.backgroundImage = "url(images/design/burger-menu-icon.png)";
		logoBlock.style.backgroundImage = "url(images/design/ogasa.png)";
	} else {
		headerMenu.style.display = "flex";
	}
}

mobileMenu.onclick = function (){
	mainCounter++;
	if (mainCounter%2 == 0){
		headerMenu.style.display = "none";
		headerLogo.style.zIndex = "11";
		headerLogo.style.backgroundColor= "rgba(255,255,255,0.9)";
		mobileMenu.style.backgroundImage = "url(images/design/burger-menu-icon.png)";
		logoBlock.style.backgroundImage = "url(images/design/ogasa.png)";

	} else {
		headerMenu.style.display = "block";
		headerLogo.style.zIndex = "13";
		headerLogo.style.backgroundColor= "transparent";
		mobileMenu.style.backgroundImage = "url(images/design/burger-menu-white.png)";
		logoBlock.style.backgroundImage = "url(images/design/ogasa-white.png)";
	}
}

window.addEventListener("resize", resizeFunction);
	
function resizeFunction (){
	currentScreenWidth = document.documentElement.clientWidth;
	mainCounter=0;
	enableDropMenu ();
}

