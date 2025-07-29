function calculateBookName(xCoords, yCoords, zCoords) {
    console.log('   ');
    console.log('coords: ' + xCoords + ',' + yCoords + ',' + zCoords);

    var fourthValue;''

    // figuring out which chunk this is inside of
    var chunkX = Math.floor(xCoords/16);
    var chunkZ = Math.floor(zCoords/16);

    console.log('chunkX = ' + chunkX);
    console.log('chunkZ = ' + chunkZ);

    
    // figuring out where inside the chunk the block is
    if (xCoords < 0) {
        inChunkX = Math.abs(xCoords); 
        inChunkX = inChunkX%16; 
        inChunkX = invertInChunkNegative(inChunkX); 
    }
    else {
        inChunkX = xCoords%16;}


    if (zCoords < 0) {
        inChunkZ = Math.abs(zCoords); //20
        inChunkZ = inChunkZ%16; //4
        inChunkZ = invertInChunkNegative(inChunkZ); // 12
    }
    else {
        inChunkZ = zCoords%16;}

    console.log('inChunkX = ' + inChunkX);
    console.log('inChunkZ = ' + inChunkZ);


    // figuring out what the third value is, and how it effects the fourth value
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

// converting if the bookshelf is facing north or east
function invertInChunk(input) {    
    if (input === 0) {return 15;}
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

// converting for if the bookshelf is in a negative coordinates
function invertInChunkNegative(input) { 
    if (input === 0) {return 16;}
    if (input === 1) {return 15;}
    if (input === 2) {return 14;}
    if (input === 3) {return 13;}
    if (input === 4) {return 12;}
    if (input === 5) {return 11;}
    if (input === 6) {return 10;}
    if (input === 7) {return 9;}
    if (input === 8) {return 8;}
    if (input === 9) {return 7;}
    if (input === 10) {return 6;}
    if (input === 11) {return 5;}
    if (input === 12) {return 4;}
    if (input === 13) {return 3;}
    if (input === 14) {return 2;}
    if (input === 15) {return 1;}
}