var counterDevice = 0;
var counterApp = 0;

function moreDevice() {
	counterDevice++;
	let newFields = document.getElementById('remoteMeetingDevices').cloneNode(true);
	newFields.id = '';
	newFields.style.display = 'block';
	let newField = newFields.childNodes;
	for (let i=0;i<newField.length;i++) {
		let theName = newField[i].name
		if (theName)
			newField[i].name = theName + counterDevice;
	}
	let insertHere = document.getElementById('addedDevice');
	insertHere.parentNode.insertBefore(newFields,insertHere);
}

function moreApp() {
	counterApp++;
	let newFields = document.getElementById('remoteMeetingApp').cloneNode(true);
	newFields.id = '';
	newFields.style.display = 'block';
	let newField = newFields.childNodes;
	for (let i=0;i<newField.length;i++) {
		let theName = newField[i].name
		if (theName)
			newField[i].name = theName + counterApp;
	}
	let insertHere = document.getElementById('addedApp');
	insertHere.parentNode.insertBefore(newFields,insertHere);
}

window.onload = function(){
	document.getElementById('moreDevice').onclick = moreDevice;
	document.getElementById('moreApp').onclick = moreApp;
}
