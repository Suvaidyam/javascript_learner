var product = {
    Name: "vishal",
    Price: 500,
    Quantity: 2,
};
var Total = function (product) {
    return product.Price * product.Quantity;
};
console.log(Total(product));
