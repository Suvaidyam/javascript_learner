"use strict";
var x1;
(function (x1) {
    x1[x1["not"] = 404] = "not";
    x1[x1["found"] = 505] = "found";
    x1[x1["accepted"] = 707] = "accepted";
    x1[x1["success"] = 708] = "success";
})(x1 || (x1 = {}));
let x = x1.found;
console.log(x);
console.log(x1.not);
console.log(x1.success);
