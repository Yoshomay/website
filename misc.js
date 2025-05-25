const bodyThing = document.getElementById('bodyThing');
const samyoPopup = document.getElementById('samyoPopup');
var currentPopup;


function openPopupMenu(popupName) {
    if (popupName != 'samyo' && popupName != 'bedroomisometric') {return;}

    bodyThing.style.overflow = 'hidden';
    document.getElementById(popupName).style.display = 'block';
    currentPopup = popupName;
}

function closePopupMenu() {
    bodyThing.style.overflow = 'visible';
    document.getElementById(currentPopup).style.display = 'none';
}