const themeLink = document.getElementById("themeLink")

let settingsIconGoesHere = document.getElementById("settingsIconGoesHere1");
let themeMenuGoesHere = document.getElementById("themeMenuGoesHere1");
let settingsIconIsClicked

// ading html
settingsIconGoesHere.innerHTML = `
<div class="settingsIcon" id="settingsIcon" onclick="settingsIconClicked();">
    <img src="/images/settings.png" width="15px" id="actualSettingsIcon">
</div><br>`

themeMenuGoesHere.innerHTML = `
<div class="themeSettings" id="themeSettings" style="display: none;">
    <br>Select which theme you want to use<br><br>
    <hr>
    <button id="defaultButton" onclick="themeChange('/css/theme.css');">MatterhornDB</button><br>
    <button id="palmBeachButton" onclick="themeChange('/css/palmBeach.css')">Palm Beach</button><br>
    <button id="legacyButton" onclick="themeChange('/css/legacy.css')">Legacy</button><br>
    <button id="simpleLightButton" onclick="themeChange('/css/simpleLight.css')">Simple Light</button><br>
    <button id="simpleDarkButton" onclick="themeChange('/css/simpleDark.css')">Simple Dark</button><br>
    <button id="alpenglowButton" onclick="themeChange('/css/alpenglow.css')">Alpenglow</button><br>
    <button id="blenderButton" onclick="themeChange('/css/blender.css')">Blender</button><br>
    <button id="oldRedditButton" onclick="themeChange('/css/oldReddit.css')">Old Reddit</button><br>
    <button id="twitterButton" onclick="themeChange('/css/twitter.css')">Twitter</button><br>
    <button id="youtubeButton" onclick="themeChange('/css/youtube.css')">YouTube</button><br>
    <button id="sourceButton" onclick="themeChange('/css/source.css')">Source</button><br>
    <button id="goldSRCButton" onclick="themeChange('/css/goldSRC.css')">GoldSRC</button><br>
    <button id="zorinLightButton" onclick="themeChange('/css/zorinLight.css')">Zorin OS Light</button><br>
    <button id="zorinDarkButton" onclick="themeChange('/css/zorinDark.css')">Zorin OS Dark</button><br>
    <button id="randomButton" onclick="themeChange('/css/random.css'); location.reload();">Random</button><br>
    <button id="noneButton" onclick="themeChange('/css/none.css')">None</button><br>

    
    <br>
    <button id="closeButton" onclick="closeThemeSettings();">Close</button>

</div> `;

const settingsIcon = document.getElementById("settingsIcon");
const themeSettings = document.getElementById("themeSettings")

//  set the theme if cookie has one
try {
var theme = document.cookie.split('; ').find(row => row.startsWith('theme=')).split('=')[1];
if (theme == null) { // well this code well never run cus this isnt how ur supposed to do it but im lazy and this works sooo /shrug
}else {themeLink.href = theme;}

}catch {}

// code for the random theme option
if (theme == 'css/random.css') {
    var randomNumber = Math.floor(Math.random() * 13) + 1;
    console.log(randomNumber);

    if (randomNumber == 1) {themeLink.href = '/css/theme.css';}
    if (randomNumber == 2) {themeLink.href = '/css/palmBeach.css';}
    if (randomNumber == 3) {themeLink.href = '/css/legacy.css';}
    if (randomNumber == 4) {themeLink.href ='/css/simpleLight.css';}
    if (randomNumber == 5) {themeLink.href ='/css/simpleDark.css';}
    if (randomNumber == 6) {themeLink.href ='/css/alpenglow.css';}
    if (randomNumber == 7) {themeLink.href ='/css/blender.css';}
    if (randomNumber == 8) {themeLink.href ='/css/oldReddit.css';}
    if (randomNumber == 9) {themeLink.href ='/css/twitter.css';}
    if (randomNumber == 10) {themeLink.href ='/css/youtube.css';}
    if (randomNumber == 11) {themeLink.href ='/css/source.css';}
    if (randomNumber == 12) {themeLink.href ='/css/goldSRC.css';}
    if (randomNumber == 13) {themeLink.href ='/css/zorinLight.css';}
    if (randomNumber == 14) {themeLink.href ='/css/zorinDark.css';}
    
    console.log("the random theme is "+randomNumber);
}


//  settings icon / menu
try {
settingsIconIsClicked = document.cookie.split('; ').find(row => row.startsWith('settingsIconIsClicked=')).split('=')[1];
} catch {}
function settingsIconClicked() {
    settingsIcon.style.display = "none";
    themeSettings.style.display = "block"; 
    document.cookie = `settingsIconIsClicked=${1}; path=/; max-age=${60 * 60 * 24 * 365 * 10}`;
}
try {
if (settingsIconIsClicked == 1) {settingsIconClicked();}
} catch {}

function closeThemeSettings() {
    settingsIcon.style.display = 'block'
    themeSettings.style.display = "none";
    document.cookie = `settingsIconIsClicked=${0}; path=/; max-age=${60 * 60 * 24 * 365 * 10}`;
}


//  theme changing
function themeChange(newTheme) {
    themeLink.href = newTheme;
    document.cookie = `theme=${newTheme}; path=/; max-age=${60 * 60 * 24 * 365 * 10}`;
}



