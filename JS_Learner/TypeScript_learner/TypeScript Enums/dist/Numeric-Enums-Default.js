"use strict";
var xyz;
(function (xyz) {
    xyz[xyz["north"] = 0] = "north";
    xyz[xyz["East"] = 1] = "East";
    xyz[xyz["South"] = 2] = "South";
    xyz[xyz["West"] = 3] = "West";
    xyz[xyz["Hii"] = 4] = "Hii";
})(xyz || (xyz = {}));
let z = xyz.north;
console.log(z); /// z = 0 => index number 
