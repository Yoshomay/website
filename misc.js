const bodyThing = document.getElementById('bodyThing');
const samyoPopup = document.getElementById('samyoPopup');


function openPopupMenu(popupName) {
    bodyThing.style.overflow = 'hidden';
    document.getElementById(popupName).style.display = 'block';
}

function closePopupMenu(popupName) {
    bodyThing.style.overflow = 'visible';
    document.getElementById(popupName).style.display = 'none';
}