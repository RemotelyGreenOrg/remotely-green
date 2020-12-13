var counterDevice = 0;
var counterApp = 0;
var counterDst = 0;

function moreDevice() {
	counterDevice++;
	let newFields = document.getElementById('remoteMeetingDevices').cloneNode(true);
	newFields.style.display = 'block';
	let newField = newFields.childNodes;
	for (let i=0;i<newField.length;i++) {
		let theName = newField[i].name;
		let theId = newField[i].id;
		if (theName){
			newField[i].name = theName + counterDevice;
		}
		if(theId){
			newField[i].id = theId + counterDevice;
		}
	}
	
	let insertHere = document.getElementById('addedDevice');
	insertHere.parentNode.insertBefore(newFields,insertHere);
}

function moreApp() {
	counterApp++;
	let newFields = document.getElementById('remoteMeetingApp').cloneNode(true);
	newFields.style.display = 'block';
	let newField = newFields.childNodes;
	for (let i=0;i<newField.length;i++) {
		let theName = newField[i].name;
		let theId = newField[i].id;
		if (theName){
			newField[i].name = theName + counterApp;
		}
		if(theId){
			newField[i].id = theId + counterApp;
		}
	}
	let insertHere = document.getElementById('addedApp');
	insertHere.parentNode.insertBefore(newFields,insertHere);
}

function moreDst() {
	counterDst++;
	let newFields = document.getElementById('inPersonMeeting').cloneNode(true);
	newFields.style.display = 'block';
	let newField = newFields.childNodes;
	for (let i=0;i<newField.length;i++) {
		let theName = newField[i].name;
		let theId = newField[i].id;
		if (theName){
			newField[i].name = theName + counterDst;
		}
		if(theId){
			newField[i].id = theId + counterDst;
		}
	}
	let insertHere = document.getElementById('inPersonAdded');
	insertHere.parentNode.insertBefore(newFields,insertHere);
}

window.onload = function(){
	document.getElementById('moreDevice').onclick = moreDevice;
	document.getElementById('moreApp').onclick = moreApp;
	document.getElementById('moreDst').onclick = moreDst;
}
