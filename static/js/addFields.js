var counterDevice = 0;
var counterApp = 0;
var counterDst = 0;

function moreDevice() {
	counterDevice++;
	let newFields = document.getElementById('remoteMeetingDevices').cloneNode(true);
	newFields.style.display = 'block';
	newFields.id='';
	let newField = newFields.childNodes;
	newField = newField[4].childNodes;
	
	for (let i=3;i<newField.length;i+=2) {
		
		let newFieldOne = newField[i].childNodes;
		
		for(let j=1; j< newFieldOne.length; j+=2){
			let theName = newFieldOne[j].name;
			
			if (theName){
				newFieldOne[j].name = theName + counterDevice;
				
			}
		
		}
		
	}
	
	let insertHere = document.getElementById('addedDevice');
	insertHere.parentNode.insertBefore(newFields,insertHere);
}

function moreApp() {
	counterApp++;
	let newFields = document.getElementById('remoteMeetingApp').cloneNode(true);
	newFields.style.display = 'block';
	newFields.id='';
	let newField = newFields.childNodes;
	newField = newField[4].childNodes;
	console.log(newField);
	
	for (let i=3;i<newField.length;i++) {
		
		let newFieldOne = newField[i].childNodes;
		console.log(newFieldOne);
		for(let j=1; j< newFieldOne.length; j++){
			let theName = newFieldOne[j].name;
			console.log(theName);
			if (theName){
				newFieldOne[j].name = theName + counterApp;
				console.log(newFieldOne[j].name);
			}
		
		}
	}
	let insertHere = document.getElementById('addedApp');
	insertHere.parentNode.insertBefore(newFields,insertHere);
}

function moreDst() {
	counterDst++;
	let newFields = document.getElementById('inPersonMeeting').cloneNode(true);
	newFields.style.display = 'block';
	newFields.id='';
	let newField = newFields.childNodes;
	console.log(newField);
	
	for (let i=4;i<newField.length;i+=2) {
		
		let newFieldOne = newField[i].childNodes;
		
		for(let j=1; j< newFieldOne.length; j++){
			let theName = newFieldOne[j].name;
			if (theName){
				newFieldOne[j].name = theName + counterDst;
			}
		
		}
	}
	let insertHere = document.getElementById('inPersonAdded');
	insertHere.parentNode.insertBefore(newFields,insertHere);
}

function notDisplayScreen(typeDevice){
	console.log("hola");
	let screenOrNot = document.getElementsByTagName('typeDevice').value;
	var classeToDisplay;
	switch(screenOrNot){
		case "laptop":
			classeToDisplay = document.getElementsByClassName('screenField');
			classeToDisplay.display = none;
			break;
		case "persComputer":
			classeToDisplay = document.getElementsByClassName('screenField');
			classeToDisplay.display = none;
			break;
		case "highCODEC":
			classeToDisplay = document.getElementsByClassName('screenField');
			classeToDisplay.display = none;
			break;
		case "lowCODEC":
			classeToDisplay = document.getElementsByClassName('screenField');
			classeToDisplay.display = none;
			break;
		case "projector":
			classeToDisplay = document.getElementsByClassName('screenField');
			classeToDisplay.display = none;
			break;
		case "router":
			classeToDisplay = document.getElementsByClassName('screenField');
			classeToDisplay.display = none;
			break;
		case "camera":
			classeToDisplay = document.getElementsByClassName('screenField');
			classeToDisplay.display = none;
			break;
		case "speaker":
			classeToDisplay = document.getElementsByClassName('screenField');
			classeToDisplay.display = none;
			break;
		case "micro":
			classeToDisplay = document.getElementsByClassName('screenField');
			classeToDisplay.display = none;
			break;
		case "screen":
			classeToDisplay = document.getElementsByClassName('screenField');
			classeToDisplay.display = inline-block;
			break;
		
	}
	
}

window.onload = function(){
	document.getElementById('moreDevice').onclick = moreDevice;
	document.getElementById('moreApp').onclick = moreApp;
	document.getElementById('moreDst').onclick = moreDst;
}
