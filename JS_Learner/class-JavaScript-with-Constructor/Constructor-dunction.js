// let Student = {  // Object 

//     FirstName: 'vishal',
//     LastName: "Kumar",
//     Age:18,
//     Class: 10,

// }

function Student(first,last,age,cla){ /// this is object Constructor
    this.FirstName = first; // FirstName is Key of first value
    this.LastName = last; /// this same as Student
    this.Age = age; 
    this.Class = cla;

}
let Student1 = new Student('Vishal',"Kumar" , 18 ,5);
let Student2 = new Student("Anuj" , "kumar " ,4 , 2);
let Student3 = new Student("rohit" , "kumar" , 15 , 4)

console.log(Student1);