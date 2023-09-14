class person { /// class Constructor function
    constructor(name,age,home){
        this.Name = name;
        this.Age = age;
        this.Home = home;
    }
    getHouse(){
        return `House:${this.Home}`; /// this = person
    }
}

let person1 = new person("Vishal" , 18 , "katsa");
let person2 = new person("Rohit" , 18 , "Patna");
let person3 = new person("Jitendra" , 18 , "Chhapra");

console.log(person1 + "" + person1.getHouse());

console.log(person1);

console.log(person2.getHouse());
console.log(person3.getHouse());



