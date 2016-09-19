"use strict";

var photoLink = document.querySelectorAll('.content-gallery-link');
var photoInLink = document.querySelectorAll('.content-image');
var body = document.getElementsByTagName('body')[0];
var photoBlock;
var createPhotoBlock;
var currentPhoto;
var imageContainer;
var currentWrapperWidth = window.innerWidth;
var currentWrapperHeight = window.innerHeight;
var currentPhotoWidth;
var len;
var btnOpenMore = document.querySelectorAll('.btn_open_more-link')[0];
var photoStep = 20;
var photosOnPage;

setOffPhotos();
	
function setOffPhotos(){
	if(photoLink.length>=photoStep){
		photosOnPage = photoStep;
		for (var i = photosOnPage; i < photoLink.length; i++) {
			photoLink[i].style.display = 'none';
		} 
	} else {
		photosOnPage = photoLink.length;
	}
	openPhoto ();			
}

btnOpenMore.onclick = function(){		
	if(photosOnPage<photoLink.length){
		photosOnPage+=photoStep;
	}else{
		photosOnPage=photoLink.length;
	}
	
	for (var i = 0; i < photosOnPage; i++) {
		photoLink[i].style.display = 'block';
	}	

	for (var i = photosOnPage; i < photoLink.length; i++) {
		photoLink[i].style.display = 'none';
	}
	openPhoto ();
}


function openPhoto () {

	if (currentWrapperWidth > 768){
		len = photoLink.length;
		var i = 0;
	    for (;photoLink[i].setAttribute("onclick", "createPhotoBlock(" + i + ")"), ++i < len;);

	    createPhotoBlock = function (e) {	    	
			body.style.position = 'relative';
			photoBlock = document.createElement('div');
			photoBlock.classList.add("photoBlock");

			imageContainer = document.createElement('div');			
			imageContainer.classList.add("imageContainer");
		
			var btnRight = document.createElement('div');
			btnRight.classList.add("btn_browse", "btnRight");

			var arrowRight = document.createElement('div');
			arrowRight.classList.add("btn_arrow", "arrowRight");
			btnRight.appendChild(arrowRight);

			var btnLeft = document.createElement('div');			
			btnLeft.classList.add("btn_browse", "btnLeft");
			
			var arrowLeft = document.createElement('div');			
			arrowLeft.classList.add("btn_arrow", "arrowLeft");
			btnLeft.appendChild(arrowLeft);

			var btnClose = document.createElement('div');
			btnClose.classList.add("btnClose");


			var closePic = document.createElement('div');		
			closePic.classList.add("closePic");
			btnClose.appendChild(closePic);

			var photoNumber = document.createElement('div');
			photoNumber.classList.add("photoNumber");
			photoNumber.innerHTML = e+1 + ' / ' + photosOnPage;

			addImage ();

			function addImage (){
				currentPhoto = photoInLink[e].cloneNode(true);		
				getImageSize ();
				currentPhoto.classList.add("currentPhoto");
				imageContainer.appendChild(currentPhoto);
			}

			function getImageSize (){
				if((currentWrapperWidth/currentWrapperHeight)<(photoInLink[e].offsetWidth/photoInLink[e].offsetHeight)){
					currentPhoto.style.width = '100%';
					currentPhoto.style.height = 'auto';
					currentPhotoWidth = currentWrapperWidth;
				} else {
					currentPhoto.style.width = 'auto';
					currentPhoto.style.height = '97%';
					currentPhotoWidth = (currentWrapperHeight*0.97) * photoInLink[e].offsetWidth/photoInLink[e].offsetHeight;
				}	
			}
			
			if (len>1){
				imageContainer.appendChild(btnRight);
				imageContainer.appendChild(btnLeft);
			}
			
			imageContainer.appendChild(btnClose);
			imageContainer.appendChild(photoNumber);
			photoBlock.appendChild(imageContainer);

			btnRight.onclick = function(event){
				event.stopPropagation();
				currentPhoto.remove();				
				e++;
				if (e>photosOnPage-1){
					e = 0;
				}
				photoNumber.innerHTML = e+1 + ' / ' + photosOnPage;
				addImage ();
			}

			btnLeft.onclick = function(event){
				event.stopPropagation();
				currentPhoto.remove();				
				e--;
				if (e<0){
					e = photosOnPage-1;
				}
				photoNumber.innerHTML = e+1 + ' / ' + photosOnPage;
				addImage ();	
			}

			btnLeft.addEventListener("mouseover", changeBackgroundBtnLeft);	
			btnLeft.addEventListener("mouseout",deleteBackGround);
			btnRight.addEventListener("mouseover", changeBackgroundBtnRight);	
			btnRight.addEventListener("mouseout",deleteBackGround);
			btnClose.addEventListener("mouseover", changeBackgroundBtnClose);	
			btnClose.addEventListener("mouseout",deleteBackGround);

			function changeBackgroundBtnLeft (){			
				arrowLeft.style.opacity = '1';
			}
			function changeBackgroundBtnRight (){
				arrowRight.style.opacity = '1';
			}

			function changeBackgroundBtnClose () {
				closePic.style.opacity = '0.8';
			}

			function deleteBackGround (){
				arrowRight.style.opacity = '0.4';
				arrowLeft.style.opacity = '0.4';
				closePic.style.opacity = '0.3';
			}

			body.appendChild(photoBlock);
			
			btnClose.onclick = function (){
				photoBlock.remove();
			}
	    };	
	}

	window.addEventListener("resize", resizeFunction);
	
	function resizeFunction (){
		currentWrapperWidth = window.innerWidth;
		currentWrapperHeight = window.innerHeight;
		openPhoto ();
		if (currentWrapperWidth < 768) {
			len = photoLink.length;
			var i = 0;
			for (;photoLink[i].removeAttribute("onclick"), ++i < len;);
		}
	};
};









	
