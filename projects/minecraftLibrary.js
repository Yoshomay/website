function calculateBookName(xCoords, yCoords, zCoords) {
    console.log('   ');
    console.log('coords: ' + xCoords + ',' + yCoords + ',' + zCoords);

    var fourthValue;

    var chunkX = Math.floor(xCoords/16);
    var chunkZ = Math.floor(zCoords/16);

    console.log('chunkX = ' + chunkX);
    console.log('chunkZ = ' + chunkZ);


    var inChunkX = xCoords % 16;
    var inChunkZ = zCoords % 16;

    console.log('inChunkX = ' + inChunkX);
    console.log('inChunkZ = ' + inChunkZ);

    var rotation = document.querySelector('input[name="rotation"]:checked').value;
    console.log('rotation = ' + rotation);

    if      (rotation == 0) {var fourthValue = invertInChunk(inChunkX);}
    else if (rotation == 1) {var fourthValue = invertInChunk(inChunkZ);}
    else if (rotation == 2) {var fourthValue = inChunkX;}
    else if (rotation == 3) {var fourthValue = inChunkZ;}

    var finalBookName = chunkX +'/'+ chunkZ +'/'+ rotation +'/'+ fourthValue +'/'+ yCoords;
    console.log('the book name is: ' + finalBookName);

    document.getElementById('theBooksName').innerHTML = finalBookName;
}


function invertInChunk(input) {
    if (input === 0) {return 14;}
    if (input === 1) {return 14;}
    if (input === 2) {return 13;}
    if (input === 3) {return 12;}
    if (input === 4) {return 11;}
    if (input === 5) {return 10;}
    if (input === 6) {return 9;}
    if (input === 7) {return 8;}
    if (input === 8) {return 7;}
    if (input === 9) {return 6;}
    if (input === 10) {return 5;}
    if (input === 11) {return 4;}
    if (input === 12) {return 3;}
    if (input === 13) {return 2;}
    if (input === 14) {return 1;}
    if (input === 15) {return 0;}
}