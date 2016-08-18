"use strict";

//Dropdown menu (mobile)
var currentScreenWidth = document.documentElement.clientWidth;
var DropMenuProfkom = document.querySelector('#dd-menu_profkom');
var DropMenuBlog = document.querySelector('#dd-menu_blog');
var DropMenuProfkomBlock = document.querySelector('#dd-menu_profkom-block');
var DropMenuBlogBlock = document.querySelector('#dd-menu_blog-block');


var counterMenuProfkomClick = 0;
var counterMenuBlogClick = 0;

if (currentScreenWidth<=769){
	DropMenuProfkom.onclick = function(){
		counterMenuProfkomClick++;
		switchDropMenu (counterMenuProfkomClick, DropMenuProfkomBlock);
	}
	DropMenuBlog.onclick = function(){
		counterMenuBlogClick++;
		switchDropMenu (counterMenuBlogClick, DropMenuBlogBlock);
	}
}

function switchDropMenu (counter, dropMenu){
	if (counter%2!=0) {
		dropMenu.style.display = 'block';
		dropMenu.style.position = 'relative';
	}  else {
		dropMenu.style.display = 'none';
	}
}
	
