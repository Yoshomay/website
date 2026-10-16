const themeLink = document.getElementById("themeLink")
const settingsIcon = document.getElementById("settingsIconGoesHere1");
const themeMenuGoesHere = document.getElementById("themeMenuGoesHere1");

let settingsIconIsClicked;
let theme;


// adding theme menu
settingsIcon.innerHTML = `
<div class="settingsIcon" onclick="settingsIconClicked();" style="cursor: pointer;">
    <img src="/images/settings.png" width="15px" id="actualSettingsIcon">
</div><br>`;


//    make the theme menu start
themeMenuGoesHere.innerHTML = `
<div class="themeSettings" id="themeSettings" style="display: none;">
    <br>Select which theme you want to use<br><br>
    <hr>`;


function createThemeButton(id, themeName) {
    let button = document.createElement("button");
    button.textContent = themeName;
    button.id = `${id}Button`;

    if (themeName == 'MatterhornDB') {button.addEventListener("click", () => themeChange(`/css/theme.css`))}
    else if (themeName == 'Random') {button.addEventListener("click", () => {themeChange(`/css/random.css`); location.reload()});}
    else {button.addEventListener("click", () => themeChange(`/css/${id}.css`))};

    themeSettings.appendChild(button);
    themeSettings.append(document.createElement("br"));
}
    
const themeSettings = document.getElementById("themeSettings")

    createThemeButton('default', 'MatterhornDB');
    createThemeButton('palmBeach', 'Palm Beach');
    createThemeButton('legacy', 'Legacy');
    createThemeButton('simpleLight', 'Simple Light');
    createThemeButton('simpleDark', 'Simlpe Dark');
    createThemeButton('alpenglow', 'Alpenglow');
    createThemeButton('blender', 'Blender');
    createThemeButton('oldReddit', 'Old Reddit');
    createThemeButton('twitter', 'Twitter');
    createThemeButton('youtube', 'YouTube');
    createThemeButton('source', 'Source');
    createThemeButton('goldSRC', 'GoldSRC');
    createThemeButton('zorinLight', 'Zorin OS Light');
    createThemeButton('zorinDark', 'Zorin OS Dark');
    createThemeButton('random', 'Random');
    createThemeButton('none', 'None');
    themeSettings.appendChild(document.createElement("br"));


    let closeButton = document.createElement("button");
    closeButton.textContent = 'Close';
    closeButton.id = 'closeButton';
    closeButton.onclick = () => closeThemeSettings();
    themeSettings.appendChild(closeButton);
    
//  make the theme menu end


//  set the theme if cookie has one
theme = readCookie('theme');  //  set the theme

if (theme == undefined || theme == null || theme == 'error') {  //  if there is no cookie set defaults
    theme = '/css/theme.css'; setCookie('theme', '/css/theme.css')}  

else {  //  but if there is set it
    themeLink.href = theme;}  

// code for the random theme option
if (theme == '/css/random.css') {
    const themeList = ['theme', 'palmBeach', 'legacy', 'simpleLight', 'simpleDark', 
        'alpenglow', 'blender', 'oldReddit', 'twitter', 'youtube', 'source', 'goldSRC', 
        'zorinLight', 'zorinDark']

    let randomNumber = Math.floor(Math.random() * themeList.length);

    themeLink.href = `/css/${themeList[randomNumber]}.css`
    
}


//  settings icon / menu
if (readCookie('settingsIconIsClicked') == 'true') {settingsIconClicked();}

function settingsIconClicked() {
    settingsIcon.style.display = "none";
    themeSettings.style.display = "block"; 
    setCookie('settingsIconIsClicked', 'true');    
}


function closeThemeSettings() {
    settingsIcon.style.display = 'block'
    themeSettings.style.display = "none";
    setCookie('settingsIconIsClicked', 'false');    
}


//  theme changing
function themeChange(newTheme) {
    themeLink.href = newTheme;
    setCookie('theme', newTheme);
}