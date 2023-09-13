function vku(name, age) {
    return name + " " + age;
}
console.log(vku("vishal", 56)); /// normal
//////////////////////////////////////////////////////////////////////////////////
function vkj(name) {
    var age = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        age[_i - 1] = arguments[_i];
    }
    return name + " " + age.join(",");
}
console.log(vkj("vishal", 56, 78, 87));
