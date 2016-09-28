"use strict";

//Dropdown menu (mobile)
var currentScreenWidth = document.documentElement.clientWidth;
var dropMenuProfkom = document.querySelector('#dd-menu_profkom');
var dropMenuBlog = document.querySelector('#dd-menu_blog');
var dropMenuProfkomBlock = document.querySelector('#dd-menu_profkom-block');
var dropMenuBlogBlock = document.querySelector('#dd-menu_blog-block');
var counterMenuProfkomClick = 0;
var counterMenuBlogClick = 0;

dropMenuProfkomBlock.style.display = 'none';
dropMenuBlogBlock.style.display = 'none';

changeWidthDropMenu ();
	
window.onresize=function(){
	if(currentScreenWidth>768){
		dropMenuProfkomBlock.style.display = "none";
		dropMenuBlogBlock.style.display = "none";
		counterMenuProfkomClick = 0;
		counterMenuBlogClick = 0;
		dropMenuProfkom.style.backgroundColor= 'rgb(255, 255, 255)';
		dropMenuBlog.style.backgroundColor= 'rgb(255, 255, 255)';
	}
	currentScreenWidth = document.documentElement.clientWidth;
	changeWidthDropMenu ();
}

function changeWidthDropMenu (){
	if (currentScreenWidth<=768){		
		dropMenuProfkom.onclick = function(){
			counterMenuProfkomClick++;
			switchDropMenu (counterMenuProfkomClick, dropMenuProfkomBlock, dropMenuProfkom);
			console.log(counterMenuProfkomClick);
		}
		dropMenuBlog.onclick = function(){
			counterMenuBlogClick++;
			switchDropMenu (counterMenuBlogClick, dropMenuBlogBlock, dropMenuBlog);
		}
	} else if(currentScreenWidth>768) {
		dropMenuProfkom.onclick = function(){}	
		dropMenuBlog.onclick = function(){}	

		dropMenuProfkom.addEventListener("mouseover", dropMenuMouseOverProfkom);	
		dropMenuProfkom.addEventListener("mouseout",dropMenuMouseOutProfkom);
		dropMenuBlog.addEventListener("mouseover", dropMenuMouseOverBlog);	
		dropMenuBlog.addEventListener("mouseout",dropMenuMouseOutBlog);		
	} 
}

function switchDropMenu (counter, dropMenuBlock,dropMenu){
	if (counter%2 != 0) {
		dropMenuBlock.style.display = 'block';
		dropMenuBlock.style.position = 'relative';
		dropMenu.style.backgroundColor= 'rgba(166, 207, 210, 0.28)';
	}  else {
		dropMenuBlock.style.display = 'none';
		dropMenu.style.backgroundColor= 'rgb(255, 255, 255)';
	}
}


function dropMenuMouseOverProfkom(){
	if (currentScreenWidth>768) {
		dropMenuProfkomBlock.style.display = "block";
		dropMenuProfkomBlock.style.position = "absolute";
	} 
}

function dropMenuMouseOutProfkom(){
	if (currentScreenWidth>768) {	
		dropMenuProfkomBlock.style.display = "none";
	}
}

function dropMenuMouseOverBlog(){
	if (currentScreenWidth>768) {
		dropMenuBlogBlock.style.display = "block";
		dropMenuBlogBlock.style.position = "absolute";
	} 
}

function dropMenuMouseOutBlog(){
	if (currentScreenWidth>768) {
		dropMenuBlogBlock.style.display = "none";
	} 
}
