var counterDevice = 0;
var counterApp = 0;
var counterDst = 0;

function moreDevice() {
	counterDevice++;
    document.getElementById("deviceCount").value = counterDevice;
    let newFields = document.getElementById('remoteMeetingDevices').cloneNode(true);
    newFields.style.display = 'block';
    newFields.id = '';
    let newNewField = newFields.childNodes;
	
	for(let k = 0; k < newNewField.length; k ++) {
		let newField = newNewField[k].childNodes;
		for (let i = 0; i < newField.length; i ++) {
	
			let newFieldOne = newField[i].childNodes;
	
			for (let j = 0; j < newFieldOne.length; j ++) {
				let theName = newFieldOne[j].name;
				if (theName) {
					newFieldOne[j].name = theName + counterDevice;
				}
			}
		}
	}

    let insertHere = document.getElementById('addedDevice');
    insertHere.parentNode.insertBefore(newFields, insertHere);
    
}

function moreApp() {
    counterApp++;
    document.getElementById("appCount").value = counterApp;

    let newFields = document.getElementById('remoteMeetingApp').cloneNode(true);
    newFields.style.display = 'block';
    newFields.id = '';
    let newNewField = newFields.childNodes;
	for(let k = 0; k < newNewField.length-1; k++){
		let newField = newNewField[k].childNodes;
		for (let i = 0; i < newField.length; i++) {
	
			let newFieldOne = newField[i].childNodes;
			for (let j = 0; j < newFieldOne.length; j++) {
				let theName = newFieldOne[j].name;
				if (theName) {
					newFieldOne[j].name = theName + counterApp;
				}
	
			}
		}
	}
    let insertHere = document.getElementById('addedApp');
    insertHere.parentNode.insertBefore(newFields, insertHere);
}

function moreDst() {
    counterDst++;
    document.getElementById("destinationCount").value = counterDst

    let newFields = document.getElementById('inPersonMeeting').cloneNode(true);
    newFields.style.display = 'block';
    newFields.id = '';
    let newField = newFields.childNodes;

    for (let i = 0; i < newField.length; i ++) {

        let newFieldOne = newField[i].childNodes;

        for (let j = 0; j < newFieldOne.length; j++) {
            let theName = newFieldOne[j].name;
            if (theName) {
                newFieldOne[j].name = theName + counterDst;
            }

        }
    }
    let insertHere = document.getElementById('inPersonAdded');
    insertHere.parentNode.insertBefore(newFields, insertHere);
}

function notDisplayScreen(typeDevice){
	let number = typeDevice.name[typeDevice.name.length-1];
	let screenOrNot = typeDevice.value;
	let classeToDisplay;
	switch(screenOrNot){
		case "screen":
			classeToDisplay = document.querySelectorAll(".screenType")[number].style.display = "inline-block";
			break;
		default:
			classeToDisplay = document.querySelectorAll(".screenType")[number].style.display = "none";
			break;
	}
}

window.onload = function () {
    document.getElementById('moreDevice').onclick = moreDevice;
    document.getElementById('moreApp').onclick = moreApp;
    document.getElementById('moreDst').onclick = moreDst;
}
