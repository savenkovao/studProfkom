"use strict";

var photoLink = document.querySelectorAll('.content-gallery-link')[0];
var photoInLink = document.querySelectorAll('.content-image')[0];
var body = document.getElementsByTagName('body')[0];
var newDiv;
console.log(photoLink);
console.log(body);

photoLink.onclick = function(){
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

	var cloneNode = photoInLink.cloneNode(true);
	cloneNode.style.width = '90%';
	cloneNode.style.padding = ' 0 ';
	cloneNode.style.border = '3px solid rgba(255,255,255,0.7)';
	cloneNode.style.borderRadius = '2rem';

	newDiv.appendChild(cloneNode);
	body.appendChild(newDiv);

	newDiv.onclick = function (){
		newDiv.remove();
	}

	cloneNode.onclick = function (){
		newDiv.remove();
	}

}

