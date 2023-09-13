interface User {
    Name:string;
    Age:number;
    Address?:string | number; /// optional
}

let UserDetails:User = {
    Name:'vishal',
    Age:18,
}
console.log(UserDetails);
/////////////////////////////////////////////
interface User1 {
    Name:string;
    Age:number;
    Address?: string | number; /// optional
}
let UserDetails1:  Required<User1> ={ //  optional change to Required
    Name:"vishal",
    Age:18,
    Address: "katsa" + 722
}
console.log(UserDetails1);

