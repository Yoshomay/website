const themeLink = document.getElementById("themeLink")

let settingsIconGoesHere = document.getElementById("settingsIconGoesHere1");
let themeMenuGoesHere = document.getElementById("themeMenuGoesHere1");

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
    <button id="sourceButton" onclick="themeChange('css/source.css', 'images/sourceBG.jpg')">Source</button><br>
    <button id="noneButton" onclick="themeChange('css/none.css')">None</button><br>

    
    <br><br>
    <button id="closeButton" onclick="closeThemeSettings();">Close</button>

</div> `;

const settingsIcon = document.getElementById("settingsIcon");
const themeSettings = document.getElementById("themeSettings")

//  set the theme if cookie has one
var theme = document.cookie.split('; ').find(row => row.startsWith('theme=')).split('=')[1];
if (theme == null) {themeLink.href = 'css/theme.css';
}else {themeLink.href = theme;}


//  settings icon / menu
let settingsIconIsClicked = document.cookie.split('; ').find(row => row.startsWith('settingsIconIsClicked=')).split('=')[1];

function settingsIconClicked() {
    settingsIcon.style.display = "none";
    themeSettings.style.display = "block"; 
    document.cookie = `settingsIconIsClicked=${1}; path=/; max-age=${60 * 60 * 24 * 365 * 10}`;
}
if (settingsIconIsClicked == 1) {settingsIconClicked();}

function closeThemeSettings() {
    settingsIcon.style.display = 'block'
    themeSettings.style.display = "none";
    document.cookie = `settingsIconIsClicked=${0}; path=/; max-age=${60 * 60 * 24 * 365 * 10}`;
}


//  theme changing
function themeChange(newTheme) {
    document.cookie = `theme=${newTheme}; path=/; max-age=${60 * 60 * 24 * 365 * 10}`;
    themeLink.href = newTheme;
}



