"use strict";

var photoLink = document.querySelectorAll('.content-gallery-link');
var photoInLink = document.querySelectorAll('.content-image');
var body = document.getElementsByTagName('body')[0];
var newDiv;
var clval;
var cloneNode;
var imageContainer;
var currentWrapperWidth = window.innerWidth;
var currentWrapperHeight = window.innerHeight;
var cloneNodeWidth;

(function () {
    var  len = photoLink.length;
    var   i = 0;
    for (;photoLink[i].setAttribute("onclick", "clval(" + i + ")"), ++i < len;);

    clval = function (e) {
 			body.style.position = 'relative';
			newDiv = document.createElement('div');
			newDiv.style.position = 'fixed';
			newDiv.style.width = '100%';
			newDiv.style.height = '100%';
			newDiv.style.top = '0%';
			newDiv.style.zIndex = '10';

			imageContainer = document.createElement('div');
			imageContainer.style.position = 'relative';
			imageContainer.style.width = '100%';
			imageContainer.style.height = '100%';
			imageContainer.style.padding = '0 10vw';
			imageContainer.style.display = 'flex';
			imageContainer.style.flexDirection = 'column';
			imageContainer.style.justifyContent = 'center';
			imageContainer.style.alignItems = 'center';
			imageContainer.style.backgroundColor = 'rgba(0,0,0,0.9)';
		
			var btnRight = document.createElement('div');
			btnRight.style.display = 'block';
			btnRight.style.width = '30%';
			btnRight.style.height = '100%';
			btnRight.style.position = 'absolute';
			btnRight.style.left = '70%';
			btnRight.style.top = '0';
			btnRight.style.backgroundColor = 'transparent';
			btnRight.style.color = 'white';
			btnRight.style.backgroundPosition = 'center';
			btnRight.style.backgroundSize = 'initial';

			var arrowRight = document.createElement('div');
			arrowRight.style.backgroundPosition = 'center';
			arrowRight.style.backgroundSize = 'cover';
			arrowRight.style.position = 'absolute';
			arrowRight.style.width = '20px';
			arrowRight.style.height = '50px';
			arrowRight.style.right = '10%';
			arrowRight.style.top = 'calc(50% - 25px)';
			arrowRight.style.opacity = '0.3';
			arrowRight.style.backgroundImage = 'url(images/slider_arrow.png)';
			btnRight.appendChild(arrowRight);

			var btnLeft = document.createElement('div');
			btnLeft.style.display = 'block';
			btnLeft.style.width = '30%';
			btnLeft.style.height = '100%';
			btnLeft.style.position = 'absolute';
			btnLeft.style.left = '0';
			btnLeft.style.top = '0';
			btnLeft.style.backgroundColor = 'transparent';

			var arrowLeft = document.createElement('div');
			arrowLeft.style.backgroundPosition = 'center';
			arrowLeft.style.backgroundSize = 'cover';
			arrowLeft.style.position = 'absolute';
			arrowLeft.style.width = '20px';
			arrowLeft.style.height = '50px';
			arrowLeft.style.left = '10%';
			arrowLeft.style.top = 'calc(50% - 25px)';
			arrowLeft.style.transform = 'rotate(180deg)';
			arrowLeft.style.opacity = '0.3';
			arrowLeft.style.backgroundImage = 'url(images/slider_arrow.png)';
			btnLeft.appendChild(arrowLeft);

			var btnClose = document.createElement('div');
			btnClose.style.display = 'block';
			btnClose.style.width = '70px';
			btnClose.style.height = '70px';
			btnClose.style.position = 'absolute';
			btnClose.style.right = '0';
			btnClose.style.top = '0';
			btnClose.style.backgroundColor = 'transparent';

			var closePic = document.createElement('div');
			closePic.style.backgroundPosition = 'center';
			closePic.style.backgroundSize = 'cover';
			closePic.style.position = 'absolute';
			closePic.style.width = '25px';
			closePic.style.height = '25px';
			closePic.style.right = 'calc(50% - 12.5px)';
			closePic.style.top = 'calc(50% - 12.5px)';
			closePic.style.opacity = '0.3';
			closePic.style.backgroundImage = 'url(images/close_button.png)';
			btnClose.appendChild(closePic);

			addImage ();

			function addImage (){
				cloneNode = photoInLink[e].cloneNode(true);		
				getImageSize ();
				cloneNode.style.padding = ' 0 ';
				cloneNode.style.border = '3px solid rgba(255,255,255,0.7)';
				cloneNode.style.borderRadius = '0.5vw';
				imageContainer.appendChild(cloneNode);

			}

			function getImageSize (){
				if((currentWrapperWidth/currentWrapperHeight)<(photoInLink[e].offsetWidth/photoInLink[e].offsetHeight)){
					cloneNode.style.width = '100%';
					cloneNode.style.height = 'auto';
					cloneNodeWidth = currentWrapperWidth;

				} else {
					cloneNode.style.width = 'auto';
					cloneNode.style.height = '97%';
					cloneNodeWidth = (currentWrapperHeight*0.97) * photoInLink[e].offsetWidth/photoInLink[e].offsetHeight;
				}	
			}
		
			imageContainer.appendChild(btnRight);
			imageContainer.appendChild(btnLeft);
			imageContainer.appendChild(btnClose);
			newDiv.appendChild(imageContainer);

			btnRight.onclick = function(event){
				event.stopPropagation();
				cloneNode.remove();				
				e++;
				if (e>photoLink.length-1){
					newDiv.remove();
				}
				addImage ();

			}

			cloneNode.onclick = function(event){
				event.stopPropagation();
				cloneNode.remove();				
				e++;
				if (e>photoLink.length-1){
					newDiv.remove();
				}
				addImage ();

			}

			btnLeft.onclick = function(event){
				event.stopPropagation();
				cloneNode.remove();				
				e--;
				if (e<1){
					newDiv.remove();
				}
				addImage ();	
			}

		btnLeft.addEventListener("mouseover", changeBackgroundBtnLeft);	
		btnLeft.addEventListener("mouseout",deleteBackGround);
		btnRight.addEventListener("mouseover", changeBackgroundBtnRight);	
		btnRight.addEventListener("mouseout",deleteBackGround);
		btnClose.addEventListener("mouseover", changeBackgroundBtnClose);	
		btnClose.addEventListener("mouseout",deleteBackGround);

			function changeBackgroundBtnLeft (){
				// btnLeft.style.backgroundColor = 'rgba(255,255,255,0.1)';				
				arrowLeft.style.opacity = '1';
			}

			function changeBackgroundBtnRight (){
				// btnRight.style.backgroundColor = 'rgba(255,255,255,0.1)';			
				arrowRight.style.opacity = '1';
			}

			function changeBackgroundBtnClose () {
				// btnClose.style.backgroundColor ='red';
				closePic.style.opacity = '0.8';
			}

			function deleteBackGround (){
				btnLeft.style.backgroundColor = 'transparent';
				btnRight.style.backgroundColor = 'transparent';
				arrowRight.style.opacity = '0.4';
				arrowLeft.style.opacity = '0.4';
				closePic.style.opacity = '0.3';
			}

			body.appendChild(newDiv);
		
			btnClose.onclick = function (){
				newDiv.remove();
			}

			window.onresize=function(){
				currentWrapperWidth = window.innerWidth;
				currentWrapperHeight = window.innerHeight;
				getImageSize ();
			}
        };

}());




	
