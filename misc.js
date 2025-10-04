const bodyThing = document.getElementById('bodyThing');
const samyoPopup = document.getElementById('samyoPopup');
const popupDarkBG = document.getElementById('popupDarkBG');
var currentPopup;

function openPopupMenu(popupName) {
    if (popupName != 'samyo' && popupName != 'bedroomisometric') {return;}

    bodyThing.style.overflow = 'hidden';
    document.getElementById(popupName).style.display = 'block';
    popupDarkBG.style.display = 'block';
    currentPopup = popupName;
}

function closePopupMenu() {
    bodyThing.style.overflow = 'visible';
    document.getElementById(currentPopup).style.display = 'none';
    popupDarkBG.style.display = 'none';
}


if (document.getElementById("linksJSStuff")) {  //  stuff done upon loading the page
    try {  //  check if cookies exist
    var cookieCheck = document.cookie.split('; ').find(row => row.startsWith('linksLinks')).split('=')[1];}

    catch {}


    if (!cookieCheck) {  //  if they dont, set default values
    ['linksLinks', 'linksJSStuff', 'linksRomHacks'].forEach(linksPart => {
        document.cookie = `${linksPart}=false; path=/; max-age=${60 * 60 * 24 * 365 * 10}`;})
    }


    //  collapse if the cookies say so
    ['linksLinks', 'linksJSStuff', 'linksRomHacks'].forEach(linksPart => {
    if (document.cookie.split('; ').find(row => row.startsWith(linksPart)).split('=')[1] == 'true') {
        document.cookie = `${linksPart}=false; path=/; max-age=${60 * 60 * 24 * 365 * 10}`;
        linksCollapse(linksPart)};})
    
}

function linksCollapse(section) {  //  hide/show the buttons

    var sectionIsCollapsed = document.cookie.split('; ').find(row => row.startsWith(section)).split('=')[1];
    if (sectionIsCollapsed === 'false') {
        sectionIsCollapsed = 'true';
        document.getElementById(section).style.display = 'none';
        document.getElementById(section + "Arrow").style.transform = "rotate(270deg)";
    } else {
        sectionIsCollapsed = 'false';
        document.getElementById(section).style.display = 'block';
        document.getElementById(section + "Arrow").style.transform = "rotate(0deg)";
    }

    document.cookie = `${section}=${sectionIsCollapsed}; path=/; max-age=${60 * 60 * 24 * 365 * 10}`;
}