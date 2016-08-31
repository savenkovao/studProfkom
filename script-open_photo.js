"use strict";

var photoLink = document.querySelectorAll('.content-gallery-link');
var photoInLink = document.querySelectorAll('.content-image');
var body = document.getElementsByTagName('body')[0];
var newDiv;
var clval;
var cloneNode;

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
			newDiv.style.padding = '0 10vw';
			newDiv.style.display = 'flex';
			newDiv.style.flexDirection = 'column';
			newDiv.style.justifyContent = 'center';
			newDiv.style.alignItems = 'center';
			newDiv.style.backgroundColor = 'rgba(0,0,0,0.8)';
			newDiv.style.zIndex = '10';

			var btnRight = document.createElement('div');
			btnRight.style.display = 'block';
			btnRight.style.width = '10%';
			btnRight.style.height = '100%';
			btnRight.style.position = 'absolute';
			btnRight.style.right = '0';
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
			arrowRight.style.right = 'calc(50% - 10px)';
			arrowRight.style.top = 'calc(50% - 25px)';
			btnRight.appendChild(arrowRight);



			var btnLeft = document.createElement('div');
			btnLeft.style.display = 'block';
			btnLeft.style.width = '10%';
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
			arrowLeft.style.left = 'calc(50% - 10px)';
			arrowLeft.style.top = 'calc(50% - 25px)';
			arrowLeft.style.transform = 'rotate(180deg)';
			btnLeft.appendChild(arrowLeft);
			

			addImage ();

			function addImage (){
				cloneNode = photoInLink[e].cloneNode(true);
				cloneNode.style.height = '97%';
				cloneNode.style.width = 'auto';
				cloneNode.style.padding = ' 0 ';
				cloneNode.style.border = '3px solid rgba(255,255,255,0.7)';
				cloneNode.style.borderRadius = '0.5vw';
				newDiv.appendChild(cloneNode);
			}			

			var currentWrapperWidth = document.body.offsetWidth;
						
			newDiv.appendChild(btnRight);
			newDiv.appendChild(btnLeft);

			btnRight.onclick = function(event){
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

			function changeBackgroundBtnLeft (){
				btnLeft.style.backgroundColor = 'rgba(255,255,255,0.1)';
				arrowLeft.style.backgroundImage = 'url(images/slider_arrow.png)';
			}

			function changeBackgroundBtnRight (){
				btnRight.style.backgroundColor = 'rgba(255,255,255,0.1)';
				arrowRight.style.backgroundImage = 'url(images/slider_arrow.png)';
			}

			function deleteBackGround (){
				btnLeft.style.backgroundColor = 'transparent';
				btnRight.style.backgroundColor = 'transparent';
				arrowRight.style.backgroundImage = 'none';
				arrowLeft.style.backgroundImage = 'none';
			}





			body.appendChild(newDiv);
		

			newDiv.onclick = function (){
				newDiv.remove();
			}

			cloneNode.onclick = function (){
				newDiv.remove();
			}
        };

}());




	
