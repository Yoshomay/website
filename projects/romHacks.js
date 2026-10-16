    let currentImage = 1;

    function changeImage(change, image, imageCount) {
        let currentNumber = document.getElementById('screenshotHolder').children[2].children[currentImage];
        currentNumber.style.fontSize = '100%'; currentNumber.style.fontWeight = "normal"; currentNumber.style.textDecoration = 'none';


        if (change == '-') {
            if (currentImage == 1) currentImage = imageCount;
            else currentImage--;
        }
        else if (change == '+') {
            if (currentImage == imageCount) currentImage = 1;
            else currentImage++
        }
        else currentImage = change;

        document.getElementById('gameScreenshots').src = 'images/romHacks/' + image + currentImage + '.webp';

        currentNumber = document.getElementById('screenshotHolder').children[2].children[currentImage];
        currentNumber.style.fontSize = '130%'; currentNumber.style.fontWeight = "bold"; currentNumber.style.textDecoration = 'underline';

    };

function createScreenshots(page, screenshotCount) {

let toInsert = `
    <img src="images/romHacks/${page}1.webp" id="gameScreenshots" width="350px"><br>
    <span id="screenshotSelector" style="text-decoration: none; cursor: pointer; user-select: none;">

        <a onclick="changeImage('-', '${page}', ${screenshotCount})" style="font-size: 80%"> < </a>
        <a onclick="changeImage(1,   '${page}', ${screenshotCount})" style="font-size: 130%; font-weight: bold; text-decoration: underline;">1</a>
        <a onclick="changeImage(2,   '${page}', ${screenshotCount})">2</a>
`

    if (screenshotCount > 2) toInsert += `<a onclick="changeImage(3, '${page}', ${screenshotCount})">3</a> `;
    if (screenshotCount > 3) toInsert += `<a onclick="changeImage(4, '${page}', ${screenshotCount})">4</a>`;
    toInsert += `<a onclick="changeImage('+', '${page}', ${screenshotCount})" style="font-size: 80%"> > </a></span>`

    document.getElementById('screenshotHolder').innerHTML = toInsert;
}