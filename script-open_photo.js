"use strict";

var photoLink = document.querySelectorAll('.content-gallery-link');
var photoInLink = document.querySelectorAll('.content-image');
var body = document.getElementsByTagName('body')[0];
var newDiv;
var clval;

// for(var i in photoLink){		
// 	photoLink[i].setAttribute("onclick", "clval(" + i + ")");
// }

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


			var cloneNode = photoInLink[e].cloneNode(true);
			cloneNode.style.height = '97%';
			cloneNode.style.width = 'auto';
			cloneNode.style.padding = ' 0 ';
			cloneNode.style.border = '3px solid rgba(255,255,255,0.7)';
			cloneNode.style.borderRadius = '0.5vw';

			var currentWrapperWidth = document.body.offsetWidth;
			console.log(cloneNode.offsetWidth);
			console.log(currentWrapperWidth);
			 
			// if(){
			// 	alert('!');
			// }

			newDiv.appendChild(cloneNode);
			body.appendChild(newDiv);

			newDiv.onclick = function (){
				newDiv.remove();
			}

			cloneNode.onclick = function (){
				newDiv.remove();
			}
        };

}());




	




