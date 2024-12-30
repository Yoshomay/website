let user = "Yosho";

let yoshoLength = user.length;
console.log(user.substring(0,3));

function addition(first,second) {
    var result = first + second
    return result;
}
var result2 = addition(4,6);
//alert(result2);

let users = [
    "Joe", //  0
    "Sally", //  1
    "Yosho", //  2
    "Idiot" //  3
]

console.log(users[2]);
users[4] = "Bob";

users.push("Yoshomay"); // add
//users.pop(); // remove
//users.shift();
users.unshift("Jimmin"); // add at start
delete users[1];

users.splice(2,0,"Sam");
users.splice(1,1)


console.log(users);

let users2 = [
    "Billy",
    "Mandy",
    "Tim"
]

let allUsers = users.concat(users2);

console.log("All Users: " + allUsers);