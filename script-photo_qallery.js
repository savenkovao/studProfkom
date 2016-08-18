"use strict";

//Photo-gallery. Hide/open part of content

var btnOpenMore = document.querySelectorAll('.btn_open_more')[0];
var galleryHidden =  document.querySelectorAll('.gallery_hidden')[0];
var galleryPhoto = document.querySelectorAll('.content-image');
var currentScreenWidth = document.documentElement.clientWidth;
var photoWidth = galleryPhoto[0].offsetWidth;
var quantityPhotosInRow = Math.floor(currentScreenWidth/photoWidth);
var quantityRows = 5;
var quantityPhotosInBlock = quantityPhotosInRow*quantityRows;
var galleryPhotoStep = galleryPhoto[0].offsetHeight*quantityRows;
var clickCounter = 1;

galleryHidden.style.height = galleryPhotoStep +'px';
galleryHidden.style.overflow = 'hidden';


btnOpenMore.onclick = function(){
	abr();
}
	
function abr(){
	clickCounter++;
	console.log(clickCounter);
	if (currentScreenWidth<=480){
		if (getGalleryHeigth()>= (Math.ceil(((galleryPhoto.length+1)*galleryPhotoStep)/quantityRows))){
			galleryHidden.style.height = (Math.ceil((((galleryPhoto.length+1)*galleryPhotoStep)/quantityRows)/100)*100) +'px';
		}
	} else {
		if (getGalleryHeigth()>= (Math.ceil(((galleryPhoto.length+1)*galleryPhotoStep)/quantityPhotosInBlock))){
			galleryHidden.style.height = (Math.ceil((((galleryPhoto.length+1)*galleryPhotoStep)/quantityPhotosInBlock)/100)*100) +'px';
			return;
		}
	}
	
}

function getGalleryHeigth (){
	var galleryHiddenHeight = parseInt(galleryHidden.style.height)||galleryPhotoStep;
	var heightGrowth = galleryHiddenHeight+galleryPhotoStep;
	galleryHidden.style.height = heightGrowth + 'px';
	return heightGrowth;
}


window.onresize=function(){
	if (currentScreenWidth<=480){
		galleryPhotoStep = galleryPhoto[0].offsetHeight*quantityPhotosInBlock;
		galleryHidden.style.height = galleryPhotoStep*clickCounter +'px';
		console.log('!');
	} else {
		galleryPhotoStep = galleryPhoto[0].offsetHeight*quantityRows;
		galleryHidden.style.height = galleryPhotoStep*clickCounter +'px';
	}
};



