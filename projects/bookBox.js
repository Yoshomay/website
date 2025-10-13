const characters = [' ', ',', '.', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let block = {};


function clearEverything() {
    document.getElementById("theBooksName").textContent = '______________';
    for (let pageNum = 1; pageNum < 17; pageNum++) {
        document.getElementById("page" + pageNum).textContent = '';
    }
    console.clear();}

function checkForError(condition, warning, consoleErrorText) {
    if (!condition) {return;}
    if (condition) {
        if (!confirm(warning)) {
            clearEverything();
            throw new Error(consoleErrorText);}
    }
}
function floorMod(a, b) {return ((a % b) + b) % b;}


function calculateBookName(xCoords, yCoords, zCoords) {
    console.clear();


    block.x = Number(xCoords);
    block.y = Number(yCoords);
    block.z = Number(zCoords);

    console.log(`coords: ${block.x}, ${block.y}, ${block.z}`);

    // figuring out which chunk this is inside of
    block.chunkX = Math.floor(block.x/16);
    block.chunkZ = Math.floor(block.z/16);

    console.log(`chunkX: ${block.chunkX}`);
    console.log(`chunkZ: ${block.chunkZ}`);

    
    // figuring out the localx and localz
    block.localX = block.x & 0xF;
    block.localZ = block.z & 0xF;

    console.log(`localX: ${block.localX}`);
    console.log(`localZ: ${block.localZ}`);


    // figuring out what the third and 4th value are
    const rotationValue = document.querySelector('input[name="rotation"]:checked');  //  error checking if there's no rotation
    if (!rotationValue) {alert("WARNING: You didn't select a rotation value."); throw new Error("no rotation value");}
    block.rotation = Number(rotationValue.value);

    console.log(`rotation: ${block.rotation}`);

    switch (block.rotation) {
        case 0: block.fourthValue = 15 - block.localX; break;  // north
        case 1: block.fourthValue = 15 - block.localZ; break;  //  east 
        case 2: block.fourthValue =      block.localX; break;  // south
        case 3: block.fourthValue =      block.localZ; break;  //  west

        default:
        alert("ERROR: Issue in rotation value");
        clearEverything();
        throw new Error("Issue in rotation value");
    }



    //  error checking
    checkForError(block.x > 29999983 || block.z > 29999983, 
        "WARNING: Your block is past the world border, this will generate an impossible book. Continue?", 
        "block outside world border")
        
    checkForError(block.y < 0, 
        "WARNING: Your block is under the world, this will generate an impossible book. Continue?", 
        "block.y < 0")

    checkForError(block.y > 255, 
        "WARNING: Your block is higher than y=255, this will generate an impossible book. Continue?", 
        "block.y > 255") 


    checkForError(
        ((block.rotation == 0 || block.rotation == 2) && (block.localX == 0 || block.localX == 15)) ||
        ((block.rotation == 1 || block.rotation == 3) && (block.localZ == 0 || block.localZ == 15)),
        "WARNING: The block runs parallel to the chunk border, while also bordering the chunk border. " +
            "This will result in the block not outputting a book in the game. " +
            "This is due to a bug in the snapshot. Continue?",
        "Block is parallel to and borders the chunk border"
    );




    block.name = `${block.chunkX}/${block.chunkZ}/${block.rotation}/${block.fourthValue}/${block.y}`
    console.log(`the book name is: ${block.name}`);

    document.getElementById('theBooksName').textContent = block.name;

}



function calculateBookContents() {

            //  setting up randomness for later
            let chunkXRandom = new JavaRandom(block.chunkX);
            let chunkZRandom = new JavaRandom(block.chunkZ);
            let pseudoRandomNumber = new JavaRandom((block.fourthValue << 8) + (block.y << 4) + block.rotation);


    for (let loopCount = 1; loopCount < 17; loopCount++) {  //  creating page contents until 16 pages has been made
        let pageContents = '';

        for (let loopCount2 = 0; loopCount2 < 128; loopCount2++) {  //  creating a random character for the pages
            let indexNumber = ((chunkXRandom.nextInt() + chunkZRandom.nextInt()) | 0);
            indexNumber = ((indexNumber + -pseudoRandomNumber.nextInt()) | 0);    
            
            pageContents += characters[(floorMod(indexNumber, characters.length))];
        }
        document.getElementById('page' + loopCount).textContent = pageContents;
    }

}
