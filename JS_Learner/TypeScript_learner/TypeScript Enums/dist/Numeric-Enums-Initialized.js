"use strict";
var vk;
(function (vk) {
    vk[vk["north"] = 1] = "north";
    vk[vk["West"] = 2] = "West";
    vk[vk["East"] = 3] = "East";
    vk[vk["South"] = 4] = "South";
})(vk || (vk = {}));
let v = vk.East;
console.log(v); // 3
console.log(vk.South); // 4
