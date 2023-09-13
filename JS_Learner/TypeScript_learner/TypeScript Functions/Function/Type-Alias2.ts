type  ProductType = {
    Name: string;
    Price: number;
    Quantity: number
}

let product:ProductType = {
    Name:"vishal",
    Price: 500,
    Quantity:2,
}

const Total = (product:ProductType) => {
    return product.Price * product.Quantity
}

console.log( Total(product));
