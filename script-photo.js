"use strict";

var btnOpenMore = document.querySelectorAll('.btn_open_more')[0];
var galleryHidden =  document.querySelectorAll('.gallery_hidden')[0];
var galleryPhoto = document.querySelectorAll('.content-image');
var currentScreenWidth = document.documentElement.clientWidth;
var galleryPhotoStep = galleryPhoto[0].offsetHeight*5;
galleryHidden.style.height = galleryPhotoStep +'px';
galleryHidden.style.overflow = 'hidden';
console.log(galleryPhotoStep);
var sum = 1;

btnOpenMore.onclick = function(){
	abr();
}
	
function abr(){
	sum++;
	console.log(sum);
	if (currentScreenWidth<=480){
		if (getGalleryHeigth()>= (Math.ceil(((galleryPhoto.length+1)*galleryPhotoStep)/5))){
			galleryHidden.style.height = (Math.ceil((((galleryPhoto.length+1)*galleryPhotoStep)/5)/100)*100) +'px';
		}
	} else {
		if (getGalleryHeigth()>= (Math.ceil(((galleryPhoto.length+1)*galleryPhotoStep)/20))){
			galleryHidden.style.height = (Math.ceil((((galleryPhoto.length+1)*galleryPhotoStep)/20)/100)*100) +'px';
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
		galleryPhotoStep = galleryPhoto[0].offsetHeight*20;
		galleryHidden.style.height = galleryPhotoStep*sum +'px';
		console.log('!')
	} else {
		galleryPhotoStep = galleryPhoto[0].offsetHeight*5;
		galleryHidden.style.height = galleryPhotoStep*sum +'px';
	}
};