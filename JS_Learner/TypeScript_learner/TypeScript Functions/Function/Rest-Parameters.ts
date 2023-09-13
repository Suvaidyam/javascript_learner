function vku(name:string , age:number){
    return name + " " + age 
}

console.log(vku("vishal" ,56)); /// normal
//////////////////////////////////////////////////////////////////////////////////

function vkj(name:string , ...age:number[]){
    return name + " " + age.join(",")
}

console.log( vkj("vishal" ,56 ,78 ,87 ,) );
