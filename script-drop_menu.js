"use strict";

//Dropdown menu (mobile)
var currentScreenWidth = document.documentElement.clientWidth;
var dropMenuProfkom = document.querySelector('#dd-menu_profkom');
var dropMenuBlog = document.querySelector('#dd-menu_blog');
var dropMenuProfkomBlock = document.querySelector('#dd-menu_profkom-block');
var dropMenuBlogBlock = document.querySelector('#dd-menu_blog-block');
var counterMenuProfkomClick = 0;
var counterMenuBlogClick = 0;

changeWidthDropMenu ();
	
window.onresize=function(){
	if(currentScreenWidth>768){
		dropMenuProfkomBlock.style.display = "none";
		dropMenuBlogBlock.style.display = "none";
		counterMenuProfkomClick = 0;
		counterMenuBlogClick = 0;
	}
	currentScreenWidth = document.documentElement.clientWidth;
	changeWidthDropMenu ();
}

function changeWidthDropMenu (){
	if (currentScreenWidth<=768){
		dropMenuProfkom.onclick = function(){
			counterMenuProfkomClick++;
			switchDropMenu (counterMenuProfkomClick, dropMenuProfkomBlock);
			console.log(counterMenuProfkomClick);
		}
		dropMenuBlog.onclick = function(){
			counterMenuBlogClick++;
			switchDropMenu (counterMenuBlogClick, dropMenuBlogBlock);
		}
	} else if(currentScreenWidth>768) {
		dropMenuProfkom.onclick = function(){}	
		dropMenuBlog.onclick = function(){}	

		dropMenuProfkom.addEventListener("mouseover", dropMenuMouseOver);	
		dropMenuProfkom.addEventListener("mouseout",dropMenuMouseOut);
		dropMenuBlog.addEventListener("mouseover", dropMenuMouseOver1);	
		dropMenuBlog.addEventListener("mouseout",dropMenuMouseOut1);		
	} 
}

function switchDropMenu (counter, dropMenu){
	if (counter%2 != 0) {
		dropMenu.style.display = 'block';
		dropMenu.style.position = 'relative';
	}  else {
		dropMenu.style.display = 'none';
	}
}


function dropMenuMouseOver(){
	if (currentScreenWidth>768) {
		dropMenuProfkomBlock.style.display = "block";
		dropMenuProfkomBlock.style.position = "absolute";
	} 
}

function dropMenuMouseOut(){
	if (currentScreenWidth>768) {	
		dropMenuProfkomBlock.style.display = "none";
	}
}

function dropMenuMouseOver1(){
	if (currentScreenWidth>768) {
		dropMenuBlogBlock.style.display = "block";
		dropMenuBlogBlock.style.position = "absolute";
	} 
}

function dropMenuMouseOut1(){
	if (currentScreenWidth>768) {
		dropMenuBlogBlock.style.display = "none";
	} 
}
