"use strict";
// alert('Hello!');
/*
var galleryPhoto = document.querySelectorAll('.content-image')[0];

galleryPhoto.onclick = function(){
	var newDiv = document.createElement('div');
	newDiv.style.width = '600px';
	newDiv.style.height = '600px';
	newDiv.style.backgroundImage = 'url(images/ogasaVL/ogasaVL_(1).jpg;';
	newDiv.style.position = 'fixed';
	document.body.appendChild(newDiv);
}
*/

var btnOpenMore = document.querySelectorAll('.btn_open_more')[0];
var galleryHidden =  document.querySelectorAll('.gallery_hidden')[0];
var galleryPhoto = document.querySelectorAll('.content-image');

btnOpenMore.onclick = function(){
	var galleryHiddenHeight = parseInt(galleryHidden.style.height)||100;
	var heightGrowth = galleryHiddenHeight+100;
	galleryHidden.style.height = heightGrowth + 'em';
	
	if (heightGrowth>=(Math.ceil(((galleryPhoto.length+1)*100)/15))){
		galleryHidden.style.height = (Math.ceil((((galleryPhoto.length+1)*100)/15)/100)*100) +'em';
		console.log(galleryHidden.style.height);
	}
	console.log(galleryHidden.style.height);
}