"use strict";

//Photo-gallery. Hide/open part of content

var btnOpenMore = document.querySelectorAll('.btn_open_more')[0];
var galleryHidden =  document.querySelectorAll('.gallery_hidden')[0];
var galleryPhoto = document.querySelectorAll('.content-gallery-link');

var currentWrapperWidth;
var currentWrapperHeight;
var photoWidth;
var quantityPhotosInRow;
var quantityRows;
var quantityPhotosInBlock;
var galleryPhotoStep;
var clickCounter = 1;

chageVar();

function chageVar(){
	currentWrapperWidth = document.querySelectorAll('.wrapper')[0].offsetWidth;
	currentWrapperHeight = document.querySelectorAll('.wrapper')[0].offsetHeight;
	photoWidth = galleryPhoto[0].offsetWidth;
	quantityPhotosInRow = Math.floor(currentWrapperWidth/photoWidth);
	quantityRows = 20/quantityPhotosInRow;
	quantityPhotosInBlock = quantityPhotosInRow*quantityRows;
	galleryPhotoStep = galleryPhoto[0].offsetHeight*quantityRows;
	console.log(currentWrapperWidth + ' fg ' + quantityPhotosInRow);
	console.log(currentWrapperHeight +' asdfdsf ');
}


if(currentWrapperWidth<480){
	galleryHidden.style.height = galleryPhoto[0].offsetHeight*quantityPhotosInBlock +'px';
} else {
	galleryHidden.style.height = galleryPhotoStep +'px';
}
galleryHidden.style.overflow = 'hidden';


btnOpenMore.onclick = function(){
	abr();
}
	
function abr(){
	clickCounter++;
	console.log(clickCounter);
	if (getGalleryHeigth()>= (Math.ceil(((galleryPhoto.length+1)*galleryPhotoStep)/quantityPhotosInBlock))){
		galleryHidden.style.height = (Math.ceil((((galleryPhoto.length+1)*galleryPhotoStep)/quantityPhotosInBlock)/100)*100) +'px';
		return;
	}
}

function getGalleryHeigth (){
	var galleryHiddenHeight = parseInt(galleryHidden.style.height)||galleryPhotoStep;
	var heightGrowth = galleryHiddenHeight+galleryPhotoStep;
	galleryHidden.style.height = heightGrowth + 'px';
	return heightGrowth;
}


window.addEventListener("resize", myFunction);

function myFunction (){
	chageVar();
	if (currentWrapperWidth<=480){
		galleryHidden.style.height = galleryPhotoStep*clickCounter +'px';
		
	} else {
		galleryHidden.style.height = galleryPhotoStep*clickCounter +'px';
		console.log(galleryPhotoStep+'!__++_!');
		console.log(galleryHidden.style.height+'!___!');
	}
}



