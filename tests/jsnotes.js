console.log(user.substring(0,3));

const status = loggedIn ? "Welcome back!" : "Please log in";
//  if loggedin welcome back, else please log in
let i = 0;
do {console.log(i);}  //  do while be ran one time even if while isnt being ran
while (i < 10) {i++;}
//  continue can be used to skip a certain iteration of a loop

let container = document.getElementById("results");
let btn = document.createElement("button");
container.appendChild(btn);
//  or createTextNode() for only text
//  or removeChild() to delete owo

btn.addEventListener("click", console.log('click'));






//  setInterval will do functionName every __ ms
let interval = setInterval(functionName(), 500);

//clearInterval removes the timer, the timer must be a variable
clearInterval(interval);

let rotation = 0;
let animation = setInterval(rotateElement, 200);
function rotateElement() {
    if (rotation == 360) {
        clearInterval(animation);
    }
    else {
        ++rotation;
    }
}

document.getelementby