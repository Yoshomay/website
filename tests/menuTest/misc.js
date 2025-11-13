const bodyThing = document.getElementById('bodyThing');
const samyoPopup = document.getElementById('samyoPopup');
const popupDarkBG = document.getElementById('popupDarkBG');

const linksContainer = document.getElementsByClassName('links')[0];
const linksText = document.createElement("span");
let path = window.location.pathname;
path = path.split("/").pop();


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

function createButton(buttonText, link) {
    const button = document.createElement("button");
    button.textContent = buttonText;
    button.style = 'margin: 0 2px';

    if (link === path) {
    button.className = 'button0';}

    else {
    button.onclick = () => location = link;}

    linksContainer.appendChild(button);
}

//  run on page load start
    linksText.textContent = "Links";
    linksText.id = 'linksText';
    linksText.style = 'font-weight: bold;';
    linksContainer.appendChild(linksText);

    linksContainer.appendChild(document.createElement("br"));
    linksContainer.appendChild(document.createElement("br"));

    createButton("Homepage", "index.html");
    createButton("My Fursona", "myfursona.html");
    createButton("Art", "art.html");
    createButton("My Links", "mylinks.html");
    createButton("Projects/", "projects/index.html");
;
//  run on page load end