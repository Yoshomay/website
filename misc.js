const linksContainer = document.getElementsByClassName('links')[0];
let path = window.location.pathname.split("/").pop();


//  popup menu start
let currentPopup;

function openPopupMenu(popupName) {
    document.body.style.overflow = 'hidden';
    document.getElementById(popupName).style.display = 'block';
    document.getElementById('popupDarkBG').style.display = 'block';
    currentPopup = popupName;
}

function closePopupMenu() {
    document.body.style.overflow = 'visible';
    document.getElementById(currentPopup).style.display = 'none';
    document.getElementById('popupDarkBG').style.display = 'none';
    currentPopup = null;
}
//  popup menu end


function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/; max-age=315360000;`
}

function readCookie(name) {
    let cookie = document.cookie;
    
    try {
    cookie = cookie.split('; ');
    cookie = cookie.find(row => row.startsWith(name));
    cookie = cookie.split('=')[1];
    return cookie;
}
    catch {return 'error';}
}

window.setCookie = setCookie;
window.readCookie = readCookie;



//  create the links menu
function createButton(buttonText, link, appendTo) {
    const button = document.createElement("button");
    button.textContent = buttonText;
    button.style = 'margin: 5px 2px';

    if (link === path) {
    button.className = 'button0';}

    else {
    button.onclick = () => location = link;}

    if (appendTo == null) {appendTo = linksContainer;}  //  non projects pages
    appendTo.appendChild(button);
}

function createLinksText(text, isNotProjects) {
    const linksText = document.createElement("span");
    linksText.style = 'font-weight: bold; text-decoration: underline;';
    linksText.textContent = text;
    if (isNotProjects == true) {linksText.id = 'linksText'; linksText.style.margin = '0 auto 20px 0';}
    linksContainer.appendChild(linksText)
}

function createR(input, id) {
    let r = document.createElement(input);
    r.id = id;
    linksContainer.appendChild(r);}




    //  creating main pages links
if (!document.getElementById('isProjects')) {
    createLinksText("Links", true);

    createButton("Homepage", "index.html");
    createButton("My Fursona", "myfursona.html");
    createButton("Art", "art.html");
    createButton("My Links", "mylinks.html");
    createButton("Projects/", "projects/index.html");

    //linksContainer.style.margin = '0 auto 75px';
}



    for (let i = 0; i < 3; i++) {  //  unrelated but put br's at the bottom of the page
        document.getElementsByTagName("html")[0].appendChild(document.createElement("br"));}










     //     projects subdirectory stuff


function createArrow(name) {
    const arrow = document.createElement("span");
    arrow.class = "arrow";
    arrow.textContent = ">"
    arrow.style = 'cursor: pointer; display: inline-block; margin: 0 5px 0 0; user-select: none;'
    arrow.id = `${name}Arrow`;
    arrow.onclick = () => linksCollapse(name);
    linksContainer.appendChild(arrow);
}


    //  creating projects links
if (document.getElementById("isProjects")) {

/////////////////////////////////////////////////////////////////////////

    createArrow('linksLinks')
    createLinksText("Links:")

    let linksLinksSpan = document.createElement("span");
    linksLinksSpan.id = "linksLinks";
    createR("br");

    createButton("Homepage", "index.html", linksLinksSpan);
    createButton("Back", "../index.html", linksLinksSpan);
    linksContainer.appendChild(linksLinksSpan);
    createR("hr", "linksLinksHR");

/////////////////////////////////////////////////////////////////////////

    createArrow('linksJSStuff');
    createLinksText("JavaScript Stuff:");
    createR("br");

    let linksJSStuffSpan = document.createElement("span");
    linksJSStuffSpan.id = "linksJSStuff";

    createButton("Calculator", "calculator.html", linksJSStuffSpan);
    createButton("DB Quiz", "DBQuiz.html", linksJSStuffSpan);
    createButton("Book Box", "bookBox.html", linksJSStuffSpan);
    createButton("FGP Timer", "fgptimer.html", linksJSStuffSpan)
    linksContainer.appendChild(linksJSStuffSpan)
    createR("hr", 'linksJSStuffHR');

/////////////////////////////////////////////////////////////////////////

    createArrow('linksRomHacks')
    createLinksText("Rom Hacks (under construction):");
    createR("br", "linksRomHacksBR");

    let linksRomHacksSpan = document.createElement("span");
    linksRomHacksSpan.id = "linksRomHacks";

    createButton("How To Play", path, linksRomHacksSpan);
    createButton("SMW Backwards", path, linksRomHacksSpan);
    createButton("WDW Not Creepy", path, linksRomHacksSpan);
    createButton("April Fools 2022", path, linksRomHacksSpan);
    createButton("SMW Floor is Lava", path, linksRomHacksSpan);
    linksContainer.appendChild(linksRomHacksSpan);

/////////////////////////////////////////////////////////////////////////

}

function linksCollapse(section) {  //  hide/show the buttons

    if (readCookie(section) == 'false') {
        setCookie(section, 'true');
        document.getElementById(section).style.display = 'none';
        document.getElementById(`${section}Arrow`).style.transform = "rotate(270deg)";
        if (section != 'linksRomHacks') {document.getElementById(`${section}HR`).style.display = 'none';}

    } else {
        setCookie(section, 'false');
        document.getElementById(section).style.display = 'block';
        document.getElementById(`${section}Arrow`).style.transform = "rotate(0deg)";
        if (section != 'linksRomHacks') {document.getElementById(`${section}HR`).style.display = 'block';}

    }
}

if (document.getElementById("isProjects")) {  //  collapse projects links on page load
    
    function collapseIfCookiesTrue(section) {
        if (readCookie(section) == 'true') {setCookie(section, 'false'); linksCollapse(section);}
        else {(setCookie(section, 'false'))};}

    collapseIfCookiesTrue('linksLinks');
    collapseIfCookiesTrue('linksJSStuff');
    collapseIfCookiesTrue('linksRomHacks');
}