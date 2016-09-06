"use strict";

//Photo-gallery. Hide/open part of content

var btnOpenMore = document.querySelectorAll('.btn_open_more-link')[0];
var galleryPhoto = document.querySelectorAll('.content-gallery-link');
var photoStep = 20;
var photosOnPage;

setOffPhotos();

function setOffPhotos(){
	photosOnPage = photoStep;
	for (var i = photosOnPage; i < galleryPhoto.length; i++) {
		galleryPhoto[i].style.display = 'none';
	}	
}

btnOpenMore.onclick = function(){
	photosOnPage+=photoStep;
	for (var i = 0; i < photosOnPage; i++) {
		galleryPhoto[i].style.display = 'block';
	}	

	for (var i = photosOnPage; i < galleryPhoto.length; i++) {
		galleryPhoto[i].style.display = 'none';
	}
}
