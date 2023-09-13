// one time 
let my1: {
    Name:string,
    Age:number,
    mobile:number,
    address:string | number ,
}
/////////////////////////////////////////////////////

// multiple time
type My = { //define one time use multiple time
    Name:string;
    Age:number;
    Mobile:number;
    Address:string | number ;
}

let Info:My ={
    Name:"vishal",
    Age:18,
    Mobile:8967423983,
    Address: 'katsa' + "NH" + 722 + 'post' + 4,
}