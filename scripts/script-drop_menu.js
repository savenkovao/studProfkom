"use strict";

//Dropdown menu (mobile)
var currentScreenWidth = document.documentElement.clientWidth;
var previousScreenWidth;
var mobileMenu = document.querySelectorAll('.mobile-menu')[0];
var headerMenu = document.querySelectorAll('.header-menu')[0];
var headerLogo = document.querySelectorAll('.header-logo')[0];
var logoBlock = document.querySelectorAll('.logo-block')[0];
var submenu = document.querySelectorAll('.submenu');
var menuItem = document.querySelectorAll('.menu-item');
var mainCounter=0;
var burgerMenuWhiteIcon = "mobile-menu-white_icon";
var logoWhiteIcon = "logo-block-white_icon";
var colorTransparent = 'transparent';
var headerBackgroundColor = "rgba(255,255,255,0.9)";
var mobileMenuBackgroundColor = 'rgba(0,0,0,0.95)';

setNewClasses ();

function setNewClasses (){
	previousScreenWidth = currentScreenWidth;
	if(currentScreenWidth<768){
		mobileMenu.style.display = "block";
		headerMenu.className ="header-menu-mobile";
		headerLogo.className ="header-logo-mobile";
		for(var i = 0; i< submenu.length; i++){
			submenu[i].className ="submenu-mobile";
		}
		for(var i = 0; i< menuItem.length; i++){
			menuItem[i].classList.add("menu-item-mobile");
			menuItem[i].classList.remove("menu-item");
		}
	}	
}

function setOldClasses (){
	previousScreenWidth = currentScreenWidth;
	headerMenu.className ="header-menu";
	headerLogo.className ="col-xs-12 col-sm-2 col-md-2 header-logo";
	for(var i = 0; i< submenu.length; i++){
		submenu[i].className ="submenu";
	}
	for(var i = 0; i< menuItem.length; i++){
		menuItem[i].classList.add("menu-item");
		menuItem[i].classList.remove("menu-item-mobile");
	}
}

mobileMenu.onclick = function (){
	mainCounter++;
	if (mainCounter%2 == 0){
		headerMenu.style.left = "-80%";
		headerLogo.style.zIndex = "11";
		mobileMenu.classList.remove(burgerMenuWhiteIcon);
		logoBlock.classList.remove(logoWhiteIcon);
		headerLogo.style.backgroundColor = headerBackgroundColor;
		mobileMenu.style.backgroundColor = colorTransparent;		
	} else {
		headerMenu.style.left = "0";
		headerLogo.style.zIndex = "13";	
		logoBlock.classList.add(logoWhiteIcon);
		mobileMenu.classList.add(burgerMenuWhiteIcon);
		mobileMenu.style.backgroundColor = mobileMenuBackgroundColor;
		headerLogo.style.backgroundColor = colorTransparent;		
	}
}

window.addEventListener("resize", resizeFunction);
	
function resizeFunction (){
	currentScreenWidth = document.documentElement.clientWidth;
	mainCounter=0;

	if(previousScreenWidth<768){
		if (currentScreenWidth<768){
			enableDropMenu ();
		} else {
			setOldClasses ();
		}
	} else{
		if (currentScreenWidth<768){
			setNewClasses ();
		}
	}			
}

function enableDropMenu (){
	headerMenu.style.left = "-80%";
	headerLogo.style.backgroundColor = headerBackgroundColor;
	mobileMenu.style.backgroundColor = colorTransparent;
	mobileMenu.classList.remove(burgerMenuWhiteIcon);
	logoBlock.classList.remove(logoWhiteIcon);
}


