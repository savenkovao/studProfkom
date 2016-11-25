"use strict";

var photoBlock;
var createPhotoBlock;
var currentPhoto;
var imageOpenContainer;
var currentPhotoWidth;
var photosOnPagePrevious;
var imageСontainer = [];
var image_containerInner = [];
var imageСontainerbackground = [];
var imageMob = [];
var photoStep = 20;
var photosOnPage = 0;
var currentWrapperWidth = window.innerWidth;
var currentWrapperHeight = window.innerHeight;
var body = document.getElementsByTagName('body')[0];
var btnOpenMoreLink;
var btnOpenMore;
var sourceInformation = document.querySelectorAll('.source-information')[0];
var imageQuantity = +sourceInformation.getAttribute('name');
var source = sourceInformation.getAttribute('src');
var contentGallery = document.querySelectorAll('.content-gallery')[0];
var contentHeader =  document.querySelectorAll('.content-description-header')[0].innerHTML;
var btnMoreContainer =  document.querySelectorAll('.btn_more_container')[0];


createButtonOpenMore();
uploadImages();


function uploadImages(){
	if(imageQuantity<=photoStep){
		photosOnPagePrevious = photosOnPage;
		photosOnPage = imageQuantity;
		for(var i = photosOnPagePrevious+1; i<=photosOnPage;i++){
			addImage (i);
		}
	} else {
		btnOpenMoreLink.style.display = "block";	
		photosOnPagePrevious = photosOnPage;
		photosOnPage += photoStep;
		if(photosOnPage>=imageQuantity){
			photosOnPage = imageQuantity;
			btnOpenMore.style.display = "none";
		}
		for(var i = photosOnPagePrevious+1; i<=photosOnPage;i++){
			addImage (i)
		}
	}
	openPhoto ();
}

function createButtonOpenMore(){
	btnOpenMoreLink = document.createElement('a');
	btnOpenMoreLink.className = "btn_open_more-link";
	btnOpenMore = document.createElement('div');
	btnOpenMore.className = "btn_open_more";
	btnOpenMore.innerHTML = "Открыть больше фотографий";
	btnOpenMoreLink.appendChild(btnOpenMore);
	btnMoreContainer.appendChild(btnOpenMoreLink);
}

function addImage (num){
	imageСontainer[num] = document.createElement('div');
	imageСontainer[num].className ="content-gallery-block image_container short";
	imageСontainer[num].style.position = "relative";

	imageСontainerbackground[num] = document.createElement('div');
	imageСontainerbackground[num].style.height = "100%";
	imageСontainerbackground[num].style.width = "100%";
	imageСontainerbackground[num].style.position = "absolute";
	imageСontainerbackground[num].style.backgroundImage ="url("+source+num+".jpg)";
	imageСontainerbackground[num].style.backgroundPosition = "center";
	imageСontainerbackground[num].style.backgroundSize = "cover";
	imageСontainerbackground[num].style.backgroundRepeat = "no-repeat";
	imageСontainerbackground[num].className ="content-image image_container_inner desktop_img";

	imageMob[num] = document.createElement('img');	
	imageMob[num].setAttribute("src", source+num+".jpg");
	imageMob[num].className= "content-image mobile_img";


	imageСontainer[num].appendChild(imageMob[num]);
	imageСontainer[num].appendChild(imageСontainerbackground[num]);
	contentGallery.appendChild(imageСontainer[num]);	
}

btnOpenMoreLink.onclick = function(){
	uploadImages();
	openPhoto ();
}

function openPhoto () {

	if (currentWrapperWidth > 768){
	    for(var i = photosOnPagePrevious+1;i<=photosOnPage;i++){
	    	imageСontainer[i].setAttribute("onclick", "createPhotoBlock(" + i + ")");
	    }
	    createPhotoBlock = function (e) {	    	
			body.style.position = 'relative';
			photoBlock = document.createElement('div');
			photoBlock.classList.add("photoBlock");

			imageOpenContainer = document.createElement('div');			
			imageOpenContainer.classList.add("imageContainer");
		
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
			photoNumber.innerHTML = e + ' / ' + photosOnPage;

			addImage (e);

			function addImage (e){
				currentPhoto = document.createElement('img');	
				getImageSize ();
				currentPhoto.setAttribute("src", source + e + ".jpg");
				currentPhoto.setAttribute("alt", contentHeader+ ' - фото_' + e);				
				currentPhoto.classList.add("currentPhoto");
				imageOpenContainer.appendChild(currentPhoto);
			}

			function getImageSize (){
				var img = new Image();
				img.src = source + e + ".jpg";

				// console.log(img.src);
				// console.log(img.width);
				if((currentWrapperWidth/currentWrapperHeight)<(img.width/img.height)){					
					currentPhoto.classList.add("wide-image");
					currentPhotoWidth = currentWrapperWidth;
				} else {
					currentPhoto.classList.add("extended-image");
					currentPhotoWidth = (currentWrapperHeight*0.97) * (img.width/img.height);
				}	
			}
			
			if (imageQuantity>1){
				imageOpenContainer.appendChild(btnRight);
				imageOpenContainer.appendChild(btnLeft);
			}
			
			imageOpenContainer.appendChild(btnClose);
			imageOpenContainer.appendChild(photoNumber);
			photoBlock.appendChild(imageOpenContainer);

			btnRight.onclick = function(event){
				event.stopPropagation();
				currentPhoto.remove();				
				e++;
				if (e>photosOnPage){
					e = 1;
				}
				photoNumber.innerHTML = e + ' / ' + photosOnPage;
				addImage (e);
			}

			btnLeft.onclick = function(event){
				event.stopPropagation();
				currentPhoto.remove();				
				e--;
				if (e<1){
					e = photosOnPage;
				}
				photoNumber.innerHTML = e + ' / ' + photosOnPage;
				addImage (e);	
			}

			body.appendChild(photoBlock);
			
			btnClose.onclick = function (){
				photoBlock.remove();
			}

			photoBlock.onclick = function (){
				currentPhoto.style.zIndex = "-1";
			}
			photoBlock.oncontextmenu = function (){
				currentPhoto.style.zIndex = "1";
			}
	    };	
	}
};

window.addEventListener("resize", resizeFunction);
	
function resizeFunction (){
	currentWrapperWidth = window.innerWidth;
	currentWrapperHeight = window.innerHeight;
	if (currentWrapperWidth <= 768) {
		for(var i = photosOnPagePrevious+1;i<=photosOnPage;i++){
	    	imageСontainer[i].removeAttribute("onclick");
	   	}
	}	
	openPhoto ();
};





	
