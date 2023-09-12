let x : number ; //  x value is number only assassin number 
    x = 448 ; // not put wrong data type

let y : string ; // y value is string only assassin string
    y = "vishal"  // not put wrong data type

const z : string[] = [] ; // Array 

    z.push("vishal") // push only string Array

function Sum(a:number , b:number) : number{ // number + number = number 
    return a + b                    // function 
}
function Sum1(a:number , b:string) : string{ // number + string = string
    return a + b                    // function
}

let address : [number , string , number] ; // Set Array data type this format return put data type of this format 
    address = [346587, "jhfjhg" ,9857] // return Ex

let addressEmrty : [number , string , number] ;

// Object //

let WithObject : [{
    name : string , // name data type value is only string 
    age : number , // age data type value is only number 
}];
    WithObject = [{
        name : "vishal",
        age : 9
    }]

let AnotherObject : [{
        name : string ,
        age?: number , /// use question mark to set obtional 
    }];
    AnotherObject = [{
            name : "vishal",
            
        }]