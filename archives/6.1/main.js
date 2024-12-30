var settingsVar = false;
let settings = document.getElementById("settings");

var theme = document.cookie.replace("theme=", "");
if (theme != legacy && theme != nightSky) {document.cookie = 'theme = "nightSky";'}
var themeLink = document.getElementById("themeLink");


if (theme == 'nightSky') {themeLink.href = "css/nightSky.css";}
else if (theme == 'legacy') {themeLink.href = "css/legacy.css";}


function toggleSettings() {
    if (settingsVar == true) {settings.style.visibility = "hidden";
        settingsVar = false; return;}

    if (settingsVar == false) {settings.style.visibility = "visible";
        settingsVar = true;return;}
}