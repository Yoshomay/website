//     html part
/*

const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 1 : 0;

let settingsIconGoesHere;
let themeMenuGoesHere;

if (isMobile == 0) { //pc
    settingsIconGoesHere = document.getElementById("settingsIconGoesHere2");
    themeMenuGoesHere = document.getElementById("themeMenuGoesHere2");
}else { //mobile
    settingsIconGoesHere = document.getElementById("settingsIconGoesHere1");
    themeMenuGoesHere = document.getElementById("themeMenuGoesHere1");
}*/

let settingsIconGoesHere;
let themeMenuGoesHere;

settingsIconGoesHere = document.getElementById("settingsIconGoesHere1");
themeMenuGoesHere = document.getElementById("themeMenuGoesHere1");




// ading html
settingsIconGoesHere.innerHTML = `
<div class="settingsIcon" id="settingsIcon" onclick="settingsIconClicked();">
    <img src="images/settings.png" width="15px" id="actualSettingsIcon">
</div><br>`

themeMenuGoesHere.innerHTML = `
<div class="themeSettings" id="themeSettings" style="display: none;">
    <br>Select which theme you want to use<br><br>
    <hr>
    <button id="defaultButton" onclick="themeChange('css/theme.css');">MatterhornDB</button><br>
    <button id="palmBeachButton" onclick="themeChange('css/palmBeach.css')">Palm Beach</button><br>
    <button id="legacyButton" onclick="themeChange('css/legacy.css')">Legacy</button><br>
    <button id="simpleLightButton" onclick="themeChange('css/simpleLight.css')">Simple Light</button><br>
    <button id="simpleDarkButton" onclick="themeChange('css/simpleDark.css')">Simple Dark</button><br>
    <button id="alpenglowButton" onclick="themeChange('css/alpenglow.css')">Alpenglow</button><br>
    <button id="oldRedditButton" onclick="themeChange('css/oldReddit.css')">Old Reddit</button><br>
    <button id="twitterButton" onclick="themeChange('css/twitter.css')">Twitter</button><br>
    <button id="youtubeButton" onclick="themeChange('css/youtube.css')">YouTube</button><br>
    <button id="sourceButton" onclick="themeChange('css/source.css')">Source</button><br>
    <button id="noneButton" onclick="themeChange('css/none.css')">None</button><br>

    
    <br><br>
    <button id="closeButton" onclick="closeThemeSettings();">Close</button>

</div> `;




const settingsIcon = document.getElementById("settingsIcon");
const themeSettings = document.getElementById("themeSettings")
const themeLink = document.getElementById("themeLink")

// set the theme if cookie has one
var theme = document.cookie.split('; ').find(row => row.startsWith('theme=')).split('=')[1];
if (theme == null) {themeLink.href = 'css/theme.css';
}else {
    themeLink.href = theme;}


let settingsIconIsClicked = document.cookie.split('; ').find(row => row.startsWith('settingsIconIsClicked=')).split('=')[1];

function settingsIconClicked() {
    settingsIcon.style.opacity = "0";
    themeSettings.style.display = "block"; 
    document.cookie = `settingsIconIsClicked=${1}; path=/; max-age=${60 * 60 * 24 * 365 * 10}`;
}
if (settingsIconIsClicked == 1) {settingsIconClicked();}

function closeThemeSettings() {
    settingsIcon.style.opacity = "1";
    themeSettings.style.display = "none";
    document.cookie = `settingsIconIsClicked=${0}; path=/; max-age=${60 * 60 * 24 * 365 * 10}`;
}

function themeChange(newTheme) {
    document.cookie = `theme=${newTheme}; path=/; max-age=${60 * 60 * 24 * 365 * 10}`;
    themeLink.href = newTheme;
}