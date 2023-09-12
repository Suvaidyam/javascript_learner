type mytype = string | number | boolean ;

let x : mytype = 10;
let y : mytype = 10;
////////////////////////////////////////////
type Ntype = string;
type Htype = string;
type Atype = number; 

type FullAdrress = { // all type in one type 
    Name: Ntype,
    Home: Htype,
    Age: Atype,
}

let a : Ntype = 'vishal'; // string value vishal 
let b : Htype = 'katsa'; // string value katsa
let c : Atype = 18 ;     // number value 18


let store : FullAdrress = {
    Name: a,
    Home: b,
    Age: c,
}

console.log(store)


