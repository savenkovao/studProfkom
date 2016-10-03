"use strict";

//Dropdown menu (mobile)
var currentScreenWidth = document.documentElement.clientWidth;
var previousScreenWidth;
var menuItemExpand = document.querySelectorAll('.menu-item.expand');
var subMenu = document.querySelectorAll('.submenu');
var counter = [];

setSubmenuDisplay ();

function setSubmenuDisplay (){
	if(currentScreenWidth<768){
		for(var i = 0; i<menuItemExpand.length;i++){		
			subMenu[i].style.display = "none";
		}
	}	
}

enableDropMenu ();

function enableDropMenu (){
	if(currentScreenWidth<768){
		setOnClickEvent ();
	} else {
		removeOnClickEvent();
	}
}

function setOnClickEvent (){	
	for(var i = 0; i<menuItemExpand.length;i++){
		menuItemExpand[i].setAttribute("onclick", "expandBlock(" + i + ")");
		counter[i]=0;		
		if(previousScreenWidth>768){
			subMenu[i].style.display = "none";
		} 
	}
}

function removeOnClickEvent(){
	for(var i = 0; i<menuItemExpand.length;i++){
		menuItemExpand[i].removeAttribute("onclick");
		subMenu[i].removeAttribute("style");
	}
}

function expandBlock (i){
	counter[i]++;
	if (counter[i]%2 == 0){
		subMenu[i].style.display = "none";
	} else {
		subMenu[i].style.display = "block";
	}		
}

window.addEventListener("resize", resizeFunction);
	
function resizeFunction (){
	previousScreenWidth = currentScreenWidth;
	currentScreenWidth = document.documentElement.clientWidth;
	enableDropMenu ();
}
