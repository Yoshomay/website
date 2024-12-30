var zerod0 = 0 / 0;

console.log("whatchu doin?");


function hello(name) {
    //alert("hello " + name + "," + "\nThat's a stupid name");
}

hello("Yosho");

var yosho = {
    name: "Yosho", age: 15, 
    favColor: "lime", height: "5\'6\""
};
var yoshosAge = yosho.age;
var yoshosAgeTwo = yosho['age'];


document.write(yoshosAge + "<br>");
document.write(yosho.favColor);

//   new objects
function person(name, age, color) {
    this.name = name;
    this.age = age;
    this.favColor = color;
}

var p1 = new person("John", 42, "green");
var p2 = new person("Amy", 21, "red");

document.write(p1.age); 
document.write(p2.name);
//  end new objects