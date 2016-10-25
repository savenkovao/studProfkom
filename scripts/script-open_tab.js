"use strict";

var tab = document.querySelectorAll('.tab');
var tabBlockInformation = document.querySelectorAll('.tab_block-information');
var previousTab = tab[0];
var previousTabBlock = tabBlockInformation[0];

for(var i = 0; i < tab.length;i++){
	tab[i].setAttribute("onclick","enableInformationBlock_("+i+")");
	tab[i].setAttribute("href","");
	tabBlockInformation[i].removeAttribute("id");
	if(i>0){
		tabBlockInformation[i].style.display = "none";
	} else{
		tab[i].classList.add("tab-chosen");
	}
}

function enableInformationBlock_(i){
	previousTabBlock.style.display = "none";
	previousTab.classList.remove("tab-chosen");
	tabBlockInformation[i].style.display = "block";
	tab[i].classList.add("tab-chosen");
	previousTabBlock = tabBlockInformation[i];
	previousTab = tab[i];
}
