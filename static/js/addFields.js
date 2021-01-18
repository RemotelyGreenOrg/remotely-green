var counterDevice = 0;
var counterApp = 0;
var counterDst = 0;

function moreDevice() {
    counterDevice++;
    document.getElementById("deviceCount").value = counterDevice;

    if (counterDevice == 1) {
        let initialForm = document.getElementById('remoteMeetingDevices');
        initialForm.style = "display: block"
    } else {
        let newFields = document.getElementById('remoteMeetingDevices').cloneNode(true);
        newFields.style.display = 'block';
        newFields.id = '';
        let newField = newFields.childNodes;
        newField = newField[5].childNodes;

        for (let i = 3; i < newField.length; i += 2) {

            let newFieldOne = newField[i].childNodes;

            for (let j = 1; j < newFieldOne.length; j += 2) {
                let theName = newFieldOne[j].name;
                if (theName) {
                    newFieldOne[j].name = theName + counterDevice;
                }
            }
        }

        let insertHere = document.getElementById('addedDevice');
        insertHere.parentNode.insertBefore(newFields, insertHere);
    }
}

function moreApp() {
    counterApp++;
    document.getElementById("appCount").value = counterApp;

    if (counterApp == 1) {
        let initialForm = document.getElementById('remoteMeetingApp')
        initialForm.style = "display: block"
    } else {
        let newFields = document.getElementById('remoteMeetingApp').cloneNode(true);
        newFields.style.display = 'block';
        newFields.id = '';
        let newField = newFields.childNodes;
        newField = newField[5].childNodes;

        for (let i = 3; i < newField.length; i++) {

            let newFieldOne = newField[i].childNodes;
            for (let j = 1; j < newFieldOne.length; j++) {
                let theName = newFieldOne[j].name;
                if (theName) {
                    newFieldOne[j].name = theName + counterApp;
                }

            }
        }
        let insertHere = document.getElementById('addedApp');
        insertHere.parentNode.insertBefore(newFields, insertHere);
    }
}

function moreDst() {
    counterDst++;
    document.getElementById("destinationCount").value = counterDst

    if (counterDst == 1) {
        let initialForm = document.getElementById('inPersonMeeting')
        initialForm.style = "display: block"
    } else {
        let newFields = document.getElementById('inPersonMeeting').cloneNode(true);
        newFields.style.display = 'block';
        newFields.id = '';
        let newField = newFields.childNodes;

        for (let i = 5; i < newField.length; i += 2) {

            let newFieldOne = newField[i].childNodes;

            for (let j = 1; j < newFieldOne.length; j++) {
                let theName = newFieldOne[j].name;
                if (theName) {
                    newFieldOne[j].name = theName + counterDst;
                }

            }
        }
        let insertHere = document.getElementById('inPersonAdded');
        insertHere.parentNode.insertBefore(newFields, insertHere);
    }
}

window.onload = function () {
    document.getElementById('moreDevice').onclick = moreDevice;
    document.getElementById('moreApp').onclick = moreApp;
    document.getElementById('moreDst').onclick = moreDst;
}
