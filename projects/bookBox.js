function calculateBook(xCoords, yCoords, zCoords) {
console.clear();
var characters = [' ', ',', '.', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var chunkX;
var chunkZ;
var inChunkX;
var inChunkZ;
var fourthValue;
var rotation;

xCoords = Number(xCoords);
yCoords = Number(yCoords);
zCoords = Number(zCoords);

function calculateBookName(xCoords, yCoords, zCoords) {




    console.log('   ');
    console.log('coords: ' + xCoords + ',' + yCoords + ',' + zCoords);

    // figuring out which chunk this is inside of
    chunkX = Math.floor(xCoords/16);
    chunkZ = Math.floor(zCoords/16);

    console.log('chunkX = ' + chunkX);
    console.log('chunkZ = ' + chunkZ);

    
    // figuring out where inside the chunk the block is
    if (xCoords < 0) {
        inChunkX = Math.abs(xCoords); 
        inChunkX = inChunkX%16; 
        inChunkX = 16 - inChunkX; 
    }
    else {
        inChunkX = xCoords%16;}


    if (zCoords < 0) {
        inChunkZ = Math.abs(zCoords); //20
        inChunkZ = inChunkZ%16; //4
        inChunkZ = 16 - inChunkZ; // 12
    }
    else {
        inChunkZ = zCoords%16;}

    console.log('inChunkX = ' + inChunkX);
    console.log('inChunkZ = ' + inChunkZ);


    // figuring out what the third and 4th value are
    rotation = document.querySelector('input[name="rotation"]:checked').value;
    console.log('rotation = ' + rotation);

    if      (rotation == 0) {fourthValue = 15 - inChunkX;}  // north
    else if (rotation == 1) {fourthValue = 15 - inChunkZ;}  // east
    else if (rotation == 2) {fourthValue = inChunkX;}       // south
    else if (rotation == 3) {fourthValue = inChunkZ;}       // west
    else    (fourthValue = 'error');
            rotation = Number(rotation);


    var finalBookName = chunkX +'/'+ chunkZ +'/'+ rotation +'/'+ fourthValue +'/'+ yCoords;
    console.log('the book name is: ' + finalBookName);

    document.getElementById('theBooksName').innerHTML = finalBookName;
}





function floorMod(a, b) {return ((a % b) + b) % b;}
function calculateBookContents() {

            //rn these are Math.seedrandom(seed), but once i get java randomness itll just be Random(seed);
            /*Math.seedrandom(chunkX);
            var chunkXRandom = Math.floor(Math.random()* 10);
            console.log('chunkXRandom = ' + chunkXRandom);

            Math.seedrandom(chunkZ);
            var chunkZRandom = Math.floor(Math.random()* 10);
            console.log('chunkZRandom = ' + chunkZRandom)

            Math.seedrandom((fourthValue << 8) + (yCoords << 4) + rotation);
            var psuedoRandomNumber = Math.floor(Math.random()* 10);
            
            console.log('psuedoRandomNumber = ' + psuedoRandomNumber)*/

            var chunkXRandom = new JavaRandom(chunkX);
            var chunkZRandom = new JavaRandom(chunkZ);
            var psuedoInputNum = (fourthValue << 8) + (yCoords << 4) + rotation;
            var psuedoRandomNumber = new JavaRandom(psuedoInputNum);
            //console.log(psuedoRandomNumber.nextInt());


    for (var loopCount = 1; loopCount < 17; loopCount++) {  //  creating page contents until 16 pages has been made
        var pageContents = '';
        for (var loopCount2 = 0; loopCount2 < 128; loopCount2++) {  //  creating a random character for the pages
            
            var indexNumber = ((chunkXRandom.nextInt() + chunkZRandom.nextInt()) | 0);
            indexNumber = ((indexNumber + -psuedoRandomNumber.nextInt()) | 0); 
            //var indexNumber = Math.floor(Math.random()* 10);  //  for random non seeded index number
   
            
            pageContents = pageContents + characters[(floorMod(indexNumber, characters.length))];
            //console.log(pageContents);
        }
        document.getElementById('page' + loopCount).innerHTML = pageContents;
        //console.log(''); console.log('the final page is:' + pageContents)
    }

}

//  java random seed = 332 = -1086229774 | js's -1086229774 
//  java random seed = 0 =   -1155484576 | js's -1155484576

calculateBookName(xCoords, yCoords, zCoords);
calculateBookContents();
}
